const logoutBtn = document.querySelector("#logout");

function onLogout(event) {
  localStorage.removeItem(USERNAME_KEY);
}

if(savedUsername !== null) {
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.addEventListener('click', onLogout);
}