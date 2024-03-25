import {useState, memo} from "react";

import {fib} from "../../shared/fib";

type Props = {
    n: number;
    color: string;
};

export const Triangle = memo(({n, color}: Props) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Triangle</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setCount((count) => count + 1)}>
                Click me! ({count})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <path fill={color} d="M20,20L20,120L120,120Z" />
            </svg>
        </>
    );
});
