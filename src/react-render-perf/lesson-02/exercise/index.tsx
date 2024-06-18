import EventEmitter from "eventemitter3";
import {useMemo} from "react";
import {ColorPicker} from "./color-picker";
import {ColorPickerContext} from "./color-picker-context";

export default function Exercise2() {
    const emitter = useMemo(() => new EventEmitter(), []);
    return (
        <div>
            <h1>Solution 2: Prevent Context From Rendering</h1>
            <ColorPickerContext.Provider value={emitter}>
                <ColorPicker />
            </ColorPickerContext.Provider>
        </div>
    );
}
