import {ReactElement} from "react";

import {Gradient} from "./gradient";
import {Color, lerpColor} from "../../shared/color";

type Props = {
    topLeft: Color;
    topRight: Color;
    bottomLeft: Color;
    bottomRight: Color;
    steps: number;
};

export function Grid({
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    steps,
}: Props) {
    const gradients: Array<ReactElement<typeof Gradient>> = [];
    for (let i = 0; i < steps; i++) {
        const start = lerpColor(topLeft, bottomLeft, i / steps);
        const stop = lerpColor(topRight, bottomRight, i / steps);
        gradients.push(<Gradient start={start} stop={stop} steps={steps} />);
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {gradients}
        </div>
    );
}
