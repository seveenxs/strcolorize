import { AnsiPairs, Pair, ansi } from './ansi';

function assembly(): AnsiPairs {
    for (const [name, [open, close]] of Object.entries(ansi)) {
        const ansiPair: Pair = {
            open: `\u001B[${open}m`,
            close: `\u001B[${close}m`
        };

        (ansi[name as keyof typeof ansi] as unknown) = ansiPair;
    };

    return ansi as any
};

export const styles = assembly();

export function hexToAnsi(hex: string): Pair | null {
    let HEX_CAPTURE = /[a-f\d]{3}|[a-f\d]{6}/i;
    let matches = HEX_CAPTURE.exec(hex);

    if (!matches)
        return null;

    if (matches[0].length === 3)
        matches[0] = [...matches[0]].map(char => char + char).join('');

    const integer = parseInt(matches[0], 16);

    const [red, green, blue] = [
        (integer >> 16) & 0xFF,
        (integer >> 8) & 0xFF,
        integer & 0xFF,
    ];

    const ansicode = 16
        + (36 * Math.round(red / 255 * 5))
        + (6 * Math.round(green / 255 * 5))
        + Math.round(blue / 255 * 5);

    return {
        open: `\u001B[38;5;${ansicode}m`,
        close: `\u001B[39m`
    }
}