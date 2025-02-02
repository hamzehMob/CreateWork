import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://link-login-8e090-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const users = ref(database, "Users");

const inputfieldUsername = document.getElementById("signup-username");
const inputfieldDate = document.getElementById("signup-date");
const inputfieldLocation = document.getElementById("signup-location");
const inputfieldEmail = document.getElementById("signup-email");
const inputfieldPassword = document.getElementById("signup-password");
const inputfieldLevel = document.getElementById("signup-level");
const button = document.getElementById("signup-button");

const panelLogin = document.getElementById("login");
const panelLogined = document.getElementById("logined-done");
panelLogined.style.display = "none";

button.addEventListener("click", function()
{
  let user = {
    username: inputfieldUsername.value,
    email: inputfieldEmail.value,
    password: inputfieldPassword.value,
    date: inputfieldDate.value,
    location: inputfieldLocation.value,
    level: inputfieldLevel.value
  };

  if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0 && user.date.length > 0 && user.location.length > 0 && user.level.length > 0)
  {
    push(users, user);
    panelLogin.style.display = "none";
    panelLogined.style.display = "flex";
  }
});
