"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a hexadecimal color code to ANSI escape sequence for terminal colorization.
 * @param hexcode The hexadecimal color code to convert.
 * @returns The ANSI escape sequence for the specified color, or null if the input is invalid.
 * @example
 * ```typescript
 * console.log(hexToAnsi("#FF0000")); // Output: "\x1b[38;2;255;0;0m"
 * console.log(hexToAnsi("#00FF00")); // Output: "\x1b[38;2;0;255;0m"
 * console.log(hexToAnsi("#abc"));    // Output: "\x1b[38;2;170;187;204m"
 * console.log(hexToAnsi("invalid")); // Output: null
 * ```
 */
function hexToAnsi(hexcode) {
    let matches = /^#?[a-f\d]{6}|[a-f\d]{3}/i.exec(hexcode);
    if (!matches)
        return null;
    let [hex] = matches;
    hex = hex.replace('#', '');
    if (hex.length === 3)
        hex = [...hex].map(char => char + char).join('');
    let hexNumber = parseInt(hex, 16);
    const [red, green, blue] = [
        (hexNumber >> 16) & 0xFF,
        (hexNumber >> 8) & 0xFF,
        hexNumber & 0xFF,
    ];
    return `\x1b[38;2;${red};${green};${blue}m`;
}
exports.default = hexToAnsi;
;
