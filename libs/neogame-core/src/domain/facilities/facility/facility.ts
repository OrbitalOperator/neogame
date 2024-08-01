import { Serializable } from '../../../utilities/serializable';
import { FacilityTypeEnum } from './facility-type.enum';

export type FacilityLevel = number;

export interface FacilityProperties {
    facilityType: FacilityTypeEnum;
    level: FacilityLevel;
}

export abstract class Facility implements Serializable<FacilityProperties> {
    public level: FacilityLevel;

    public abstract getFacilityType(): FacilityTypeEnum;

    public upgrade(): void {
        this.level += 1;
    }

    protected constructor({ level }: FacilityProperties) {
        this.level = level;
    }

    toProperties(): FacilityProperties {
        return {
            facilityType: this.getFacilityType(),
            level: this.level,
        };
    }
}
