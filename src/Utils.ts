export default class Utils {
    public static COLOR_TINT:number;

    public static rgbToHex(r:number, g:number, b:number):number {
        return (r << 16) + (g << 8) + b;
    }

    public static randomColorProxy():number {
        return Utils.COLOR_TINT;
    }
}