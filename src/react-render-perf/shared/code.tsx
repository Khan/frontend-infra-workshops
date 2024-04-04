import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import * as React from "react";

export const code: React.FC<
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
