export interface Serializable<P> {
    toProperties(): P;
}

export function serializeMap<P, T extends Serializable<P>>(map: Map<any, T>): Array<P> {
    return Array.from(map.values()).map((value) => value.toProperties());
}

export function deserializeMap<P, T extends Serializable<P>, K = keyof P>(
    elements: Array<P>,
    fromPropertiesFn: (props: P) => T,
    mapKeyForElementFn: (item: P) => K,
): Map<K, T> {
    return new Map(elements.map((e) => [mapKeyForElementFn(e), fromPropertiesFn(e)]));
}
