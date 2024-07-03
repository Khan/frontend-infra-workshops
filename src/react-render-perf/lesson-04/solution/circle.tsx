import {useState, memo} from "react";

import Fib from "./fib";

type Props = {
    n: number;
    color: string;
};

export default memo(function Circle({n, color}: Props) {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Circle</h2>
            <Fib n={n} />
            <button onClick={() => setCount((count) => count + 1)}>
                Click me! ({count})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <circle fill={color} r={50} cx={80} cy={80} />
            </svg>
        </>
    );
});
