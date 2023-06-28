const convertBtn = document.getElementById("convert-btn")
const container = document.getElementById("bottom-part")
let inputNum = document.getElementById("input-number")

//  creating the HTML elements for displaying the sections for the units
//  all in JS, making use of the units array
//  (with the units array being the "single source of truth", SSOT)
function renderHTML(title, pName) {
    let unitDiv = document.createElement("div")
    unitDiv.classList.add("unit-type")

    let titleEl = document.createElement("p")
    titleEl.innerHTML = title
    titleEl.classList.add("measurements")

    let results = document.createElement("p")
    // Give each freshly created HTML element the correct id,
    // so they can be identified and accessed later on.
    results.setAttribute("id", pName)
    results.classList.add("results")

    container.append(unitDiv)
    unitDiv.append(titleEl)
    unitDiv.append(results)
}

// adding titles, such as "Length (Meter/Feet)", to the units array
// SSOT:
const units = [
    {
        title: "Length (Meter/Feet)",
        metric: "meters",
        imperial: "feet",
        conversionFactor: 3.281,
        resultsHTML: "length-results"
    },
    
    {
        title: "Volume (Liters/Gallons)",
        metric: "liters",
        imperial: "gallons",
        conversionFactor: 0.264,
        resultsHTML: "volume-results"
    },
    
    {
        title: "Mass (Kilograms/Pounds)",
        metric: "kilos",
        imperial: "pounds",
        conversionFactor: 2.204,
        resultsHTML: "mass-results"
    }
]
// rendered html for units and this loop prodcues 3 of them
// or whatever the amount in the array is
for (let i = 0; i < units.length; i++) {
    let pName = units[i].resultsHTML
    let title = units[i].title
    renderHTML(title, pName)
}
   

convertBtn.addEventListener("click", function() {
    
    for (let i = 0; i < units.length; i++) {
        let convertMetric = inputNum.value * units[i].conversionFactor
        let convertImp = inputNum.value / units[i].conversionFactor
        // When the button is clicked, use 'document.getElementById(...)' inside the loop,
        // to access the right elements for each entry and set their correct values
        let paragraphEl = document.getElementById(units[i].resultsHTML)

        paragraphEl.innerHTML = `
                ${inputNum.value} ${units[i].metric} = 
                ${convertMetric.toFixed(3)} ${units[i].imperial} | 
                ${inputNum.value} ${units[i].imperial} = 
                ${convertImp.toFixed(3)} ${units[i].metric} 
        `
    }
})

