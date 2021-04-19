//сделаем чтобы на мобилке кнопка открывала и закрывала блок фильтров
$('.filters-block').find('.toggle-button').click(e => {
   //просто переключаем (вкл/выкл) цсс класс блока фильтров, выплывание блока на чистом цсс
   $('.filters-block').toggleClass('filters-block_mobile-visible');
});

//также и закрытие блока фильтров при нажатии на крестик
$('.filters-block').find('.close-button').click(e => {
   $('.filters-block').toggleClass('filters-block_mobile-visible');
});
