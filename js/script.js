

$(function () {
  let counterSliderMax = $('.slider__item').length;
  let counterSlider = 1
  for (let i = 0; i < counterSliderMax; i++) {
    console.log(':>', i);
    const point = document.createElement('div');
    point.className = `slider__point`;
    point.classList.add(`slider__point-${i+1}`)
    $('.container-points')[0].append(point);
  }
  $('.slider__item').fadeOut(0);
  $(`.slider__item-1`).fadeIn(500);
  $(`.slider__point-1`).addClass('activ');
  // ↓↓↓ Кнопка для переходу до попереднього слайду 
  $('.slider__btn-prev').click(function (e) {
    $('.slider__item').fadeOut(0);
    $('.slider__point').removeClass('activ');
    e.preventDefault();
    counterSlider--
    if (counterSlider <= 0) counterSlider = counterSliderMax;
    $(`.slider__item-${counterSlider}`).fadeIn(500);
    $('.slider__bg')[0].src = $(`.slider__item-${counterSlider} img`)[0].src;
    $(`.slider__point-${counterSlider}`).addClass('activ');
  });
  // ↑↑↑ Кнопка для переходу до попереднього слайду 
  // ↓↓↓ Кнопка для переходу до наступного слайду 
  $('.slider__btn-next').click(function (e) {
    $('.slider__item').fadeOut(0);
    $('.slider__point').removeClass('activ');
    e.preventDefault();
    counterSlider++
    if (counterSlider > counterSliderMax) counterSlider = 1;
    $(`.slider__item-${counterSlider}`).fadeIn(500);
    $('.slider__bg')[0].src = $(`.slider__item-${counterSlider} img`)[0].src;
    $(`.slider__point-${counterSlider}`).addClass('activ');
  });
  // ↑↑↑ Кнопка для переходу до наступного слайду 
})

