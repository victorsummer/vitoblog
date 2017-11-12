### How do you statically check if a class contains a specified member function?

Notice here we talk about 'statically', in other words, we're talking about checking during compilation instead of run time.
SFINAE came to my mind naturally when I was asked about this question.
Take a look at http://en.cppreference.com/w/cpp/language/sfinae in case you're unfamiliar with SFINAE.

```c++
#include <iostream>
#include <type_traits>

struct ClassA {
    void function1();
    void function2();
};

struct ClassB {
    void function1();
};

#define FUNCTION_CHECKER(funcName) \
template <typename T> \
struct has_##funcName { \
    template <typename C> static uint_fast8_t test(decltype(&C::funcName)); \
    template <typename C> static uint_fast16_t test(...); \
    enum { value = sizeof(test<T>(0)) == sizeof(uint_fast8_t) }; \
};

FUNCTION_CHECKER(function1)
FUNCTION_CHECKER(function2)

int main() {
    std::cout << (has_function1<ClassA>::value ? "ClassA has function1" : "ClassA has no function1") << std::endl;
    std::cout << (has_function1<ClassB>::value ? "ClassB has function1" : "ClassB has no function1") << std::endl;
    std::cout << (has_function2<ClassA>::value ? "ClassA has function2" : "ClassA has no function2") << std::endl;
    std::cout << (has_function2<ClassB>::value ? "ClassB has function2" : "ClassB has no function2") << std::endl;
    return 0;
}
```

The code above is self-explanatory, and the result is not unexpected.
![](../../public/blog/posts/Check-If-Has-Member-Function-During-Compilation/check_function.png)

If you've got any other solutions, please be so kind to let me know.
