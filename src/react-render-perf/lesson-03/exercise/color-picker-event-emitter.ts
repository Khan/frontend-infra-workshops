import {EventEmitter} from "eventemitter3";

export class ColorPickerEventEmitter extends EventEmitter {
    selectedColor: string | undefined;

    public onColorChange(
        color: string,
        callback: (state: boolean) => void,
    ): () => void {
        this.on(color, callback);
        return () => this.off(color, callback);
    }

    public onSelectedColorChange(
        callback: (selectedColor: string) => void,
    ): () => void {
        this.on("any", callback);
        return () => this.off("any", callback);
    }

    public selectColor(color: string) {
        if (this.selectedColor && this.selectedColor !== color) {
            this.emit(this.selectedColor, false);
        }
        this.emit(color, true);
        this.emit("any", color);
        this.selectedColor = color;
    }
}
