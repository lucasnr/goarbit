const accountMenu = document.querySelector('.app-account-menu');
const userAvatar = document.querySelector('.app-user .app-user-avatar');
const dismissButton = accountMenu.querySelector('.app-account-menu-dismiss');

function toggleAccountMenu() {
  accountMenu.classList.toggle('active');
}

userAvatar.onclick = toggleAccountMenu;
dismissButton.onclick = toggleAccountMenu;