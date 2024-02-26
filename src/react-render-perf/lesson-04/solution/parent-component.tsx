import {Circle} from "./circle";
import {Square} from "./square";
import {Triangle} from "./triangle";

export function ParentComponent() {
    const n = 35;

    return (
        <div>
            <Circle n={n} />
            <Triangle n={n} />
            <Square n={n} />
        </div>
    );
}
