const menu = document.querySelector('.app-account-menu');
const appUserAvatar = document.querySelector('.app-user .app-user-avatar');

appUserAvatar.onclick = () => {
  menu.classList.toggle('active');
};