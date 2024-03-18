import { hexToAnsi, styles } from "./assembly";

/**
 * Colorizes text based on ANSI escape sequences or hexadecimal color codes.
 * @param text The text to be colorized.
 * @param terminal A boolean flag indicating whether to print the colorized text directly to the terminal.
 * @returns If `terminal` is true, prints the colorized text to the terminal and returns void. Otherwise, returns the colorized text as a string.
 */
function colorize(text: string, terminal?: false): string;
function colorize(text: string, terminal?: true): void;
function colorize(text: string, terminal: boolean = false) {
    let TAG = /#([a-zA-Z\d\s,]+)\[((?:\[[^\[\]]*\]|[^\[\]])*)\]/i;

    while (TAG.test(text)) {
        let matches = TAG.exec(text);
        let codes = matches![1];

        const AllOpen: string[] = []
        const AllClose: string[] = []

        for (const code of codes.split(/[\s,]/g)) {
            const style = styles[code as keyof typeof styles];
            const hexcode = hexToAnsi(code);

            if (style !== undefined) {
                AllOpen.push(style.open);
                AllClose.push(style.close);
            }

            if (hexcode !== null) {
                AllOpen.push(hexcode.open);
                AllClose.push(hexcode.close);
            }
        };

        text = text.replace(matches![0], AllOpen.join('') + matches![2] + AllClose.join(''));
    }

    if (terminal)
        console.log(text);

    return text
}

export default colorize
module.exports = colorize