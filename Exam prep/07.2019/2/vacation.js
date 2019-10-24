class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer,
            this.destination = destination,
            this.budget = Number(budget),
            this.kids = {}
    }

    registerChild(name, grade, budget) {
        if (this.budget - budget > 0) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        let kidName = this.kids[grade].find(k => { k.split('-')[0] === name });
        if (kidName) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budget}`)

        return this.kids[grade];
    }

    removeChild(name, grade) {
        let kidToFind;
        if (this.kids.hasOwnProperty(grade)) {
            kidToFind = this.kids[grade].find(k => k.split("-")[0] === name);
        }
        if (kidToFind) {
            let indexOfKidToRemove = this.kids[grade].indexOf(kidToFind);
            this.kids[grade].splice(indexOfKidToRemove, 1);
            return this.kids[grade];
        }
        return `We couldn't find ${name} in ${grade} grade.`
    }

    toString() {

    }

    // get numberOfChildren() {
    //     let count = 0;
    //     for (const key in this.kids) {
    //         count += this.kids[key].length;
    //     }

    //     return count;
    // }
}

let vac = new Vacation("NUUk", "Plovdiv", 1000);
console.log(vac.registerChild("Kristiana", 1, 1000));
//console.log(vac.removeChild("Kristiana", 1));
//console.log(vac.numberOfChildren);