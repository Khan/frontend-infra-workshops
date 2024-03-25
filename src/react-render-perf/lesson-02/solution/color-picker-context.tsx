import {createContext} from "react";

import {ColorPickerEventEmitter} from "./color-picker-event-emitter";

export const ColorPickerContext = createContext<ColorPickerEventEmitter | null>(
    null,
);
