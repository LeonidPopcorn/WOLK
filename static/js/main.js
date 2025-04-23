document.addEventListener('DOMContentLoaded', function() {
    // Обработка переключения фильтров в ленте
    const menuItems = document.querySelectorAll('.feed-menu .menu-item');
    
    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        // Предотвращаем переход по ссылке
        e.preventDefault();
        
        // Удаляем активный класс у всех элементов
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Добавляем активный класс текущему элементу
        this.classList.add('active');
        
        // Здесь можно добавить загрузку соответствующих данных
        const filterType = this.querySelector('label').textContent.trim();
        loadFeedData(filterType);
      });
    });
    
    // Функция загрузки данных для ленты
    function loadFeedData(filterType) {
      console.log(`Loading data for filter: ${filterType}`);
      // Здесь будет AJAX-запрос к серверу для получения данных
      // fetch(`/api/feed?filter=${filterType}`)
      //   .then(response => response.json())
      //   .then(data => renderFeed(data));
    }
    
    // Функция отображения данных в ленте
    function renderFeed(data) {
      // Здесь будет логика отображения полученных данных
    }
    
    // Обработка кнопки Cancel
    const cancelBtn = document.querySelector('.cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        // Здесь может быть логика отмены текущего действия
        // или возврат на предыдущую страницу
        window.history.back();
      });
    }
  });