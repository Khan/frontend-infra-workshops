import ColorPicker from "./color-picker";

export default function Exercise2() {
    return (
        <div>
            <h1>Exercise 2: Prevent Context From Rendering</h1>
            <p>
                Below is a colour picker. Clicking on it will select the colour
                under the mouse cursor. Profile to see where the performance
                issues are and then resolve them using the technique described
                in this lesson.
            </p>
            <p>
                NOTE: There are multiple components in this example that could
                be memoized. Part of this exercise is figuring out which ones
                make sense to memoize.
            </p>
            <ColorPicker />
        </div>
    );
}
