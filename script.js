var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function showInput() {
    document.getElementById('displayCode').innerHTML = document.getElementById('inputCode').value
    document.getElementById('displaySize').innerHTML = document.getElementById('inputSize').value
    document.getElementById('displayCost').innerHTML = document.getElementById('inputCost').value
    document.getElementById('displayPrice').innerHTML = document.getElementById('inputPrice').value
    document.getElementById('displayQuantity').innerHTML = document.getElementById('inputQuantity').value
};