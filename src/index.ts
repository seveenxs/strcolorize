import { formatString } from "./formatString";

const InternalColr = /\[([^\[\]]*?)\]\((.*?)\)/g;
const ExternalColr = /\[(.*?)\]\((.*?)\)/g;

function colorize(text: string, terminal?: false): string;
function colorize(text: string, terminal?: true): void;
function colorize(text: string, terminal: Boolean = false): string | void {
    if (InternalColr.test(text))
        text = text.replace(InternalColr, (_, content: string, codes: string) => formatString(content, codes));

    const colored =
        text.replace(ExternalColr, (_, content: string, codes: string) => formatString(content, codes));

    if (terminal)
        console.log(colored);

    return colored
}

export default colorize
module.exports = colorize