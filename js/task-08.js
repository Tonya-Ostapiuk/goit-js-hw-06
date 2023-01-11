const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const mail = formEl.email.value;
    const password = formEl.password.value;

    if (mail === '' || password === '') {
         return alert('It is necessary to fill in all columns!');
    }

    const userDetails = {
        mail,
        password,
    }
    console.log(userDetails)
    event.currentTarget.reset()

};

