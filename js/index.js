const nextBtn = document.querySelector('.nextBtn');
let logins = document.querySelector('.logins');
let regis = document.querySelector('.registrasi');
let form = document.querySelector('form');
nextBtn.addEventListener('click', () => {
  //   logins.style.opacity = '1';
  //   regis.style.opacity = '0';
  form.classList.toggle('actives');
});

const backBtn = (document.querySelector('.back').onclick = () => {
  form.classList.toggle('actives');
});
