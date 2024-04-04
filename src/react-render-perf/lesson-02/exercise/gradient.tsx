import {ReactElement} from "react";

import {Swatch} from "./swatch";
import {Color, lerpColor, toCssColor} from "../../shared/color";

type Props = {
    start: Color;
    stop: Color;
    steps: number;
};

export function Gradient({start, stop, steps}: Props) {
    const swatches: Array<ReactElement<typeof Swatch>> = [];
    for (let i = 0; i < steps; i++) {
        const color = lerpColor(start, stop, i / steps);
        swatches.push(<Swatch key={toCssColor(color)} color={color} size={512 / steps} />);
    }

    return (
        <div style={{display: "flex", flexDirection: "row"}}>{swatches}</div>
    );
}
