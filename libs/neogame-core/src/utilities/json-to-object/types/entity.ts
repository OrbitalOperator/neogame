import { PROPERTY_METADATA_KEY } from '../property-metadata-key';

export class Entity {
    public toJSON(): any {
        const properties = Reflect.getMetadata(PROPERTY_METADATA_KEY, this) || [];
        let result: { [key: string]: any } = {};
        for (const prop of properties) {
            // @ts-ignore
            if (this[prop] !== undefined) {
                // @ts-ignore
                result[prop as string] = this[prop];
            }
        }
        return result;
    }
}
