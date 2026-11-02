const planets = [
  { name: "Mercury", type: "Terrestrial", description: "The smallest planet and the closest to the Sun, with extreme temperature swings.", gravity: 3.7, mass: 0.000174, period: 88, temp: 440, moons: 0, diameter: 4879, distance: 57.9, massKg: 0.330, image: "images/mercury.jpg" },
  { name: "Venus", type: "Terrestrial", description: "The hottest planet, wrapped in thick clouds that trap heat.", gravity: 8.9, mass: 0.00257, period: 225, temp: 737, moons: 0, diameter: 12104, distance: 108.2, massKg: 4.87, image: "images/venus.jpg" },
  { name: "Earth", type: "Terrestrial", description: "The only known planet to support life, with liquid water on its surface.", gravity: 9.8, mass: 0.00315, period: 365, temp: 288, moons: 1, diameter: 12756, distance: 149.6, massKg: 5.97, image: "images/earth.jpg" },
  { name: "Mars", type: "Terrestrial", description: "A cold desert world with the tallest volcano in the solar system.", gravity: 3.7, mass: 0.000338, period: 687, temp: 208, moons: 2, diameter: 6792, distance: 228.0, massKg: 0.642, image: "images/mars.jpg" },
  { name: "Jupiter", type: "Gas Giant", description: "The largest planet, with a storm bigger than Earth.", gravity: 23.1, mass: 1, period: 4331, temp: 163, moons: 95, diameter: 142984, distance: 778.5, massKg: 1899, image: "images/jupiter.jpg" },
  { name: "Saturn", type: "Gas Giant", description: "Famous for its bright rings made of ice and rock.", gravity: 9.0, mass: 0.299, period: 10747, temp: 133, moons: 274, diameter: 120536, distance: 1432, massKg: 568, image: "images/saturn.jpg" },
  { name: "Uranus", type: "Ice Giant", description: "An ice giant that spins on its side.", gravity: 8.7, mass: 0.0457, period: 30589, temp: 78, moons: 28, diameter: 51118, distance: 2867, massKg: 86.8, image: "images/uranus.jpg" },
  { name: "Neptune", type: "Ice Giant", description: "A dark, windy ice giant, the farthest planet from the Sun.", gravity: 11.0, mass: 0.0537, period: 59800, temp: 73, moons: 16, diameter: 49528, distance: 4515, massKg: 102, image: "images/neptune.jpg" },
  { name: "Pluto", type: "Dwarf Planet", description: "A small, icy dwarf planet in the Kuiper Belt.", gravity: 0.7, mass: 0.00000659, period: 90588, temp: 48, moons: 5, diameter: 2376, distance: 5906.4, massKg: 0.0125, image: "images/pluto.jpg" }
]

const card = {
  name: document.getElementById("planet-name"),
  type: document.getElementById("planet-type"),
  description: document.getElementById("planet-description"),
  gravity: document.getElementById("planet-gravity"),
  mass: document.getElementById("planet-mass"),
  period: document.getElementById("planet-period"),
  temp: document.getElementById("planet-temp"),
  moons: document.getElementById("planet-moons"),
  diameter: document.getElementById("planet-diameter"),
  distance: document.getElementById("planet-distance"),
  image: document.getElementById("planet-image")
};

function showPlanet(planet) {
  card.name.textContent = planet.name;
  card.type.textContent = planet.type;
  card.description.textContent = planet.description;
  card.gravity.textContent = planet.gravity;
  card.mass.textContent = planet.mass;
  card.period.textContent = planet.period;
  card.temp.textContent = planet.temp;
  card.moons.textContent = planet.moons;
  card.diameter.textContent = planet.diameter;
  card.distance.textContent = planet.distance;
  card.image.src = planet.image;
  card.image.alt = planet.name;
}

// When the page opens, show Earth
showPlanet(planets.find((p) => p.name === "Earth"));
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const errorText = document.getElementById("error-text");

function searchPlanet() {
  const query = searchInput.value.trim().toLowerCase();
  const planet = planets.find((p) => p.name.toLowerCase() === query);

  if (planet) {
    errorText.hidden = true;
    showPlanet(planet);
  } else {
    errorText.hidden = false;
  }
}

searchBtn.addEventListener("click", searchPlanet);

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchPlanet();
});

searchInput.addEventListener("input", () => {
  errorText.hidden = true;
});

function fillTable() {
  planets.forEach((planet) => {
    const row = document.querySelector(`tr[data-planet="${planet.name.toLowerCase()}"]`);
    if (!row) return;

    row.querySelector(".t-mass").textContent =
      planet.massKg.toLocaleString("en-US", { maximumFractionDigits: 4 });
    row.querySelector(".t-diameter").textContent =
      planet.diameter.toLocaleString("en-US");
  });
}

fillTable();
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const DARK_ICON = "images/toggle.png";        // shown in light mode: DARK + moon
const LIGHT_ICON = "images/toggle-light.png"; // shown in dark mode: LIGHT + sun

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeIcon.src = isDark ? LIGHT_ICON : DARK_ICON;
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  applyTheme(!document.body.classList.contains("dark"));
});

// When the page opens, use the saved choice
applyTheme(localStorage.getItem("theme") === "dark");