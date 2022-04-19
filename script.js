// Caculate button
const caculateButton = document.getElementById('caculateButton'); 
caculateButton.addEventListener('click', (e) => {
    e.preventDefault();
        showModal();
        getWidth(); 
        getGrainOrientation(); 
        getHumdityRange();
        caculation();
})

// Get numbers for caculation -> width, max shricakge possible and humidity range
// width -> get entered width
function getWidth() {
    width = document.getElementById("width").value;
}
// Max Shrinkage possible - number dependent on type of wood and grain orientation
function getGrainOrientation() {
    const selectGrainOrientation = grainOrientation.options[grainOrientation.selectedIndex].text;
    const selectedWoodSpecies =  woodSpecies.options[woodSpecies.selectedIndex].text;
    if (selectGrainOrientation == "Flat Sawn") {
        flat();
    }
    else if (selectGrainOrientation == "Rift Sawn") {
        rift();
    }
    else {
        return maxShrinkage = 0
    }
    
}
function flat() {
    const selectedWoodSpecies =  woodSpecies.options[woodSpecies.selectedIndex].text;
    if (selectedWoodSpecies == "Birch - White") {
        return maxShrinkage = 7.7
    }
    else if (selectedWoodSpecies == "Birch - Yellow") {
        return maxShrinkage = 9.5
    }
    else if (selectedWoodSpecies == "Ceader") {
        return maxShrinkage = 5
    }
    else if (selectedWoodSpecies == "Cherry") {
        return maxShrinkage = 7.1
    }
    else if (selectedWoodSpecies == "Douglas Fir") {
        return maxShrinkage = 7.3
    }
    else if (selectedWoodSpecies == "Elm") {
        return maxShrinkage = 9.5
    }
    else if (selectedWoodSpecies == "Hickory") {
        return maxShrinkage = 10.5
    }
    else if (selectedWoodSpecies == "Maple - Hard") {
        return maxShrinkage = 9.9
    }
    else if (selectedWoodSpecies == "Maple - Soft") {
        return maxShrinkage = 7.1
    }
    else if (selectedWoodSpecies == "Oak - Red") {
        return maxShrinkage = 8.6
    }
    else if (selectedWoodSpecies == "Oak - White") {
        return maxShrinkage = 10.5
    }
    else if (selectedWoodSpecies == "Poplar") {
        return maxShrinkage = 8.2
    }
    else if (selectedWoodSpecies == "Spruce") {
        return maxShrinkage = 7.5
    }
    else if (selectedWoodSpecies == "Walnut") {
        return maxShrinkage = 6.4
    }
    else if (selectedWoodSpecies == "White Pine") {
        return maxShrinkage = 6.9
    }
    else {
        maxShrinkage = 0
    }
}
function rift() {
    const selectedWoodSpecies =  woodSpecies.options[woodSpecies.selectedIndex].text;
    if (selectedWoodSpecies == "Birch - White") {
        return maxShrinkage = 5.1
    }
    else if (selectedWoodSpecies == "Birch - Yellow") {
        return maxShrinkage = 7.3
    }
    else if (selectedWoodSpecies == "Ceader") {
        return maxShrinkage = 2.4
    }
    else if (selectedWoodSpecies == "Cherry") {
        return maxShrinkage = 3.7
    }
    else if (selectedWoodSpecies == "Douglas Fir") {
        return maxShrinkage = 4.5
    }
    else if (selectedWoodSpecies == "Elm") {
        return maxShrinkage = 4.2
    }
    else if (selectedWoodSpecies == "Hickory") {
        return maxShrinkage = 7
    }
    else if (selectedWoodSpecies == "Maple - Hard") {
        return maxShrinkage = 4.8
    }
    else if (selectedWoodSpecies == "Maple - Soft") {
        return maxShrinkage = 3.7
    }
    else if (selectedWoodSpecies == "Oak - Red") {
        return maxShrinkage = 4
    }
    else if (selectedWoodSpecies == "Oak - White") {
        return maxShrinkage = 5.6
    }
    else if (selectedWoodSpecies == "Poplar") {
        return maxShrinkage = 4.6
    }
    else if (selectedWoodSpecies == "Spruce") {
        return maxShrinkage = 4.3
    }
    else if (selectedWoodSpecies == "Walnut") {
        return maxShrinkage = 4.3
    }
    else if (selectedWoodSpecies == "White Pine") {
        return maxShrinkage = 4.5
    }
    else {
        maxShrinkage = 0
    }
}
// Humdity range -> heightest wood mc - lowest wood mc
function getHumdityRange() {
    heighMC = document.getElementById("heighMC").value;
    lowMC = document.getElementById("lowMC").value;
    humRange = (heighMC - lowMC) / 100
}
// Caculation (width * max shrinkage possible) * (heighest wood mc - lowest wood mc) / .30
function caculation() {
    const caculationResult = Math.round(((width * (maxShrinkage / 100)) * (humRange) / .30) * 100)/100
    document.getElementById('theResult').innerHTML =
                                      "The wood will move "+caculationResult+" inches";
}

// Wood Fact
function chooseWoodFact() {
    const selectedWoodSpecies =  woodSpecies.options[woodSpecies.selectedIndex].text;
    if (selectedWoodSpecies == "Birch - White") {
        return aFact = 'White Birch wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Birch - Yellow") {
        return aFact = 'Yellow Birch wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Ceader") {
        return aFact = 'Ceader wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Cherry") {
        return aFact = 'Cherry wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Douglas Fir") {
        return aFact = 'Douglas Fir wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Elm") {
        return aFact = 'Elm wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Hickory") {
        return aFact = 'Hickory wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Maple - Hard") {
        return aFact = 'Hard Maple wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Maple - Soft") {
        return aFact = 'Soft Maple wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Oak - Red") {
        return aFact = 'Red Oakwood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Oak - White") {
        return aFact = 'White Oak wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Poplar") {
        return aFact = 'Poplar wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Spruce") {
        return aFact = 'Spruce wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Walnut") {
        return aFact = 'Walnut wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "White Pine") {
        return aFact = 'White Pine wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else {
        return aFact = 'a tree is wood.'
    }
}

// Open-close results modal
const showModal = () => {
    chooseWoodFact();
    document.getElementById('result').innerText = "Result"
    document.getElementById('woodFact').innerText = "Wood Fact"
    document.getElementById('fact').innerText = `${aFact}`;
    document.getElementById('modal').classList.remove("hide");
}
const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}
