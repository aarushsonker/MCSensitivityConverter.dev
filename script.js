function changeConversionType() {
    var conversionType = document.getElementById("conversionType").value;
    var label = document.querySelector('label[for="inputNumber"]');
    var unit;

    switch(conversionType) {
        case "javaToBedrock1.8.9":
            unit = "Java 1.8.9 Sensitivity";
            break;
        case "bedrockToJava1.8.9":
            unit = "Bedrock Sensitivity";
            break;
        case "javaToBedrock1.13+":
            unit = "Java 1.13+ Sensitivity";
            break;
        case "bedrockToJava1.13+":
            unit = "Bedrock Sensitivity";
            break;
    }

    label.innerHTML = `Enter ${unit} Value:`;
}

function convert() {
    var conversionType = document.getElementById("conversionType").value;
    var inputNumber = parseFloat(document.getElementById("inputNumber").value);
    var resultElement = document.getElementById("result");

    if (isNaN(inputNumber)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    var result;

    switch(conversionType) {
        case "javaToBedrock1.8.9":
            result = inputNumber - 33;
            break;
        case "bedrockToJava1.8.9":
            result = inputNumber + 33;
            break;
        case "javaToBedrock1.13+":
            result = inputNumber - 46;
            break;
        case "bedrockToJava1.13+":
            result = inputNumber + 46;
            break;
    }

    resultElement.innerText = `Result: ${result}`;
}

document.addEventListener('mousemove', function(e) {
    const colorEffect = document.querySelector('.color-effect');
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    
    colorEffect.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff7675, #74b9ff, #55efc4, #fd79a8)`;
});
