import { Crystal } from './crystal/crystal';
import { Deuterium } from './deuterium/deuterium';
import { Metal } from './metal/metal';
import { NuclearPower } from './power/nuclear-power';
import { SolarPower } from './power/solar-power';
import { Resource, ResourceProperties } from './resource';
import { ResourceTypeEnum } from './resource-type.enum';

export class ResourceFactory {
    private static resourceCreators = {
        [ResourceTypeEnum.METAL]: Metal.fromProperties,
        [ResourceTypeEnum.CRYSTAL]: Crystal.fromProperties,
        [ResourceTypeEnum.DEUTERIUM]: Deuterium.fromProperties,
        [ResourceTypeEnum.NUCLEAR_POWER]: NuclearPower.fromProperties,
        [ResourceTypeEnum.SOLAR_POWER]: SolarPower.fromProperties,
    };

    static createResource(props: ResourceProperties): Resource {
        const resourceCreator = ResourceFactory.resourceCreators[props.type];
        if (!resourceCreator) {
            throw new UnsupportedResourceType(props.type);
        }
        return resourceCreator(props);
    }
}

export class UnsupportedResourceType extends Error {
    constructor(resourceType: ResourceTypeEnum) {
        super(`Unsupported resource type: ${resourceType}`);
    }
}
