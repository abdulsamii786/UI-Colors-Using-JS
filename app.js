let getMain = document.getElementById("main");
let getModal = document.getElementById("modal");

let colorsCode = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];
let colorsName = [
  "TURQUOISE",
  "EMERALD",
  "PETER RIVER",
  "AMETHYST",
  "WET ASPHALT",
  "GREEN SEA",
  "NEPHRITIS",
  "BELIZE HOLE",
  "WISTERIA",
  "MIDNIGHT BLUE",
  "SUN FLOWER",
  "CARROT",
  "ALIZARIN",
  "CLOUDS",
  "CONCRETE",
  "ORANGE",
  "PUMPKIN",
  "POMEGRANATE",
  "SILVER",
  "ASBESTOS",
];

for (let i = 0; i < colorsCode.length; i++) {
  getMain.innerHTML += `<div onclick="copyColor('${colorsCode[i]}')" class="box" style="background-color:${colorsCode[i]};"><div class="copy"><h3>COPY</h3></div><h4 style="color:#fff">${colorsName[i]}<h4/></div>`;
}

function copyColor(a) {
  navigator.clipboard.writeText(a);
  getModal.classList.add("show");
  getModal.innerHTML = `<h1>COPIED</h1><h2>${a}</h2>`;
  getModal.style.backgroundColor = a;

  setTimeout(function () {
    getModal.classList.remove("show");
    document.body.style.overflow = "hidden";
  }, 1000);
}
