export interface Pair {
    open: string;
    close: string;
};

export interface AnsiPairs {
    // ---> Modifiers
    reset: Pair;
    bold: Pair;
    dim: Pair;
    italic: Pair;
    underline: Pair;
    overline: Pair;
    inverse: Pair;
    hidden: Pair;
    strikethrough: Pair;

    // ---> Text colors
    black: Pair;
    red: Pair;
    green: Pair;
    yellow: Pair;
    blue: Pair;
    magenta: Pair;
    cyan: Pair;
    white: Pair;

    // ---> Text colors (Bright)
    blackBright: Pair;
    redBright: Pair;
    greenBright: Pair;
    yellowBright: Pair;
    blueBright: Pair;
    magentaBright: Pair;
    cyanBright: Pair;
    whiteBright: Pair;

    // ---> Background
    bgBlack: Pair;
    bgRed: Pair;
    bgGreen: Pair;
    bgYellow: Pair;
    bgBlue: Pair;
    bgMagenta: Pair;
    bgCyan: Pair;
    bgWhite: Pair;

    // ---> Background (Bright)
    bgBlackBright: Pair;
    bgRedBright: Pair;
    bgGreenBright: Pair;
    bgYellowBright: Pair;
    bgBlueBright: Pair;
    bgMagentaBright: Pair;
    bgCyanBright: Pair;
    bgWhiteBright: Pair;
}

export const ansi = {
    // ---> Modifiers
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],

    // ---> Text colors
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],

    // ---> Text colors (Bright)
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],

    // ---> Background
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],

    // ---> Background (Bright)
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
};