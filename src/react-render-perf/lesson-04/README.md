[Home](../README.md)

# 04 - Splitting Up Large Components

Large components often end up re-rendering more stuff than is necessary when something
changes in the component. If a component uses a lot of:
- props
- state
- context usage
- HOCs
- hooks

a change to any of these things will result in the entire component re-rendering.

Splitting up a large component into a parent component and several smaller child
components means that there will be fewer things (state, context usage, etc.) in
the parent component that can trigger a re-render.  It also means that those things
will be spread out across multiple children so when one of them changes only one of
the children will re-render.

Additionally, we can memoize some or all of the new child components if we want to
prevent them from re-rendering in response props changes.

## Example

Consider `LargeComponent` below. Clicking on either of the buttons will cause
the whole component to re-render.

```tsx
import {useState} from "react";

const LargeComponent = () => {
    const [foo, setFoo] = useState<number>(0);
    const [bar, setBar] = useState<number>(0);

    const foo = <>
        <h1>foo = {foo}</h1>
        <button onClick={incrementFoo}>increment foo</button>
    </>;

    const bar = <>
        <h1>bar = {bar}</h1>
        <button onClick={incrementBar}>increment bar</button>
    </>;

    return <>
        <h1>LargeComponent</h1>
        {foo}
        {bar}
    </>
}
```

Extracting components `Foo` and `Bar` allows those components to update and
re-render indepedently of each other.


```tsx
import {useState} from "react";

const Foo = () => {
    const [foo, setFoo] = useState<number>(0);

    const foo = <>
        <h1>foo = {foo}</h1>
        <button onClick={incrementFoo}>increment foo</button>
    </>;
}

const Bar = () => {
    const [bar, setBar] = useState<number>(0);

    const bar = <>
        <h1>bar = {bar}</h1>
        <button onClick={incrementBar}>increment bar</button>
    </>;
}

const ParentComponent = () => {
    return <>
        <h1>ParentComponent</h1>
        <Foo />
        <Bar />
    </Foo>
}
```

## Notes

- If there are still other things left in the `ParentComponent` that could
  trigger a re-render, you may want to memoize some or all of the children components.
- Splitting up components has the added benefit of making the components easier
  to test. You can even mock the child components when testing the parent component.

## Exercise

1. Use the profiler in React dev tools to measure the render performance of the code 
   in the "exercise" folder.
2. Split `LargeComponent` in the exercise/ folder into a `Parent` component and
   multiple child components.
3. Memoize components as necessary to address remaining render performance issues.
4. Use the profiler in React dev tools to measure the render performance again.
