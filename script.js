const email = document.querySelector('.email');
const form = document.querySelector('form');
const errorEmail = document.querySelector('.invalid-email-message');

form.addEventListener('submit', e => {
  if(email.value){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (regexMatch) {
      // e.preventDefault();
      // console.log(email.value);
      errorEmail.textContent = '';
      email.classList.remove("redborder");
    } else {
      e.preventDefault();
      errorEmail.textContent = 'Please provide a valide email address';
      email.classList.add("redborder");
    }
  } else {
    e.preventDefault();
    errorEmail.textContent = 'You must type in an email';
    email.classList.add("redborder");
  }
});