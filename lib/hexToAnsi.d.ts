/**
 * Converts a hexadecimal color code to ANSI escape sequence for terminal colorization.
 * @param hexcode The hexadecimal color code to convert.
 * @returns The ANSI escape sequence for the specified color, or null if the input is invalid.
 * @example
 * ```typescript
 * console.log(hexToAnsi("#FF0000")); // Output: "\x1b[38;2;255;0;0m"
 * console.log(hexToAnsi("#00FF00")); // Output: "\x1b[38;2;0;255;0m"
 * console.log(hexToAnsi("#abc"));    // Output: "\x1b[38;2;170;187;204m"
 * console.log(hexToAnsi("invalid")); // Output: null
 * ```
 */
export default function hexToAnsi(hexcode: string): null | string;
