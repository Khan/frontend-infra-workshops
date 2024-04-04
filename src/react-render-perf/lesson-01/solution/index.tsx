import {useState, useCallback} from "react";

import {ChildComponent} from "../solution/child";

export default function Solution1() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount((count) => count + 1);
    }, []);
    const circle = {
        radius: 10,
        center: {x: 10, y: 10},
    };

    return (
        <div>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleClick} circle={circle} />
        </div>
    );
}
