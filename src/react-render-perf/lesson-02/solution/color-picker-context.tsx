import {createContext} from "react";

import {
    colorPickerEventEmitter,
    ColorPickerEventEmitter,
} from "./color-picker-event-emitter";

export const ColorPickerContext = createContext<ColorPickerEventEmitter>(
    colorPickerEventEmitter,
);
