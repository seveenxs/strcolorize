# 🖍️ strcolorize
**`strcolorize`** is a simple and practical library for terminal output colorization that utilizes **ANSI** and **hexadecimal** codes for its operation. The way **`strcolorize`** operates is different, using **inline formatting** for its functionality.

> ### Inline Formatting
> Allows adding colors directly to text using codes (**Hexadecimal** and [**ANSI**](#ansi-styles)) around desired portions. This provides a simple way to highlight important information without compromising the text's structure. With **`strcolorize`**, this approach enables precise customization of text colors and styles.

## 📦 Installation
You can install this library using [**npm**](https://npmjs.com/) or [**yarn**](https://yarnpkg.com/)
```bash
npm install strcolorize@latest
```
```bash
yarn install strcolorize@latest
```

## 📌 How to usage
To utilize this library, first [install it](#-installation) in your project and then import it into your file like this:
```js
// Importing using es6
import colorize from 'strcolorize';

// Importing using commonjs
const colorize = require('strcolorize');

// Note: in place of 'colorize' you can set any name you want
```
After that, you can use it to colorize your strings like this:
```js
// putting a text in bold and yellow
colorize('#bold yellow[The sun sets. Stars twinkle. Dreams awaken.
]');

// you can print to the console using the function itself
colorize('#bold yellow[The sun sets. Stars twinkle. Dreams awaken.
]', true);

// There's the possibility of nesting styles
colorize('#bold[The sun sets. #yellow[Stars twinkle]. Dreams awaken.
]');

// How to use hexadecimal codes to colorize your strings
colorize('#bold[The sun sets. #ff0[Stars twinkle]. Dreams awaken.
]');
```

## 📝 Method
### `colorize(text: string, terminal: boolean = false): string | void`
- `text:` The text to be colorized.
- `terminal:` A boolean flag indicating whether to print the colorized text directly to the terminal.
- `return`: is true, prints the colorized text to the terminal and returns void. Otherwise, returns the colorized text as a string.

## 💖 Contribuition
Your contributions are highly valued! Feel free to enhance this project by opening an [issue](https://github.com/seveenxs/strcolorize/issues) to report any problems or submitting a [pull request](https://github.com/seveenxs/strcolorize/pulls) with your proposed changes.

## Ansi Styles
| Names             | Types       | Description |
|-------------------|-------------|-------------|
| reset             | modifier    | Reset the current style |
| bold              | modifier    | Make the text bold |
| italic            | modifier    | Make the text italic |
| dim               | modifier    | Make the text have lower opacity |
| inverse           | modifier    | Invert background and foreground colors |
| underline         | modifier    | Put a horizontal line below the text |
| hidden            | modifier    | Print the text but make it invisible |
| strikethrough     | modifier    | Puts a horizontal line through the center of the text |
| overline          | modifier    | Put a horizontal line above the text |
| black             | color       | Make the text turn black |
| red               | color       | Make the text turn red |
| green             | color       | Make the text turn green |
| yellow            | color       | Make the text turn yellow |
| blue              | color       | Make the text turn blue |
| magenta           | color       | Make the text turn magenta |
| cyan              | color       | Make the text turn cyan |
| white             | color       | Make the text turn white |
| blackBright       | color       | Make the text turn black bright |
| redBright         | color       | Make the text turn red bright |
| greenBright       | color       | Make the text turn green bright |
| yellowBright      | color       | Make the text turn yellow bright |
| blueBright        | color       | Make the text turn blue bright |
| magentaBright     | color       | Make the text turn magenta bright |
| cyanBright        | color       | Make the text turn cyan bright |
| whiteBright       | color       | Make the text turn white bright |
| bgBlack           | background  | Make the background of the text black |
| bgRed             | background  | Make the background of the text red |
| bgGreen           | background  | Make the background of the text green |
| bgYellow          | background  | Make the background of the text yellow |
| bgBlue            | background  | Make the background of the text blue |
| bgMagenta         | background  | Make the background of the text magenta |
| bgCyan            | background  | Make the background of the text cyan |
| bgWhite           | background  | Make the background of the text white |
| bgBlackBright     | background  | Make the background of the text black bright |
| bgRedBright       | background  | Make the background of the text red bright |
| bgGreenBright     | background  | Make the background of the text green bright |
| bgYellowBright    | background  | Make the background of the text yellow bright |
| bgBlueBright      | background  | Make the background of the text blue bright |
| bgMagentaBright   | background  | Make the background of the text magenta bright |
| bgCyanBright      | background  | Make the background of the text cyan bright |
| bgWhiteBright     | background  | Make the background of the text white bright |