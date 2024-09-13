let tg = window.Telegram.WebApp;
// Получаем элемент заголовка
let userNameGreeting = document.getElementById("greeting");
// Проверяем наличие данных о пользователе
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    let user = tg.initDataUnsafe.user;
    let userName = `${user.first_name} ${user.last_name}`;
    // Устанавливаем имя пользователя в заголовок
    userNameGreeting.textContent = `Здравствуйте, ${userName}!`;
} else {
    // Если данные о пользователе недоступны, выводим сообщение в консоль
    console.log("Данные о пользователе недоступны.");
    userNameGreeting.textContent = "Здравствуйте, гость!";
}


let enteringZone = document.getElementById("enter");
document.getElementById("button-login").addEventListener('click', () => {
    enteringZone.remove();
});
