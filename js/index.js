const colorInput = document.getElementById('color');
const colorCodeDisplay = document.getElementById('color-code');
const copyButton = document.getElementById('copy-btn');

// Display selected color code
colorInput.addEventListener('input', function() {
  const selectedColor = colorInput.value;
  colorCodeDisplay.textContent = selectedColor;  // Hex code of selected color
  document.body.style.backgroundColor = selectedColor;  // Change background to selected color
});

// Copy color code to clipboard
copyButton.addEventListener('click', function() {
  const colorCode = colorCodeDisplay.textContent;
  navigator.clipboard.writeText(colorCode).then(() => {
    alert('Color code copied: ' + colorCode);
  });
});
