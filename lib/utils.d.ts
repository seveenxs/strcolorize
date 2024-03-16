export default class Group<K, V> extends Map<K, V> {
    constructor(entries?: readonly (readonly [K, V])[] | null);
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
    last(): [K, V] | undefined;
}
