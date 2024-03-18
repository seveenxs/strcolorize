"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToAnsi = exports.styles = void 0;
const ansi_1 = require("./ansi");
function assembly() {
    for (const [name, [open, close]] of Object.entries(ansi_1.ansi)) {
        const ansiPair = {
            open: `\u001B[${open}m`,
            close: `\u001B[${close}m`
        };
        ansi_1.ansi[name] = ansiPair;
    }
    ;
    return ansi_1.ansi;
}
;
exports.styles = assembly();
function hexToAnsi(hex) {
    let HEX_CAPTURE = /[a-f\d]{3}|[a-f\d]{6}/i;
    let matches = HEX_CAPTURE.exec(hex);
    if (!matches)
        return null;
    if (matches[0].length === 3)
        matches[0] = [...matches[0]].map(char => char + char).join('');
    const integer = parseInt(matches[0], 16);
    const [red, green, blue] = [
        (integer >> 16) & 0xFF,
        (integer >> 8) & 0xFF,
        integer & 0xFF,
    ];
    const ansicode = 16
        + (36 * Math.round(red / 255 * 5))
        + (6 * Math.round(green / 255 * 5))
        + Math.round(blue / 255 * 5);
    return {
        open: `\u001B[38;5;${ansicode}m`,
        close: `\u001B[39m`
    };
}
exports.hexToAnsi = hexToAnsi;
