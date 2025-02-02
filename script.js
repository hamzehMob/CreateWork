import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://link-login-8e090-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const users = ref(database, "Users");

const inputfieldEmail = document.getElementById("signup-email");
const inputfieldPassword = document.getElementById("signup-password");
const button = document.getElementById("signup-button");

const panelLogin = document.getElementById("login");
const panelLogined = document.getElementById("logined-done");
panelLogined.style.display = "none";

button.addEventListener("click", function()
{
  let user = {
    email: inputfieldEmail.value,
    password: inputfieldPassword.value
  };

  if(user.email.length > 0 && user.password.length > 0)
  {
    push(users, user);
    panelLogin.style.display = "none";
    panelLogined.style.display = "flex";
  }
});
