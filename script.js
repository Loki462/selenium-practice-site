// Alerts
function triggerAlert() {
  alert("This is a simple alert!");
}
function triggerConfirm() {
  let result = confirm("Do you confirm this?");
  console.log("Confirmation result:", result);
}
function triggerPrompt() {
  let input = prompt("Please enter your name:");
  console.log("Prompt input:", input);
}

// Windows & Tabs
function openNewTab() {
  window.open("https://example.com", "_blank");
}
function openNewWindow() {
  window.open("https://example.com", "_blank", "width=1980,height=1000,left=100,top=100");
}

// Custom Dropdown
function toggleCustomDropdown() {
  document.getElementById("customDropdown").classList.toggle("hidden");
}
function updateTags() {
  let list = document.querySelectorAll("#customDropdown input:checked");
  let names = Array.from(list).map(el => el.value);
  document.getElementById("selectedTags").innerText = names.length ? names.join(", ") : "Select options...";
}

// Hover
document.getElementById("hoverArea").addEventListener("mouseover", e => {
  e.target.innerText = "Hovered!";
  e.target.classList.add("hovered");
});

// Double Click
document.getElementById("dblClickArea").addEventListener("dblclick", e => {
  e.target.innerText = "Double Clicked!";
  e.target.classList.add("dblclicked");
});

// Right Click
document.getElementById("contextMenu").addEventListener("contextmenu", e => {
  e.preventDefault();
  alert("Right Clicked!");
  e.target.classList.add("rightclicked");
  e.target.innerText = "Right Clicked!";
});

// Drag & Drop
function allowDrop(ev) {
  ev.preventDefault();
}
function startDrag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function dropHere(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data);
  ev.target.innerHTML = "Dropped!";
  ev.target.style.backgroundColor = "#c8e6c9";
  dragged.remove();
}
document.getElementById("drag").addEventListener("dragstart", startDrag);
document.getElementById("drop").addEventListener("dragover", allowDrop);
document.getElementById("drop").addEventListener("drop", dropHere);
