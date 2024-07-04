import {useMemo} from "react";

import ColorPicker from "./color-picker";
import {ColorPickerEventEmitter} from "./color-picker-event-emitter";
import {ColorPickerContext} from "./color-picker-context";

export default function Solution3() {
    const emitter = useMemo(() => new ColorPickerEventEmitter(), []);

    return (
        <div>
            <h1>Exercise 3: Avoid Using Context</h1>
            <ColorPickerContext.Provider value={emitter}>
                <ColorPicker />
            </ColorPickerContext.Provider>
        </div>
    );
}
