import 'reflect-metadata';

const PROPERTY_METADATA_KEY = Symbol('Data');

export function Property(target: Object, propertyKey: string | symbol) {
    let properties = Reflect.getMetadata(PROPERTY_METADATA_KEY, target) || [];
    properties.push(propertyKey);
    Reflect.defineMetadata(PROPERTY_METADATA_KEY, properties, target);
}

export class Entity {
    static fromJSON<T extends {}>(constructor: { new (...args: any[]): T }, data: any): T {
        return Object.assign(new constructor(), data);
    }

    toJSON(): any {
        const properties = Reflect.getMetadata(PROPERTY_METADATA_KEY, this) || [];
        let result: { [key: string]: any } = {};
        for (const prop of properties) {
            // @ts-ignore
            result[prop as string] = this[prop];
        }
        return result;
    }
}
