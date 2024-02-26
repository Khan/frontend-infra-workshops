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

## Exercise

1. Use the profiler in React dev tools to measure the render performance of the code 
   in the "exercise" folder.
2. Split `LargeComponent` in the exercise/ folder into a `Parent` component and
   multiple child components.
3. Memoize components as necessary to address remaining render performance issues.
4. Use the profiler in React dev tools to measure the render performance again.
