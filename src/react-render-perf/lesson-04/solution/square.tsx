import {useState, memo} from "react";

import {fib} from "../../shared/fib";

type Props = {
    n: number;
    color: string;
};

export const Square = memo(({n, color}: Props) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Square</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setCount((count) => count + 1)}>
                Click me! ({count})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <rect fill={color} x={20} y={20} width={120} height={120} />
            </svg>
        </>
    );
});
