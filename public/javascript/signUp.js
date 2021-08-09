async function signupFormHandler(event) {
  event.preventDefault();

  
  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword4').value.trim();
  const dogName = document.querySelector('#inputDogName').value.trim();
  const dogAge = document.querySelector('#inputDogAge').value.trim();
  const dogBreed = document.querySelector('#inputBreed').value.trim();
  const dogBio = document.querySelector('#floatingBio').value.trim();
  const state = document.querySelector('#inputState').value.trim();
  const city = document.querySelector('#inputCity').value.trim();
  const zip = document.querySelector('#inputZip').value.trim();

  if (email && password && dogName && dogAge && dogBio && dogBreed && state && city && zip) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
        dogAge,
        dogBio,
        dogName,
        dogBreed,
        state,
        city,
        zip
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}



document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);