import {createContext} from "react";

import {Color} from "../../shared/color";

type Context = {
    color?: Color;
    setColor: (color?: Color) => void;
};

export const ColorPickerContext = createContext<Context | null>(null);
