async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword4').value.trim();
    const dogName = document.querySelector('#inputDogName').value.trim();
    const dogAge = document.querySelector('#inputDogAge').value.trim();
    const dogBreed = document.querySelector('#inputDogBreed').value.trim();
    const dogBio = document.querySelector('#floatingBio').value.trim();
    const city = document.querySelector('#inputCity').value.trim();
    const zipCode = document.querySelector('#inputZip').value.trim();

    if (email && password && dogName && dogAge && dogBreed && dogBio && city && zipCode) {
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
        zipCode
        }),
        headers: { 'Content-Type': 'application/json' }
    });


        if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);