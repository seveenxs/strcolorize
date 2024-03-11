## 🧶 strcolorize
**strcolorize** is a simple library for coloring text using codes (ANSI and hexadecimal), perfect for styling your terminal strings. **strcolorize** uses inline formatting (applies text formatting styles directly within the text line) to colorize your texts.

---

<p align="center">
  <img src="https://img.shields.io/npm/v/strcolorize?style=flat&logoColor=%23604970&label=version&color=%23595990" alt="NPM Version">
  <img src="https://img.shields.io/npm/dm/strcolorize?style=flat&color=%23595990" alt="NPM Downloads">
  <img src="https://img.shields.io/npm/l/strcolorize?style=flat&color=%23595990" alt="NPM License">
  <br><img src="https://cdn.imgchest.com/files/pyq9cmxw8g4.png" alt="Styles">
</p>

---

## 📦 Install
```sh
npm install strcolorize@beta
```
```sh
npm install strcolorize@beta
```

## 🍿 Highlights
- No dependencies
- Ability to nest styles
- Doesn't extend `String.prototype`
- Clean and focused
- Support for `Hexadecimal` codes (text colors)

## 🎈 How To Usage?
`colorize(input: string, terminal: boolean [Opcional]):`
- `input:` The text to be styled.
- `terminal:` Print directly to the terminal [default is false].

```typescript
const colorize = require('strcolorize'); // module commonjs
import colorize from 'strcolorize'; // module esm

// Coloring with ANSI codes.
colorize('This word is [red](red)', true)

// Coloring with hexadecimal codes.
colorize('This especif word is [blue](#0000FF)', true)

// Nesting colorizations.
colorize('[Welcome to [strcolorize](magenta) library](bold)', true)
```

**Terminal output:**<br>
<br><img src="https://cdn.imgchest.com/files/myd5cpn8op4.png" alt="Styles">

## 🎨 Colors and Styles

### Text styles:
- `reset:` Reset the current style.
- `bold:` Make the text bold.
- `italic:` Make the text italic.
- `inverse:` Invert background and foreground colors.
- `underline:` Put a horizontal line below the text.
- `hidden:` Print the text but make it invisible.
- `strikethrough:` Puts a horizontal line through the center of the text.

### Text colors:
- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`

### Text backgrounds:
- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgCyan`
- `bgWhite`

## 💖 Contribuition
Your contributions are highly valued! Feel free to enhance this project by opening an [issue](https://github.com/seveenxs/strcolorize/issues) to report any problems or submitting a [pull request](https://github.com/seveenxs/strcolorize/pulls) with your proposed changes.