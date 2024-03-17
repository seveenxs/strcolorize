"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansicodes = exports.styles = void 0;
exports.styles = {
    // Modifiers
    reset: [0, 0],
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    // Texts Colors
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright Texts color
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],
    // Backgrounds Colors
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright Backgrounds color
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
};
function assembly() {
    for (const [styleName, style] of Object.entries(exports.styles)) {
        exports.styles[styleName] = {
            open: `\x1b[${style[0]}m`,
            close: `\x1b[${style[1]}m`
        };
        Object.defineProperty(exports.styles, styleName, {
            value: exports.styles[styleName],
        });
    }
    ;
    Object.defineProperty(exports.styles, 'rgbToAnsi', {
        value: (input) => {
            const matches = /^#?[a-f\d]{6}|[a-f\d]{3}/i.exec(input);
            if (!matches)
                return null;
            let [color] = matches;
            if (color.replace('#', '').length === 3)
                color = [...color.replace('#', '')].map(char => char + char).join('');
            const hexColor = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
            let [red, green, blue] = [
                parseInt(hexColor[1], 16),
                parseInt(hexColor[2], 16),
                parseInt(hexColor[3], 16)
            ];
            const rgbColor = 16
                + (36 * Math.round(red / 255 * 5))
                + (6 * Math.round(green / 255 * 5))
                + Math.round(blue / 255 * 5);
            return `\x1b[38;5;${rgbColor}m`;
        }
    });
    return exports.styles;
}
;
exports.ansicodes = assembly();
