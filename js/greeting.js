let tg = window.Telegram.WebApp;
let userNameGreeting = document.getElementById("greeting");
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    let user = tg.initDataUnsafe.user;
    let userName = `${user.first_name} ${user.last_name}`;
    userNameGreeting.textContent = `Здравствуйте, ${userName}!`;
} else {
    console.log("Данные о пользователе недоступны.");
    userNameGreeting.textContent = "Здравствуйте, гость!";
}

let enteringZone = document.getElementById("enter");
let formContainer = document.getElementById("form-container");
document.getElementById("button-login").addEventListener('click', () => {
    enteringZone.remove();
    formContainer.innerHTML = createLoginForm();
});
document.getElementById("button-register").addEventListener('click', () => {
    enteringZone.remove();
    formContainer.innerHTML = createRegisterForm();
});
function createLoginForm() {
    return `
        <h2 class="greetingWOLK">Вход на сайт</h2>
        <form id="login-form">
            <label for="username" class="entering-label">Имя пользователя:</label><br>
            <input type="text" id="username" name="username" class="input"><br>
            <label for="password" class="entering-label">Пароль:</label><br>
            <input type="password" id="password" name="password" class="input"><br><br>
            <button type="submit" class="button">Войти</button>
        </form>
    `;
}
function createRegisterForm() {
    return `
        <h2 class="greetingWOLK">Регистрация на сайте</h2>
        <form id="register-form">
            <label for="username" class="entering-label">Имя пользователя:</label><br>
            <input type="text" id="username" name="username" class="input"><br>
            <label for="email" class="entering-label">Электронная почта:</label><br>
            <input type="email" id="email" name="email" class="input"><br>
            <label for="password" class="entering-label">Пароль:</label><br>
            <input type="password" id="password" name="password" class="input"><br><br>
            <button type="submit" class="button">Зарегистрироваться</button>
        </form>
    `;
}