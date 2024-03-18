"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assembly_1 = require("./assembly");
function colorize(text, terminal = false) {
    let TAG = /#([a-zA-Z\d\s,]+)\[((?:\[[^\[\]]*\]|[^\[\]])*)\]/i;
    while (TAG.test(text)) {
        let matches = TAG.exec(text);
        let codes = matches[1];
        const AllOpen = [];
        const AllClose = [];
        for (const code of codes.split(/[\s,]/g)) {
            const style = assembly_1.styles[code];
            const hexcode = (0, assembly_1.hexToAnsi)(code);
            if (style !== undefined) {
                AllOpen.push(style.open);
                AllClose.push(style.close);
            }
            if (hexcode !== null) {
                AllOpen.push(hexcode.open);
                AllClose.push(hexcode.close);
            }
        }
        ;
        text = text.replace(matches[0], AllOpen.join('') + matches[2] + AllClose.join(''));
    }
    if (terminal)
        console.log(text);
    return text;
}
exports.default = colorize;
module.exports = colorize;
