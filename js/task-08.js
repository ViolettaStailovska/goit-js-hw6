const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)

  const email = form.elements.email.value;
  const password = form.elements.password.value;



  if (email.trim() === '' || password.trim() === '') {
    alert('All fields must be filled in!');
    return;
  }

  const formData = {
    email: email,
    password: password
  };

  console.log(formData);

  form.reset(); // Очищаємо значення полів форми
});
