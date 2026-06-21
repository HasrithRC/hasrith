const sound = {
  beach: "sounds/beach.mp3",
  city: "sounds/city.mp3",
  forest: "sounds/forest.mp3",
  rain: "sounds/rain.mp3"
};

const audio = new Audio();
let currentType = null;

function toggleSound(type) {
  const btnId = "sound" + type.charAt(0).toUpperCase() + type.slice(1);
  const btn = document.getElementById(btnId);
  if (!btn) return;

  if (currentType === type && !audio.paused) {
    audio.pause();
    btn.classList.remove("active");
    currentType = null;
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  Object.keys(sound).forEach(k => {
    const el = document.getElementById("sound" + k.charAt(0).toUpperCase() + k.slice(1));
    if (el) el.classList.remove("active");
  });

  audio.src = sound[type];
  audio.currentTime = 0;
  audio.play();
  btn.classList.add("active");
  currentType = type;
}

const STORAGE_KEY = "travel_destinations";

function getDestinations() {
  const raw = localStorage.getItem(STORAGE_KEY);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveDestination(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function renderDestinations() {
  const list = getDestinations();
  const ul = document.getElementById("destList");
  if (!ul) return;
  ul.innerHTML = "";

  list.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className = "dest-item" + (item.status === "visited" ? " visited" : "");

    const detail = document.createElement("div");
    detail.className = "dest-detail";

    const nameDiv = document.createElement("div");
    nameDiv.className = "dest-name";
    nameDiv.textContent = item.name;

    const statusDiv = document.createElement("div");
    statusDiv.className = "dest-status";
    statusDiv.textContent = item.status === "planned" ? "Planned" : item.status === "visited" ? "Visited" : "Pending";

    detail.appendChild(nameDiv);
    detail.appendChild(statusDiv);

    const actions = document.createElement("div");
    actions.className = "dest-actions";

    if (item.status !== "visited") {
      const planBtn = document.createElement("button");
      planBtn.className = "button button-outline";
      planBtn.textContent = item.status === "planned" ? "Unplan" : "Plan";
      planBtn.addEventListener("click", () => togglePlanned(idx));
      actions.appendChild(planBtn);
    }

    const visitBtn = document.createElement("button");
    visitBtn.className = "button";
    visitBtn.textContent = item.status === "visited" ? "Unmark" : "Visited";
    visitBtn.addEventListener("click", () => toggleVisited(idx));

    const removeBtn = document.createElement("button");
    removeBtn.className = "button button-outline";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeDestination(idx));

    actions.appendChild(visitBtn);
    actions.appendChild(removeBtn);

    li.appendChild(detail);
    li.appendChild(actions);
    ul.appendChild(li);
  });
}

function addDestination(e) {
  e.preventDefault();
  const input = document.getElementById("destInput");
  const name = input.value.trim();
  if (!name) return;
  const list = getDestinations();
  list.push({ name, status: "pending" });
  saveDestinations(list);
  input.value = "";
  renderDestinations();
}

function togglePlanned(idx) {
  const list = getDestinations();
  if (!list[idx]) return;
  if (list[idx].status === "planned") {
    list[idx].status = "pending";
  } else if (list[idx].status !== "visited") {
    list[idx].status = "planned";
  }
  saveDestinations(list);
  renderDestinations();
}

function toggleVisited(idx) {
  const list = getDestinations();
  if (!list[idx]) return;
  list[idx].status = list[idx].status === "visited" ? "pending" : "visited";
  saveDestinations(list);
  renderDestinations();
}

function removeDestination(idx) {
  const list = getDestinations();
  if (!list[idx]) return;
  list.splice(idx, 1);
  saveDestinations(list);
  renderDestinations();
}

renderDestinations();
