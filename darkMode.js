let darkMode = localStorage.getItem("darkMode");
const darkSwitch = document.getElementById("darkSwitch");

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
  darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});
