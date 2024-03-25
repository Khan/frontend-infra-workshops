export type Color = {
    red: number;
    green: number;
    blue: number;
};

export function toCssColor(color: Color) {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
}

export function lerpColor(start: Color, end: Color, t: number): Color {
    return {
        red: lerp(start.red, end.red, t),
        green: lerp(start.green, end.green, t),
        blue: lerp(start.blue, end.blue, t),
    };
}

function lerp(start: number, end: number, t: number) {
    return start + (end - start) * t;
}
