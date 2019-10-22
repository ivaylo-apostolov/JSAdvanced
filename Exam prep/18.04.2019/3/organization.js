class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = Number(budget);
        this.employees = [];
        this.marketing = this.budget * 0.4;
        this.finance = this.budget * 0.25;
        this.production = this.budget * 0.35;
    }

    get departmentsBudget() {
        return {
            marketing: this.marketing,
            finance: this.finance,
            production: this.production
        }
    }

    add(employeeName, department, salary) {
        console.log(this.departmentsBudget[department]);
        if (this[department] - salary >= 0) {
            let employee = {
                employeeName: employeeName,
                department: department,
                salary: salary
            }
            this.employees.push(employee);
            this[department] -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this[department]}.`;
    }

    employeeExists(employeeName) {
        let employee = this.employees.find(e => e.employeeName === employeeName);
        if (employee) {
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
    }

    leaveOrganization(employeeName) {
        let employee = this.employees.find(e => e.employeeName === employeeName);
        if (employee) {
            this[employee.department] += employee.salary;
            let index = this.employees.indexOf(employee);
            this.employees.splice(index, 1);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    status() {
        // marketing: this.marketing,
        //     finance: this.finance,
        //     production: this.production
        let marketing = findEmployeesInDepartment('marketing');
        let finance = findEmployeesInDepartment('finance');
        let production = findEmployeesInDepartment('production');

        function findEmployeesInDepartment(nameOfDepartment){
            return this.employees.reduce((acumulator, value) => {
                if (value.department === 'nameOfDepartment') {
                    acumulator.push(value);
                }
                return acumulator;
            }, [])
            .sort((a, b) => b.salary - a.salary)
            .reduce((acumulator, value) =>{
                acumulator.push(value.employeeName);
                return acumulator;
            },[]
            )
        }

        let marketingStatus = `Marketing | Employees: ${marketing.length}: ${marketing.join(", ")} |  Remaining Budget: ${this.marketing}`;
        let financeStatus = `Finance | Employees: ${finance.length}: ${finance.join(", ")} |  Remaining Budget: ${this.finance}`;
        let productionStatus = `Production | Employees: ${production.length}: ${production.join(", ")} |  Remaining Budget: ${this.production}`;

        return `${this.name.toUpperCase()} DEPARTMENTS:\n}`
    }
}

let org = new Organization("SS", 1000);
console.log(org.departmentsBudget);
console.log(org.add("Ivaylo", 'marketing', 100));
console.log(org.employeeExists("Ivaylo"));
console.log(org.status());



