import { ansiCode } from './ansiCode';
import { hexToAnsi } from './ansify';

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
function colorize(
    text: string, terminal: boolean = false
): string | void {
    if (InternalAnsiCode.test(text)) {
        text = text.replace(InternalAnsiCode, (_, content: string, codes: string) => {
            const ansiCodes = codes.split(' ');
            let openedCodes: string[] = [];
            let closedCodes: string[] = [];

            for (const code of ansiCodes) {
                const styles = ansiCode[code as keyof typeof ansiCode];

                if (styles !== undefined) {
                    openedCodes.includes(`\x1b[${styles[0]}m`) ? null : openedCodes.push(`\x1b[${styles[0]}m`);
                    closedCodes.includes(`\x1b[${styles[1]}m`) ? null : closedCodes.push(`\x1b[${styles[1]}m`);
                }

                if (hexToAnsi(code)) {
                    openedCodes.includes(hexToAnsi(code) as string) ? null : openedCodes.push(hexToAnsi(code) as string);
                    closedCodes.includes(`\x1b[39m`) ? null : closedCodes.push(`\x1b[39m`);
                }
            };

            const openedConvert = openedCodes.filter(codes => codes !== null).join('');
            const closedConvert = closedCodes.filter(codes => codes !== null).join('');

            return `${openedConvert}${content}${closedConvert}`
        });
    }
    
    if (ExternalAnsiCode.test(text)) {
        text = text.replace(ExternalAnsiCode, (_, content: string, codes: string) => {
            const ansiCodes = codes.split(' ');
            let openedCodes: string[] = [];
            let closedCodes: string[] = [];

            for (const code of ansiCodes) {
                const styles = ansiCode[code as keyof typeof ansiCode];

                if (styles !== undefined) {
                    openedCodes.includes(`\x1b[${styles[0]}m`) ? null : openedCodes.push(`\x1b[${styles[0]}m`);
                    closedCodes.includes(`\x1b[${styles[1]}m`) ? null : closedCodes.push(`\x1b[${styles[1]}m`);
                }

                if (hexToAnsi(code)) {
                    openedCodes.includes(hexToAnsi(code) as string) ? null : openedCodes.push(hexToAnsi(code) as string);
                    closedCodes.includes(`\x1b[39m`) ? null : closedCodes.push(`\x1b[39m`);
                }
            };

            const openedConvert = openedCodes.filter(codes => codes !== null).join('');
            const closedConvert = closedCodes.filter(codes => codes !== null).join('');

            return `${openedConvert}${content}${closedConvert}`
        });
    }

    return terminal ? console.log(text) : text
}

export default colorize
module.exports = colorize