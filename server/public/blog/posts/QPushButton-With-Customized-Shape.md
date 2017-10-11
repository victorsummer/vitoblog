If you happen to be looking for how to implement a round push button for your application which is based on Qt Widgets, you should be interested in this article.
(Of course, if you're working with QML, that'd be much easier and simpler.)

* Create a new class named whatever you want, but it needs to be inherited from QPushButton.

```c++
#ifndef ROUNDBUTTON_HPP
#define ROUNDBUTTON_HPP

#include <QPushButton>

class RoundButton : public QPushButton {
public:
    explicit RoundButton(const QString &text, QWidget *parent = 0);

    ~RoundButton();
};

#endif // ROUNDBUTTON_HPP
```

* That's definitely not enough.
  * You have to repaint the button to make it look like a round button, so you have to reimplement the paintEvent function.
  * If you want to paint different button background image when a mouse cursor is hovering on the button, reimplementation for both enterEvent and leaveEvent is a must.
  * Lastly, we don't want the button to respond to any click or press outside the round area of the button, we have to call setMask in resizeEvent.
Then our header file should look like this.

```c++
#ifndef ROUNDBUTTON_HPP
#define ROUNDBUTTON_HPP

#include <QPushButton>

class RoundButton : public QPushButton {
public:
    explicit RoundButton(const QString &text, QWidget *parent = 0);

    ~RoundButton();

protected:
    void enterEvent(QEvent *event);
    void leaveEvent(QEvent *event);
    void paintEvent(QPaintEvent *event);
    void resizeEvent(QResizeEvent *event);

private:
    inline const bool &isHover() const {
        return mIsHover;
    }

private:
    bool mIsHover = false;
};

#endif // ROUNDBUTTON_HPP
```  

* Let's take a look at the four protected functions one by one. In order to track if a mouse is hovering over our button, enterEvent and leaveEvent come to help.

```c++
void RoundButton::enterEvent(QEvent *event) {
    mIsHover = true;
    QPushButton::enterEvent(event);
}

void RoundButton::leaveEvent(QEvent *event) {
    mIsHover = false;
    QPushButton::leaveEvent(event);
}
```

* Prepare the background images for the button, basically there are three images which respectively is shown when no user action, a mouse cursor is hovering, and user pressed the button.
And don't forget to put them in the .qrc file.

```sh
<RCC>
    <qresource prefix="/Image">
        <file>Images/roundButton.png</file>
        <file>Images/roundButtonPress.png</file>
        <file>Images/roundButtonHover.png</file>
    </qresource>
</RCC>
```

* Now we repaint our round buttons with different background images according to three different states, which are normal, hovering and pressed.

```c++
void RoundButton::paintEvent(QPaintEvent *event) {
    Q_UNUSED(event)
    QPainter painter(this);
    painter.setRenderHint(QPainter::SmoothPixmapTransform, true);
    if (isDown()) {
        painter.drawImage(rect(), QImage(":/Image/Images/roundButtonPress.png"));
    } else if (isHover()) {
        painter.drawImage(rect(), QImage(":/Image/Images/roundButtonHover.png"));
    } else {
        painter.drawImage(rect(), QImage(":/Image/Images/roundButton.png"));
    }

    QPen pen;
    pen.setColor(Qt::white);
    painter.setPen(pen);
    QFont font(QFont("Arial", 18));
    font.setBold(true);
    painter.setFont(font);


    if (isDown()) {
        QRectF rect = this->rect();
        painter.drawText(rect.translated(-1, -1), Qt::AlignCenter, this->text());
    } else {
        painter.drawText(rect(), Qt::AlignCenter, this->text());
    }
}
```

* At last, we can restrain our working area to the round background image of the button.

```c++
void RoundButton::resizeEvent(QResizeEvent *event) {
    int side = qMin(width(), height());
    QRegion maskedRegion(width() / 2 - side / 2, height() / 2 - side / 2, side,
                         side, QRegion::Ellipse);
    setMask(maskedRegion);

    QPushButton::resizeEvent(event);
}
```

* Okay, it's done.
