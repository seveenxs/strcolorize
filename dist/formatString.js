"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatString = void 0;
const ansiStyles_1 = require("./ansiStyles");
function formatString(content, codes) {
    const allCodes = codes.split(' ');
    let applied = "";
    for (const code of allCodes) {
        const styles = ansiStyles_1.colorsCodes[code];
        const rgbCode = ansiStyles_1.colorsCodes.rgbToAnsi(code);
        if (styles !== undefined) {
            applied += styles.open;
        }
        else if (rgbCode !== null) {
            applied += rgbCode;
        }
    }
    applied += content;
    for (let i = allCodes.length - 1; i >= 0; i--) {
        const code = allCodes[i];
        const styles = ansiStyles_1.colorsCodes[code];
        const rgbCode = ansiStyles_1.colorsCodes.rgbToAnsi(code);
        if (styles !== undefined) {
            applied += styles.close;
        }
        else if (rgbCode !== null) {
            applied += '\x1b[39m';
        }
    }
    return applied;
}
exports.formatString = formatString;
