import { PROPERTY_METADATA_KEY } from '../property-metadata-key';

export function Type(type: any) {
    return function (target: Object, propertyKey: string | symbol) {
        // Apply the 'design:type' metadata
        Reflect.metadata('design:type', type)(target, propertyKey);

        // Retrieve existing property metadata or initialize an empty array
        let properties = Reflect.getMetadata(PROPERTY_METADATA_KEY, target) || [];

        // Add the property key to the metadata
        properties.push({ propertyKey, type });

        // Define the updated metadata
        Reflect.defineMetadata(PROPERTY_METADATA_KEY, properties, target);
    };
}
