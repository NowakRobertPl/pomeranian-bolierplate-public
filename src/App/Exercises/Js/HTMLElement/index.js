let loginForm = document.getElementById('formID');
// let loginForm = document.querySelector('.formID') <<<<klas szuka z kropką

loginForm.addEventListener('submit', () => {
  e.preventDefault();
  console.log(e, 'testczydziała');
});
