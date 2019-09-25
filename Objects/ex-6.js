function solve(input){
    let components = {};

    for (const row of input) {
        let [systemName, componentName, subcomponentName] = row.split(" | ");

        if (!components.hasOwnProperty(systemName)) {
            components[systemName] = {};
        }

        if (!components[systemName].hasOwnProperty(componentName)) {
            components[systemName][componentName] = [];
        }

        components[systemName][componentName].push(subcomponentName);
    }

    let sysArr = Object.keys(components).sort((a, b) => Object.keys(components[b]).length - Object.keys(components[a]).length || a.localeCompare(b));

    
    for (const syst of sysArr) {
        console.log(syst);

        let compArr = Object.keys(components[syst]).sort((a, b) => Object.keys(components[syst][b].length - Object.keys(components[syst][a].length)))

        for (const compo of compArr) {
            console.log(`|||${compo}`);

            components[syst][compo].forEach(element => {
                console.log(`||||||${element}`);
            });
        }
    }
}

solve(
    ['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)