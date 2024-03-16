"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_styles_1 = __importDefault(require("ansi-styles"));
const hexToAnsi_1 = __importDefault(require("./hexToAnsi"));
const utils_1 = __importDefault(require("./utils"));
function colorize(text, terminal = false) {
    let COLORIZE_REGEX = /#([a-z\d\s,]+)\[|\]/;
    let AllOpen = [];
    let close = new utils_1.default();
    let index = 0;
    while (COLORIZE_REGEX.test(text)) {
        let matches = COLORIZE_REGEX.exec(text);
        let original = matches[0];
        if (original == ']') {
            if (close.size > 0) {
                let lastItem = close.last();
                if (lastItem) {
                    text = text.replace(original, lastItem[1]);
                    close.delete(lastItem[0]);
                }
            }
        }
        else {
            index++;
            let codes = matches[1];
            let concat = '';
            for (const code of codes.split(/[\s,]/g)) {
                let style = ansi_styles_1.default[code];
                let hexcode = (0, hexToAnsi_1.default)(code);
                if (style !== undefined) {
                    AllOpen.push(style.open);
                    concat += style.close;
                }
                if (hexcode !== null) {
                    AllOpen.push(hexcode);
                    concat += '\x1b[39m';
                }
                ;
            }
            close.set(index, concat);
            concat = '';
        }
        text = text.replace(original, AllOpen.join(''));
        AllOpen = [];
    }
    ;
    if (terminal)
        console.log(text + '\x1b[0m');
    return text + '\x1b[0m';
}
exports.default = colorize;
module.exports = colorize;
