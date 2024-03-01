"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ansiCode_1 = require("./ansiCode");
const ansify_1 = require("./ansify");
const InternalAnsiCode = /\[([^\[\]]*?)\]\((.*?)\)/g;
const ExternalAnsiCode = /\[(.*?)\]\((.*?)\)/g;
/**
 * Colorizes your strings in the terminal.
 * @param text The text you want to colorize.
 * @param terminal If true, prints directly to the terminal.
 * @returns The colored text.
 *
 * @example
 * // Nest style
 * colorize('[This phrase is bold and this word is [red](#FF0000)](bold)', true)
 */
function colorize(text, terminal = false) {
    if (InternalAnsiCode.test(text)) {
        text = text.replace(InternalAnsiCode, (_, content, codes) => {
            const ansiCodes = codes.split(' ');
            let openedCodes = [];
            let closedCodes = [];
            for (const code of ansiCodes) {
                const styles = ansiCode_1.ansiCode[code];
                if (styles !== undefined) {
                    openedCodes.includes(`\x1b[${styles[0]}m`) ? null : openedCodes.push(`\x1b[${styles[0]}m`);
                    closedCodes.includes(`\x1b[${styles[1]}m`) ? null : closedCodes.push(`\x1b[${styles[1]}m`);
                }
                if ((0, ansify_1.hexToAnsi)(code)) {
                    openedCodes.includes((0, ansify_1.hexToAnsi)(code)) ? null : openedCodes.push((0, ansify_1.hexToAnsi)(code));
                    closedCodes.includes(`\x1b[39m`) ? null : closedCodes.push(`\x1b[39m`);
                }
            }
            ;
            const openedConvert = openedCodes.filter(codes => codes !== null).join('');
            const closedConvert = closedCodes.filter(codes => codes !== null).join('');
            return `${openedConvert}${content}${closedConvert}`;
        });
    }
    if (ExternalAnsiCode.test(text)) {
        text = text.replace(ExternalAnsiCode, (_, content, codes) => {
            const ansiCodes = codes.split(' ');
            let openedCodes = [];
            let closedCodes = [];
            for (const code of ansiCodes) {
                const styles = ansiCode_1.ansiCode[code];
                if (styles !== undefined) {
                    openedCodes.includes(`\x1b[${styles[0]}m`) ? null : openedCodes.push(`\x1b[${styles[0]}m`);
                    closedCodes.includes(`\x1b[${styles[1]}m`) ? null : closedCodes.push(`\x1b[${styles[1]}m`);
                }
                if ((0, ansify_1.hexToAnsi)(code)) {
                    openedCodes.includes((0, ansify_1.hexToAnsi)(code)) ? null : openedCodes.push((0, ansify_1.hexToAnsi)(code));
                    closedCodes.includes(`\x1b[39m`) ? null : closedCodes.push(`\x1b[39m`);
                }
            }
            ;
            const openedConvert = openedCodes.filter(codes => codes !== null).join('');
            const closedConvert = closedCodes.filter(codes => codes !== null).join('');
            return `${openedConvert}${content}${closedConvert}`;
        });
    }
    return terminal ? console.log(text) : text;
}
exports.default = colorize;
module.exports = colorize;
