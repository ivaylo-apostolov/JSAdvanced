class Computer {
    constructor(ramMemory, cpuGHz, hddMemory)
    {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace){
        if (this.hddMemory - requiredSpace < 0) {
            throw new Error("There is not enough space on the hard drive");
        }
        this.hddMemory -= requiredSpace;
        let program = {};
        program[name] = requiredSpace
        this.installedPrograms.push(program);

        return program;
    }

    uninstallAProgram(name){
        let programToUninstall = this.installedPrograms.find(x => x.hasOwnProperty(name));
        if (typeof programToUninstall === 'undefined') {
            throw new Error("Control panel is not responding");
        }
        this.hddMemory += programToUninstall[name];
        this.installedPrograms = this.installedPrograms.filter(f => f != programToUninstall);

        return this.installedPrograms;
    }

    openAProgram(name){
        let findAProgram = this.installedPrograms.find(x => x.hasOwnProperty(name));
        if (typeof findAProgram === 'undefined') {
            throw new Error(`The ${name} is not recognized`);
        }

        let isProgramOpened = this.taskManager.find(x => x.hasOwnProperty(name));
        if (typeof isProgramOpened !== 'undefined') {
            throw new Error(`The ${name} is already open"`);
        }

        


    }
}

