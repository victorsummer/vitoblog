####You want your Qt application to run only one instance for one computer?

Actually, it is much simpler than you think. 
Before everything of your application, create a shared memory and check if it has already been created or not.
If the shared memory has been created, just exit the application, otherwise, go on to run your application code.

```c++
#include <QApplication>
#include <QSystemSemaphore>
#include <QSharedMemory>
#include <QMessageBox>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    QSystemSemaphore sema("MY_APP_KEY", 1, QSystemSemaphore::Open);

    sema.acquire();

    QSharedMemory mem("MY_APP_ID");

    if (!mem.create(1))
    {
        QMessageBox::information(0, "MY_APP Error","An instance has already been running.");
        sema.release();
        exit(0);
    }

    sema.release();

    // Put your application code here.
    // Code
    // Code

    return a.exec();
}
```

Life isn't as hard as we usually expect, is it?
