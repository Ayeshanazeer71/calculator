
const btn = document.getElementById("colorBtn");

const colors = [
    "LightBlue", "LightGreen", "LightCoral", "Salmon",
    "SlateBlue", "Teal", "Tomato", "SteelBlue",
    "Thistle", "Tan", "Turquoise", "Violet",
    "PeachPuff", "Plum", "Orchid", "Khaki",
    "MediumPurple", "MintCream", "SkyBlue", "DarkSalmon"
];

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function setButtonTextContrast(colorName) {
    const temp = document.createElement("div");
    temp.style.color = colorName;
    document.body.appendChild(temp);
    const computedColor = window.getComputedStyle(temp).color;
    document.body.removeChild(temp);

    const [r, g, b] = computedColor.match(/\d+/g).map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 128 ? "white" : "black";
}

btn.addEventListener("click", () => {
    const chosenColor = getRandomColor();
    document.body.style.backgroundColor = chosenColor;

    btn.textContent = `Color: ${chosenColor}`;
    btn.style.color = setButtonTextContrast(chosenColor);

    btn.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
});
