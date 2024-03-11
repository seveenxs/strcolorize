import { colorsCodes } from "./ansiStyles";

export function formatString(content: string, codes: string): string {
    const allCodes = codes.split(' ');
    let applied = "";

    for (const code of allCodes) {
        const styles = colorsCodes[code as keyof typeof colorsCodes];
        const rgbCode = colorsCodes.rgbToAnsi(code);

        if (styles !== undefined) {
            applied += styles.open;
        } else if (rgbCode !== null) {
            applied += rgbCode;
        }
    }

    applied += content;

    for (let i = allCodes.length - 1; i >= 0; i--) {
        const code = allCodes[i];
        const styles = colorsCodes[code as keyof typeof colorsCodes];
        const rgbCode = colorsCodes.rgbToAnsi(code);

        if (styles !== undefined) {
            applied += styles.close;
        } else if (rgbCode !== null) {
            applied += '\x1b[39m';
        }
    }

    return applied;
}