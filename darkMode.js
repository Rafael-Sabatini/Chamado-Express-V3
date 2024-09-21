let darkMode = localStorage.getItem("darkMode");
const darkSwitch = document.getElementById("darkSwitch");

function enableDarkmode() {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");

  darkSwitch.classList.add("pushIn");

  setTimeout( () => {
    darkSwitch.classList.remove("pushIn");
  }, 700);
 
  darkSwitch.style.borderStyle = "inset";
  darkSwitch.style.borderColor = "var(--accent-color)";
  darkSwitch.style.borderWidth = "2px";
}

function disableDarkmode() {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);

  darkSwitch.classList.add("pushOut");

  setTimeout( () => {
    darkSwitch.classList.remove("pushOut");
  }, 700)

  darkSwitch.style.borderStyle = "inset";
  darkSwitch.style.borderColor = "var(--accent-color)";
  darkSwitch.style.borderWidth = "2px";


  darkSwitch.style.borderStyle = "outset";
  darkSwitch.style.borderColor = "var(--accent-color)";
  darkSwitch.style.borderWidth = "2px";  
}

if (darkMode === "active") enableDarkmode();

darkSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});
