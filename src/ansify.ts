export function hexToAnsi(code: string): null | string {
    let ansifiedCode: string[] = [];

    const HexColor = /^#?([a-f\d]{3}){1,2}$/i;
    if (!HexColor.test(code)) return null;

    if (code.length === 3 || code.length === 4) {
        const ShortedHexCode: RegExp = /^#?([a-f\d])([a-f\d])([a-f\d])/i;

        const match = code.match(ShortedHexCode);
        if (!match) return null;

        const [r, g, b] = [
            parseInt(match[1] + match[1], 16),
            parseInt(match[2] + match[2], 16),
            parseInt(match[3] + match[3], 16)
        ];

        const red = Math.round((r / 255) * 5);
        const green = Math.round((g / 255) * 5);
        const blue = Math.round((b / 255) * 5);

        const ansiCode = 16 + (red * 36) + (green * 6) + blue;
        ansifiedCode.push(`\x1b[38;5;${ansiCode}m`);
    }

    if (code.length === 6 || code.length === 7) {
        const HexCode: RegExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i;

        const match = code.match(HexCode);
        if (!match) return null;

        const [r, g, b] = [
            parseInt(match[1], 16),
            parseInt(match[2], 16),
            parseInt(match[3], 16)
        ];

        const red = Math.round((r / 255) * 5);
        const green = Math.round((g / 255) * 5);
        const blue = Math.round((b / 255) * 5);

        const ansiCode = 16 + (red * 36) + (green * 6) + blue;
        ansifiedCode.push(`\x1b[38;5;${ansiCode}m`);
    }

    return ansifiedCode.filter(code => code !== null).join('');
}