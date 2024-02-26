[Home](../README.md)

# 03 - Avoid Using Context

If your context contains an event emitter (or other class instance) and it's only 
used once in your application, you can simplify things even further by using a
singleton instance of it.

## Example

Using our example from [Lesson 2](../lesson-02/README.md) we can replace the context
by creating a `EventEmitter` singleton and using it directly in our components.

```tsx
import {createContext, useContext, useState, useMemo} from "react";
import EventEmitter from "eventemitter3";

const emitterSingleton = new EventEmitter();

const Foo = () => {
    const [foo, setFoo] = useState<number>(0);
    emitterSingleton.on("foo", setFoo);

    return <h1>foo = {foo}</h1>;
};

const Bar = () => {
    const [bar, setBar] = useState<number>(0);
    emitterSingleton.on("bar", setBar);

    return <h1>bar = {bar}</h1>;
};

const Parent = () => {
    const [foo, setFoo] = useState<number>(0);
    const [bar, setBar] = useState<number>(0);

    const incrementFoo = () => {
        emitterSingleton.emit("foo", foo + 1);
        setFoo(foo + 1);
    };
    const incrementBar = () => {
        emitterSingleton.emit("bar", bar + 1);
        setBar(bar + 1);
    }

    <>
        <FooBarContext.Provider value={value}>
            <Foo/>
            <Bar/>
        </FooBarContext.Provider>
        <button onClick={incrementFoo}>increment foo</button>
        <button onClick={incrementBar}>increment bar</button>
    </>
};
```

## Notes

While singletons are sometimes frowned upon because they can make testing more
difficult in some languages, that isn't the case in JavaScript. It's easy to mock
the singleton using `jest` if follow these guidelines:

- Export the singleton from its own file.
- If you have a custom class instead of using `EventEmitter` be sure to export
  that as well so that you can use it when mocking the singleton.

## Exercise

The code in the exercise/ folder in this lesson is the same as the solution/ folder
for the Lesson 2.

1. Use the profiler in React dev tools to measure the render performance of the
code in the "exercise" folder.
2. Replace the React Context in the code with a singleton.
3. Use the profiler in React dev tools to measure the render performance again.
