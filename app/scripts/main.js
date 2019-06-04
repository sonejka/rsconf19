$(window).on('scroll touchmove', function() {

  if ($('.menu-btn:checked').length === 0) {

    let coloredSections = $('section[data-color]');

    const scrollTop = $(document).scrollTop() + $(window).height() / 2;

    coloredSections.each(function(sectionIndex, sec) {
      let section = $(sec);
      if (scrollTop >= section.position().top) {
        $('.page-wrap').css('background', section.attr('data-color'));
      }
    });
  }
});


$(document).ready(function() {
  $('.menu-btn').click(function() {
    $('body').toggleClass('noscroll');
  });


  let dayToShow = window.location.hash;

  if (dayToShow === '') {
    dayToShow = '#js-sat';
  }

  dayToShow = dayToShow.substr(1);
  $('.schedule-tabs > .btn').removeClass('active');
  $('.schedule-tabs > .btn[data-day="' + dayToShow + '"]').addClass('active');
  $('.schedule').removeClass('active');
  let selector = '.schedule.' + dayToShow;
  $(selector).addClass('active');


// schedule tabs

  $('.schedule-tabs > .btn').click(function(event) {
    event.preventDefault();

    window.location.hash = $(this).data('day');
    $('.schedule-tabs > .btn').removeClass('active');
    $(this).addClass('active');
    $('.schedule').removeClass('active');

    let selector = '.schedule.' + $(this).data('day');
    $(selector).addClass('active');
  });


});

