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
        return maxShrinkage = 8.6
    }
    else if (selectedWoodSpecies == "Birch - Yellow") {
        return maxShrinkage = 9.5
    }
    else if (selectedWoodSpecies == "Ceader - Western Red") {
        return maxShrinkage = 5
    }
    else if (selectedWoodSpecies == "Cherry") {
        return maxShrinkage = 7.1
    }
    else if (selectedWoodSpecies == "Douglas Fir") {
        return maxShrinkage = 7.3
    }
    else if (selectedWoodSpecies == "Elm - American") {
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
    else if (selectedWoodSpecies == "Spruce - Black") {
        return maxShrinkage = 6.8
    }
    else if (selectedWoodSpecies == "Walnut - Black") {
        return maxShrinkage = 7.8
    }
    else if (selectedWoodSpecies == "White Pine") {
        return maxShrinkage = 7.4
    }
    else {
        maxShrinkage = 0
    }
}
function rift() {
    const selectedWoodSpecies =  woodSpecies.options[woodSpecies.selectedIndex].text;
    if (selectedWoodSpecies == "Birch - White") {
        return maxShrinkage = 6.3
    }
    else if (selectedWoodSpecies == "Birch - Yellow") {
        return maxShrinkage = 7.3
    }
    else if (selectedWoodSpecies == "Ceader - Western Red") {
        return maxShrinkage = 2.4
    }
    else if (selectedWoodSpecies == "Cherry") {
        return maxShrinkage = 3.7
    }
    else if (selectedWoodSpecies == "Douglas Fir") {
        return maxShrinkage = 4.5
    }
    else if (selectedWoodSpecies == "Elm - American") {
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
    else if (selectedWoodSpecies == "Spruce - Black") {
        return maxShrinkage = 4.1
    }
    else if (selectedWoodSpecies == "Walnut - Black") {
        return maxShrinkage = 5.5
    }
    else if (selectedWoodSpecies == "White Pine") {
        return maxShrinkage = 4.1
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
    else if (selectedWoodSpecies == "Ceader - Western Red") {
        return aFact = 'Ceader wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Cherry") {
        return aFact = 'Cherry wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Douglas Fir") {
        return aFact = 'Douglas Fir is a strong wood which is relatively easy to work. It is used commonly in the construction trades for things such as studs, beams, posts, flooring and siding in houses. Douglas Fir is also fairly decay resistant.'  
    }
    else if (selectedWoodSpecies == "Elm - American") {
        return aFact = 'American Elm wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
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
        return aFact = 'Poplar has a very pale almost white sapwood white its heartwood is a bit dark and the grain is fairly straight. It is used in items such as boxes, venner, plywood and pallets. Poplar is unfoutantly not a decay resistant wood.'  
    }
    else if (selectedWoodSpecies == "Spruce - Black") {
        return aFact = 'Spruce wood comes from a tree. wood comes from a tree. wood comes from a tree.'  
    }
    else if (selectedWoodSpecies == "Walnut - Black") {
        return aFact = 'Walnut is very decay resistant wood and was used for railway ties for a period of time. It is a very easy wood to work with and produces lovely cabinets and veneer.'  
    }
    else if (selectedWoodSpecies == "White Pine") {
        return aFact = 'White Pine, when quater sawn is the most well behaved of native Canadian woods. The ease of sanding, chiseling and plaing of pine makes it an ideal secondary or even primary wood for many projects. As an added bonus it produces and lovely clean woody odor.'  
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
