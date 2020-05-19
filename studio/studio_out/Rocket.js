"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
class Rocket {
    constructor(name, totalCapacitKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacitKg;
    }
    sumMass(items) {
        let totalWeight = 0;
        for (let item of items) {
            totalWeight += item.massKg;
        }
        return totalWeight;
    }
    currentMassKg() {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    canAdd(item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
        }
        return this.canAdd(cargo);
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
        }
        return this.canAdd(astronaut);
    }
}
exports.Rocket = Rocket;
//# sourceMappingURL=Rocket.js.map