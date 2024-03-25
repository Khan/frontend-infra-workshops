[Home](../README.md)

# 02 - Prevent Context From Re-rendering

React Context is useful for sharing data with its descendent components. When
changes are made to the context, this causes the context and all of its
descendents to be re-rendered. If the number of descendents is large, this can
result in poor rendering performance.

In order to avoid re-rendering all of the descendents we'd like only those
components using the context to re-render.  Ideally, the should only re-render
if the data that they're making use of changes.

In the following example, everytime we update the `value` in the context, we
re-render both child components of the context even though only one of them
needs to be update.

```tsx
import {createContext, useContext, useState} from "react";

type FooBar = {
    foo: number;
    bar: number;
};

const FooBarContext = createContext<FooBar>({foo: 0, bar: 0});

const Foo = () => {
    const {foo} = useContext(FooBarContext);
    return <h1>foo = {foo}</h1>;
};

const Bar = () => {
    const {bar} = useContext(FooBarContext);
    return <h1>bar = {bar}</h1>;
};

const Parent = () => {
    const [value, setValue] = useState<FooBar>({foo: 0, bar: 0});
    const incrementFoo = () => setValue(fb => {...fb, foo: fb.foo + 1});
    const incrementBar = () => setValue(fb => {...fb, foo: fb.foo + 1});
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

To avoid this problem we can replace the plain old JavaScript object being
used for the context's `value` with a event emitter instance. The instance is
only created once and is never replaced so the `value` never changes which
means that the context will never trigger a re-render.

The child components will register event listeners for changes to only the
data they care about. The parent component will emit the appropriate event when
increment the values for `foo` and `bar`.

```tsx
import {createContext, useContext, useState, useMemo} from "react";
import EventEmitter from "eventemitter3";

const FooBarContext = createContext<EventEmitter | null>(null);

const Foo = () => {
    const emitter = useContext(FooBarContext);
    const [foo, setFoo] = useState<number>(0);
    emitter?.on("foo", setFoo);

    return <h1>foo = {foo}</h1>;
};

const Bar = () => {
    const emitter = useContext(FooBarContext);
    const [bar, setBar] = useState<number>(0);
    emitter?.on("bar", setBar);

    return <h1>bar = {bar}</h1>;
};

const Parent = () => {
    const [foo, setFoo] = useState<number>(0);
    const [bar, setBar] = useState<number>(0);
    const emitter = useMemo(() => new EventEmitter(), []);

    const incrementFoo = () => {
        emitter.emit("foo", foo + 1);
        setFoo(foo + 1);
    };
    const incrementBar = () => {
        emitter.emit("bar", bar + 1);
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

This is necessary but not sufficient to prevent both `Foo` and `Bar` from
re-rendering when either `foo` or `bar` is incremented. That's because
`Parent` is re-rendering when its state changes. To avoid this issue we also
need to memoize `Foo` and `Bar` themselves. Thankfully they don't take any
props so this is trivial to do.

```tsx
import {createContext, useContext, useState, memo} from "react";

const Foo = memo(() => {
    const emitter = useContext(FooBarContext);
    const [foo, setFoo] = useState<number>(0);
    emitter?.on("foo", setFoo);

    return <h1>foo = {foo}</h1>;
});

const Bar = memo(() => {
    const emitter = useContext(FooBarContext);
    const [bar, setBar] = useState<number>(0);
    emitter?.on("bar", setBar);

    return <h1>bar = {bar}</h1>;
});
```

## Exercise

1. Use the profiler in React dev tools to measure the render performance of the
code in the "exercise" folder.
2. Update the code in the "exercise" folder to use an `EventEmitter` to prevent
the `value` in the context provider from changing.
3. Memoize only the necessary components to prevent unecessary re-renders.
4. Use the profiler in React dev tools to measure the render performance again.
