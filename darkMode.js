let darkMode = localStorage.getItem("darkMode");
const darkSwitch = document.getElementById("darkSwitch");
var dark = document.getElementById("dark");
var light = document.getElementById("light");

if(!light){
  light.style.display = 'inline-block'
}

function enableDarkmode() {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");
}

function disableDarkmode() {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "active") enableDarkmode();

darkSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});
