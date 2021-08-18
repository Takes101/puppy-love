async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  
  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword4').value.trim();
  const dogName = document.querySelector('#inputDogName').value.trim();
  const dogAge = document.querySelector('#inputDogAge').value.trim();
  const dogBio = document.querySelector('#floatingBio').value.trim();
  const dogBreed = document.querySelector('#inputDogBreed').value.trim();
  const city = document.querySelector('#inputCity').value.trim();
  const state = document.querySelector('#inputState').value.trim();
  const zip = document.querySelector('#inputZip').value.trim();

  if (email && password && dogName && dogAge && dogBreed && dogBio && city && state && zip) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        
        email,
        password,
        dogName,
        dogAge,
        dogBreed,
        dogBio,
        city, 
        state,
        zip 
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
