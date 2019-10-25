class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory),
            this.cpuGHz = Number(cpuGHz),
            this.hddMemory = Number(hddMemory),
            this.taskManager = [],
            this.installedPrograms = []
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory - requiredSpace < 0) {
            throw new Error("There is not enough space on the hard drive");
        }

        this.hddMemory -= requiredSpace;
        let obj = {
            name: name,
            requiredSpace: requiredSpace
        }

        this.installedPrograms.push(obj);
        return obj;
    }

    uninstallAProgram(name) {
        let program = this.installedPrograms.find(p => p.name === name);
        if (!program) {
            throw new Error("Control panel is not responding");
        }

        this.hddMemory += program.requiredSpace;
        let index = this.installedPrograms.indexOf(program);
        this.installedPrograms.splice(index, 1);
        return this.installedPrograms;
    }

    openAProgram(name) {
        let program = this.installedPrograms.find(p => p.name === name);
        if (!program) {
            throw new Error(`The ${name} is not recognized`);
        }

        let programOpened = this.taskManager.find(p => p.name === name);
        if (programOpened) {
            throw new Error(`The ${name} is already open`);
        }

        let ram = ((program.requiredSpace / this.ramMemory)* 100)  / 1.5;
        let cpu = (((program.requiredSpace / this.cpuGHz)*100) / 500) * 1.5;

        console.log(ram);
        console.log(cpu);

    }
}

let comp = new Computer(1000, 4000, 10000);
console.log(comp.installAProgram("autocad", 1000));
console.log(comp.installAProgram("sap2000", 1000));
console.log(comp.uninstallAProgram('autocad'));
comp.openAProgram('sap2000')

// constructor(ramMemory, cpuGHz, hddMemory)
// {
//     this.ramMemory = Number(ramMemory);
//     this.cpuGHz = Number(cpuGHz);
//     this.hddMemory = Number(hddMemory);
//     this.taskManager = [];
//     this.installedPrograms = [];
// }

// installAProgram(name, requiredSpace){
//     if (this.hddMemory - requiredSpace < 0) {
//         throw new Error("There is not enough space on the hard drive");
//     }
//     this.hddMemory -= requiredSpace;
//     let program = {};
//     program[name] = requiredSpace
//     this.installedPrograms.push(program);

//     return program;
// }

// uninstallAProgram(name){
//     let programToUninstall = this.installedPrograms.find(x => x.hasOwnProperty(name));
//     if (typeof programToUninstall === 'undefined') {
//         throw new Error("Control panel is not responding");
//     }
//     this.hddMemory += programToUninstall[name];
//     this.installedPrograms = this.installedPrograms.filter(f => f != programToUninstall);

//     return this.installedPrograms;
// }

// openAProgram(name){
//     let findAProgram = this.installedPrograms.find(x => x.hasOwnProperty(name));
//     if (typeof findAProgram === 'undefined') {
//         throw new Error(`The ${name} is not recognized`);
//     }

//     let isProgramOpened = this.taskManager.find(x => x.hasOwnProperty(name));
//     if (typeof isProgramOpened !== 'undefined') {
//         throw new Error(`The ${name} is already open"`);
//     }
// }

