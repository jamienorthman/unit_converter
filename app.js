const units = [
    {
        metric: "meters",
        imperial: "feet",
        conversionFactor: 3.281,
        resultsHTML: "length-results"
    },
    
    {
        metric: "liters",
        imperial: "gallons",
        conversionFactor: 0.264,
        resultsHTML: "volume-results"
    },
    
    {
        metric: "kilos",
        imperial: "pounds",
        conversionFactor: 2.204,
        resultsHTML: "mass-results"
    }
]

const convertBtn = document.getElementById("convert-btn")
const inputField = document.getElementById("input-div")

let inputNum = document.getElementById("input-number")

convertBtn.addEventListener("click", function() {
    for (let i = 0; i < units.length; i++) {
        let convertMetric = inputNum.value * units[i].conversionFactor
        let convertImp = inputNum.value / units[i].conversionFactor

        let paragraphElement = document.getElementById(units[i].resultsHTML)

        paragraphElement.innerHTML = `
                ${inputNum.value} ${units[i].metric} = ${convertMetric.toFixed(3)} ${units[i].imperial} | 
                ${inputNum.value} ${units[i].imperial} = ${convertImp.toFixed(3)} ${units[i].metric} 
        `
    }
})

