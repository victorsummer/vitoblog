### Why should we always prefer std::make_shared and std::make_unique to std::share_ptr and std::unique_ptr from raw new allocation?

There's no std::make_unique until C++14, but it is easy to implement one according to http://en.cppreference.com/w/cpp/memory/unique_ptr/make_unique.

```c++
template<typename T, typename... Args>
std::unique_ptr<T> make_unique(Args&&... args) {
    return std::unique_ptr<T>(new T(std::forward<Args>(args)...));
}
```
It is well known that std::make_unique is more efficient than creating std::share_ptr from aw new allocation. Though std::make_unique does NOT take that advantage.

Besides the performance consideration, we have two more reasons to prefer these two std::make_ allocations. One is to avoid explicit new, which is greatly encouraged by the modern C++11. And the other is somewhat tricky, std::make_ allocations are solutions to avoid exception safety issues, let's figure out why.

Below is a classic exception safety issue.

```c++
void func(A *a, B *b);
int main() {
  func(new A, new B);
  return 0;
}
```

The construction order may be like this.
1. Construct A on heap
2. Construct B on heap

B would probably be constructed firstly by different compiler implementations.
Let's assume an exception happens while B is being constructed, then A is leaked.

Does the std::unique_ptr with raw new allocation(I'll take std::unique_ptr as an example, std::share_ptr applies the same) fix this issue? The answer is NO.

```c++
void func(std::unique_ptr<A> a, std::unique_ptr<B> b);
int main() {
  func(std::unique_ptr<A>(new A), std::unique_ptr<B>(new B));
  return 0;
}
```

The construction order may be like this.
1. Construct A on heap
2. Construct B on heap
3. Construct std::unique_ptr<A> on stack
4. Construct std::unique_ptr<B> on stack

If an exception happens while step 2, A is leaked as the same as above.

But if it's changed to std::make_unique, issues got fixed.
```c++
void func(std::unique_ptr<A> a, std::unique_ptr<B> b);
int main() {
  func(std::make_unique<A>(), std::make_unique<B>());
  return 0;
}
```

The construction order may be like this then.
1. Function std::make_unique<A> is called, A is constructed and std::unique_ptr<A> is constructed
2. Function std::make_unique<B> is called, and B is constructed, std::unique_ptr<B> is constructed

If an exception happens when calling std::make_unique<B>, std::unique_ptr<A> as a temporary variable on stack will be cleaned up automatically, no leak at all.

Though we prefer std::make_unique and std::make_shared, there are exceptions.

When we need custom delete function, or we are working based on a legacy project, we may have to use std::unique_ptr or std::share_ptr with raw new allocations.
