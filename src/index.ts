import { formatString } from "./formatString";

const colorizeRgx = /\[((?:\[[^\[\]]*\]|[^\[\]])*)\]\((.*?)\)/g;

function colorize(text: string, terminal?: false): string;
function colorize(text: string, terminal?: true): void;
function colorize(text: string, terminal: Boolean = false): string | void {
    const colored =
        text.replace(colorizeRgx, (_, content: string, codes: string) => {
            content = content.replace(colorizeRgx, (_, content: string, codes: string) => formatString(content, codes))
            return formatString(content, codes)
        });

    if (terminal)
        console.log(colored);

    return colored
}

export default colorize
module.exports = colorize