import * as React from "react";
import arePropsEqual from "react-fast-compare";

import {fib} from "../../shared/fib";
import {Circle} from "../../shared/shapes";

type Props = {
    circle: Circle;
    onClick: () => void;
};

const ChildComponent = React.memo(function ({circle, onClick}: Props) {
    return (
        <div>
            <h1>Child Component</h1>
            <p>fib(36) = {fib(36)}</p>
            <button onClick={onClick}>Click me!</button>
            <svg>
                <circle
                    r={circle.radius}
                    cx={circle.center.x}
                    cy={circle.center.y}
                />
            </svg>
        </div>
    );
}, arePropsEqual);

export default ChildComponent;
