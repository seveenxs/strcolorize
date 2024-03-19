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
    let HEX_CAPTURE = /[a-f\d]{6}|[a-f\d]{3}/i;
    let matches = HEX_CAPTURE.exec(hex);
    if (!matches)
        return null;
    let [color] = matches;
    if (color.charAt(0) == '#')
        color = color.replaceAll('#', '');
    if (color.length === 3)
        color = [...color].map(char => char + char).join('');
    let bigint = parseInt(color, 16);
    let [red, green, blue] = [
        (bigint >> 16) & 255,
        (bigint >> 8) & 255,
        bigint & 255
    ];
    return {
        open: `\u001b[38;2;${red};${green};${blue}m`,
        close: '\u001b[39m'
    };
}
exports.hexToAnsi = hexToAnsi;
;
