export class NotEnoughResourceForUpgrade extends Error {
    constructor() {
        super('Not enough resource for upgrade');
    }
}
