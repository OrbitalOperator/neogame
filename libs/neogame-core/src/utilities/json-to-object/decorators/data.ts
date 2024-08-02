import { PROPERTY_METADATA_KEY } from '../property-metadata-key';

export function Data(target: Object, propertyKey: string | symbol) {
    let properties = Reflect.getMetadata(PROPERTY_METADATA_KEY, target) || [];
    properties.push(propertyKey);
    Reflect.defineMetadata(PROPERTY_METADATA_KEY, properties, target);
}
