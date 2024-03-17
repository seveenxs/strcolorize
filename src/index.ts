import {ansicodes} from './ansistyles';
import hexToAnsi from './hexToAnsi';
import Group from './utils';

/**
 * Colorizes text based on ANSI escape sequences or hexadecimal color codes.
 * @param text The text to be colorized.
 * @param terminal A boolean flag indicating whether to print the colorized text directly to the terminal.
 * @returns If `terminal` is true, prints the colorized text to the terminal and returns void. Otherwise, returns the colorized text as a string.
 */
function colorize(text: string, terminal?: true): void;
function colorize(text: string, terminal?: false): string;
function colorize(text: string, terminal: boolean = false): string | void {
    let COLORIZE_REGEX: RegExp = /#([a-zA-Z\d\s,]+)\[|\]/;

    let AllOpen: string[] = [];
    let close: Group<any, any> = new Group();
    let index: number = 0;

    while (COLORIZE_REGEX.test(text)) {
        let matches = COLORIZE_REGEX.exec(text);
        let original = matches![0];

        if (original == ']') {
            if (close.size > 0) {
                let lastItem = close.last();

                if (lastItem) {
                    text = text.replace(original, lastItem[1]);
                    close.delete(lastItem[0]);
                }
            }
        } else {
            index++
            let codes = matches![1];
            let concat: string = ''

            for (const code of codes.split(/[\s,]/g)) {
                let style = ansicodes[code.toLowerCase() as keyof typeof ansicodes];
                let hexcode = hexToAnsi(code.toLowerCase());

                if (style !== undefined) {
                    AllOpen.push(style.open);
                    concat += style.close;
                }

                if (hexcode !== null) {
                    AllOpen.push(hexcode);
                    concat += '\x1b[39m';
                };
            }

            close.set(index, concat);
            concat = '';
        }
        text = text.replace(original, AllOpen.join(''));
        AllOpen = [];
    };

    if (terminal)
        console.log(text + '\x1b[0m');

    return text + '\x1b[0m';
}

export default colorize
module.exports = colorize