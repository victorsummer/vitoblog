Pretend that that we've got a Javascript as follows, and you want to call funcTwo.
```javascript
var a, b, c;
function funcOne(var param) {
}
function funcTwo(var param1, var param2) {
    return "You called me";
}
```

To call your Javascript in Qt code, just follow the bellow bullets step by step.

* Add Qt Script support in .pro file.
```sh
QT += script
```

* Put your Javascript code into a QString.
```c++
// The Javacript code might be read from a file or network.
QString jsContent = "var a, b, c;
                    function funcOne() {
                    }
                    function funcTwo(var param1, var param2) {
                        return \"You called me\";
                    }";
```

* Load the Javacript to QScriptEngine.
```c++
QScriptEngine scriptEngine;
scriptEngine.evaluate(jsContent);
```

* Find the function you want to call.
```c++
QScriptValue funcTwo = scriptEngine.globalObject().property("funcTwo");
```

* Call the function.
```c++
QScriptValueList args;
args << QScriptValue(100) << QScriptValue("hello");
QString retValue = funcTwo.call(QScriptValue(), args).toString();
```

* You can simle now.^_^
