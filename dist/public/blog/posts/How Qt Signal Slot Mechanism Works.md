### How does Qt Signal & Slot Mechanism work?

Qt is renowned for its user-friendly inter objects communication mechanism, the signal and slot.

However, the underlying design concept of Qt signal and slot doesn't adopt the way as most developers go with C++ templates. Instead, we could simply call the their design concept as introspection signal & slot, which is our main topic today.

If you're not familiar with the C++ templates signal slot implementation, please take a look at my SimpleSignal as reference by visiting https://github.com/victorsummer/SimpleSignal.

And the official Qt document argues about their introspection approach against C++ templates at http://doc.qt.io/qt-4.8/templates.html. Though there are still debates out there, it's up to you which way to go according to your specified project requirement.

Anyway let's focus upon how the introspection signal & slot mechanism works. I call it a mechanism, because it is NOT easy to understand. So I'll just try to provide a high level overview explanation here, instead of reviewing the source code line by line, which is boring and tedious, but I still suggest you do it yourself.

The base of the whole Qt framework is the core library, and the base of the core library is the so called MOS(Meta-Object System). Thus MOS is very fundamental in the Qt world and plays an essential role in the Qt signal & slot mechanism, let's put it simply, no MOS, no Qt signal & slot. That's why we should talk about it first of all. Note, there are three facts about MOS.

1. MOS supports introspection which is the basic idea for Qt signal & slot.
2. MOS features and related codes are produced by moc(Meta-Object Compiler), thus introspection doesn't requires RTTI(Run-Time Type Information), Qt signal & slot neither.
3. MOS only works with QObject with Q_OBJECT macro enabled, which also applies to Qt signal & slot.

Next we'll see how Qt takes advantages of MOS to implement the introspection signal & slot mechanism.

Basic steps for the usage of the signal & slot mechanism is easy as follows.

1. Call QObject::connect to build a connection between a signal and a slot.
2. Emit the signal and expect a call to the slot.

Firstly, QObject::connect get the index of the signal with the help of MOS introspection, call QMetaObjectPrivate::connect with the signal index.

```c++
QMetaObject::Connection QObject::connect(const QObject *sender, const char *signal,
                                     const QObject *receiver, const char *method,
                                     Qt::ConnectionType type)
{
    ...
    const QMetaObject *smeta = sender->metaObject();
    ...
    QByteArray signalName = QMetaObjectPrivate::decodeMethodSignature(signal, signalTypes);
    int signal_index = QMetaObjectPrivate::indexOfSignalRelative(
            &smeta, signalName, signalTypes.size(), signalTypes.constData());
    signal_index = QMetaObjectPrivate::originalClone(smeta, signal_index);
    signal_index += QMetaObjectPrivate::signalOffset(smeta);
    ...
    QMetaObject::Connection handle = QMetaObject::Connection(QMetaObjectPrivate::connect(
        sender, signal_index, smeta, receiver, method_index_relative, rmeta ,type, types));
    return handle;
}
```
Unlike C++ templates signal, Qt doesn't store the callbacks while building a connection, instead, QMetaObjectPrivate::connect obtains the slot method index and offset, then add all information as a QObjectPrivate::Connection struct into the signal related ConnectionList. For one object, there might be more than one signals, so QObject has a vector container called ConnectionListVector to store the all their ConnectionList.

```c++
QObjectPrivate::Connection *QMetaObjectPrivate::connect(const QObject *sender,
                                 int signal_index, const QMetaObject *smeta,
                                 const QObject *receiver, int method_index,
                                 const QMetaObject *rmeta, int type, int *types)
{
    ...
    int method_offset = rmeta ? rmeta->methodOffset() : 0;
    Q_ASSERT(!rmeta || QMetaObjectPrivate::get(rmeta)->revision >= 6);
    QObjectPrivate::StaticMetaCallFunction callFunction =
        rmeta ? rmeta->d.static_metacall : 0;
    ...

    QScopedPointer<QObjectPrivate::Connection> c(new QObjectPrivate::Connection);
    c->signal_index = signal_index;
    c->method_relative = method_index;
    c->method_offset = method_offset;
    c->callFunction = callFunction;
    ...

    QObjectPrivate::get(s)->addConnection(signal_index, c.data());
    ...
    return c.take();
}
```
When a signal is emitted, QMetaObject::activate will be called, and again with the help of MOS, Qt get the slot function address and call it, assuming the connection type is not Qt::QueuedConnection, which will be sent to the event loop, waiting to be called in a queue.
```c++
void QMetaObject::activate(QObject *sender, int signalOffset, int local_signal_index, void **argv)
{
    ...
    list = &connectionLists->at(signal_index);
    ...
    do {
        QObjectPrivate::Connection *c = list->first;
        do {
            const int methodIndex = c->method();
            const int method_relative = c->method_relative;
            const auto callFunction = c->callFunction;

            callFunction(receiver, QMetaObject::InvokeMetaMethod, method_relative, argv ? argv : empty_argv);

        } while (c != last && (c = c->nextConnectionList) != 0);
        ...
        if (connectionLists->orphaned)
            break;
    } while (list != &connectionLists->allsignals &&
        //start over for all signals;
        ((list = &connectionLists->allsignals), true));

    }
    ...
}
```

Let's summarize the whole process with the following diagram.
![](../../public/blog/posts/How-Qt-Signal-Slot-Mechanism-Works/Qt_Signal_Slot.png)
