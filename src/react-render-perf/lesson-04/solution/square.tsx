import {useState, memo} from "react";

import Fib from "./fib";

type Props = {
    n: number;
    color: string;
};

export default memo(function Square({n, color}: Props) {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Square</h2>
            <Fib n={n} />
            <button onClick={() => setCount((count) => count + 1)}>
                Click me! ({count})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <rect fill={color} x={20} y={20} width={120} height={120} />
            </svg>
        </>
    );
});
