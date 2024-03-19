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
    let HEX_CAPTURE = /[a-f\d]{6}|[a-f\d]{3}/i;
    let matches = HEX_CAPTURE.exec(hex);

    if (!matches) return null;
    let [color] = matches;

    if (color.charAt(0) == '#')
        color = color.replaceAll('#', '');

    if (color.length === 3)
        color = [...color].map(char => char + char).join('');

    let bigint = parseInt(color, 16);
    let [red, green, blue] = [
        (bigint >> 16) & 255,
        (bigint >> 8) & 255,
        bigint & 255
    ];

    return {
        open: `\u001b[38;2;${red};${green};${blue}m`,
        close: '\u001b[39m'
    };
};