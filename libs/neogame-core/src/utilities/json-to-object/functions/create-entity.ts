import { PROPERTY_METADATA_KEY } from '../property-metadata-key';
import { Entity } from '../types/entity';

type PropertyName = string | symbol;
type PrimitiveTypedProperty = string;
type EntityTypedProperty = { propertyKey: PropertyName; type: any };

type EntityProperty = { propertyName: PropertyName; childEntity: Entity };
type DataProperty = { propertyName: PropertyName; primitiveValue: unknown };

type Constructor<T> = { new (...args: any[]): T };
type Constructable<T> = { constructor: Constructor<T> };

export function createEntity<T extends {}>(constructor: Constructor<T>, data: any): T {
    let entity: T = new constructor();

    const fields = getFieldsMetadata(entity);

    for (const field of fields) {
        if (isEntity(field)) {
            const { propertyName, childEntity }: EntityProperty = createChildEntity(field as EntityTypedProperty, data);
            setPropertyWithEntity(entity, propertyName, childEntity);
        } else {
            const { propertyName, primitiveValue }: DataProperty = getPrimitiveValue(
                field as PrimitiveTypedProperty,
                data,
            );
            setPropertyWithPrimitive(entity, propertyName, primitiveValue);
        }
    }

    return Object.freeze(entity);
}

function getFieldsMetadata<T extends {}>(entity: T): Array<PrimitiveTypedProperty | EntityTypedProperty> {
    return Reflect.getMetadata(PROPERTY_METADATA_KEY, entity) || [];
}

function isEntity(prop: any): boolean {
    return prop.hasOwnProperty('type');
}

function createChildEntity(property: EntityTypedProperty, data: any): EntityProperty {
    const entityType = property.type;
    const propertyName = property.propertyKey;
    const childEntity = createEntity(entityType, data[propertyName]) as Entity;
    return { propertyName, childEntity };
}

function getPrimitiveValue(propertyName: PrimitiveTypedProperty, data: any): DataProperty {
    const primitiveValue = data[propertyName];
    return { propertyName, primitiveValue: primitiveValue };
}

function setPropertyWithEntity<T>(entity: T, propertyName: string | symbol, childEntity: Entity): void {
    // @ts-ignore
    entity[propertyName] = childEntity;
}

function setPropertyWithPrimitive<T>(entity: T, propertyName: string | symbol, propertyValue: any): void {
    // @ts-ignore
    entity[propertyName] = propertyValue;
}
