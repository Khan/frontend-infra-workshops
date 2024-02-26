import {useState} from "react";

import {fib} from "../../shared/fib";

type Props = {
    n: number;
};

export function Circle({n}: Props) {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Circle</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setCount((count) => count + 1)}>
                Click me! ({count})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <circle fill="red" r={50} cx={80} cy={80} />
            </svg>
        </>
    );
}
