// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


// На що буде звертати увагу ментор при перевірці:

// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються



const loginForm = document.querySelector(".login-form");

const inputs = document.querySelectorAll("input");

const btn = document.querySelector("button");

btn.classList.toggle("change-color");

loginForm.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    
    event.preventDefault();

    let filledForm = true;

    inputs.forEach(input => {
        const trimmedInput = input.value.trim();
        if (trimmedInput === "") {
            filledForm = false;
            alert("All form fields must be filled in");
        } 
    })

    const elements = event.currentTarget.elements;
    
    const loginInfo = {};
    loginInfo.email = elements.email.value;
    loginInfo.password = elements.password.value;
    console.log(loginInfo);

    loginForm.reset();
};