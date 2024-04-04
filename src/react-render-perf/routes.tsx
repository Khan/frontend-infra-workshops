import {BrowserRouter, Route} from "react-router-dom";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import * as React from "react";

import TableOfContents from "./README.mdx";
import Lesson01 from "./lesson-01/README.mdx";
import Lesson02 from "./lesson-02/README.mdx";
import Lesson03 from "./lesson-03/README.mdx";
import Lesson04 from "./lesson-04/README.mdx";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/react-render-perf" exact={true}>
                <TableOfContents />
            </Route>
            <Route path="/react-render-perf/lesson-01" exact={true}>
                <Lesson01 components={{code}} />
            </Route>
            <Route path="/react-render-perf/lesson-02" exact={true}>
                <Lesson02 components={{code}} />
            </Route>
            <Route path="/react-render-perf/lesson-03" exact={true}>
                <Lesson03 components={{code}} />
            </Route>
            <Route path="/react-render-perf/lesson-04" exact={true}>
                <Lesson04 components={{code}} />
            </Route>
        </BrowserRouter>
    );
}

const code: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({children, className, ...properties}) => {
    return className ? (
        // @ts-expect-error: the types for `children` are incompatible
        <SyntaxHighlighter language="tsx" {...properties}>
            {children}
        </SyntaxHighlighter>
    ) : (
        <span style={{fontFamily: "monospace"}}>children</span>
    );
};
