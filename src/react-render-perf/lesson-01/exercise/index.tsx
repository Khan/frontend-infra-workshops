import * as React from "react";

import ChildComponent from "./child";

export default function Exercise1() {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount((count) => count + 1);
    };
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
