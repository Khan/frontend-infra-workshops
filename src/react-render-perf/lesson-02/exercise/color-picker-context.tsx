import {createContext} from "react";
import EventEmitter from "eventemitter3";

export const ColorPickerContext = createContext<EventEmitter | null>(null);
