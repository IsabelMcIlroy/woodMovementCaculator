// Caculate
const caculateButton = document.getElementById('caculateButton'); 
caculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    showModal();
})

// Modal
const showModal = () => {
    document.getElementById('result').innerText = "Result"
    document.getElementById('woodFact').innerText = "Wood Fact"
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}
