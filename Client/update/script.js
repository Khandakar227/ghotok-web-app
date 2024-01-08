function updateColorSample() {
    const complexion = document.getElementById('complexion');
    const colorSample = document.getElementById('colorSample');
    colorSample.style.backgroundColor = complexion.value;
}
// Initialize color sample
updateColorSample();