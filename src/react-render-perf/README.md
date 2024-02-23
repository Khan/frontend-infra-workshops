# React Render Perf

The purpose of this workshop is to learn about common issues that can result
react renders taking longer than expected.

## Preliminaries

This tutorial assumes that you have the [React Developer Tools Chrome](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1) extension installed. You will need
to make use of the "Profiler" tab in the React DevTools to measure performance
of the components in the exercises. For information on how to use "Profiler"
tab see this [blog post](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html).

## Lessons

1. [Memoizing expensive to render components](./lesson-01/README.md)
2. [Prevent React.Context from re-render the whole tree](./lesson-02/README.md)
3. [Avoid using React.Context at all](./lesson-03/README.md)
4. [Minimizing re-renders by splitting up large components](./lesson-04/README.md)
