/**
 * Colorizes text based on ANSI escape sequences or hexadecimal color codes.
 * @param text The text to be colorized.
 * @param terminal A boolean flag indicating whether to print the colorized text directly to the terminal.
 * @returns If `terminal` is true, prints the colorized text to the terminal and returns void. Otherwise, returns the colorized text as a string.
 */
declare function colorize(text: string, terminal?: false): string;
declare function colorize(text: string, terminal?: true): void;
export default colorize;
