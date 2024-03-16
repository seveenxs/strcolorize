"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group extends Map {
    constructor(entries) {
        super(entries);
    }
    /**
     * Returns an array containing the last key and value of the map.
     * If the map is empty, returns undefined.
     * @returns An array containing the last key and value, or undefined if the map is empty.
     * @example
     * const myGroup = new Group<number, string>();
     * myGroup.set(1, 'one');
     * myGroup.set(2, 'two');
     * console.log(myGroup.last()); // Expected output: [2, 'two']
     */
    last() {
        if (this.size === 0)
            return undefined;
        const keys = Array.from(this.keys());
        const lastKey = keys[keys.length - 1];
        const lastValue = this.get(lastKey);
        if (lastValue !== undefined) {
            return [lastKey, lastValue];
        }
        else {
            return undefined;
        }
    }
}
exports.default = Group;
;
