"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatString_1 = require("./formatString");
const InternalColr = /\[([^\[\]]*?)\]\((.*?)\)/g;
const ExternalColr = /\[(.*?)\]\((.*?)\)/g;
function colorize(text, terminal = false) {
    if (InternalColr.test(text))
        text = text.replace(InternalColr, (_, content, codes) => (0, formatString_1.formatString)(content, codes));
    const colored = text.replace(ExternalColr, (_, content, codes) => (0, formatString_1.formatString)(content, codes));
    if (terminal)
        console.log(colored);
    return colored;
}
exports.default = colorize;
module.exports = colorize;
