// Caculate button
const caculateButton = document.getElementById('caculateButton'); 
caculateButton.addEventListener('click', (e) => {
    e.preventDefault();
        showModal();
        getWidth(); 
        getGrainOrientation(); 
        getHumdityRange();
})

// Caculation (width * max shrinkage possible) * (heighest wood mc - lowest wood mc) / .30
// width -> get entered width
function getWidth() {
    width = document.getElementById("width").value;
    console.log(width);
}
// Max Shrinkage possible - number dependent on type of wood and grain orientation
function getGrainOrientation() {
    grainOrientation = grainOrientation.options[grainOrientation.selectedIndex].text;
    selectedWoodSpecies =  woodSpecies.options[woodSpecies.selectedIndex].text;
    console.log(grainOrientation);
    console.log(selectedWoodSpecies);
    if (grainOrientation == "Flat Sawn") {
        return maxShrinkage = 20
    }
    else if (grainOrientation == "Rift Sawn") {
        return maxShrinkage = 10
    }
    else {
        return maxShrinkage = 100
    }
}

// Humdity range -> heightest wood mc - lowest wood mc
function getHumdityRange() {
    heighMC = document.getElementById("heighMC").value;
    lowMC = document.getElementById("lowMC").value;
    humRange = heighMC - lowMC
    console.log(humRange);
}
function getHeigh() {
    
    console.log(heighMC);
}

// Wood Fact
function chooseWoodFact() {
    const selectedWoodSpecies =  woodSpecies.options[woodSpecies.selectedIndex].text;
    console.log(selectedWoodSpecies.toString())
    if (selectedWoodSpecies == "Birch - White") {
        return aFact = 'White Birch wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Birch - Yellow") {
        return aFact = 'Yell Birch wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
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
    document.getElementById('theResult').innerText = "7";
    document.getElementById('woodFact').innerText = "Wood Fact"
    document.getElementById('fact').innerText = `${aFact}`;
    document.getElementById('modal').classList.remove("hide");
}
const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}
