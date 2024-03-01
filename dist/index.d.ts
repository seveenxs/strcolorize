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
declare function colorize(text: string, terminal?: boolean): string | void;
export default colorize;
