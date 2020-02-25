/* animation for groups form */
new WOW().init();

setTimeout(function() {
  $(".wow").removeClass('fadeInUp');
}, 5000);

/* animation for submit button */
$('.js-submit').on('click',function(){
  let $this = $(this);
  if($this.hasClass('is-disabled')){
    $this.addClass('is-animated');
    setTimeout(function() {
      $this.removeClass('is-animated');
    }, 500);
};
});

/* draw svg */
new Vivus('draw-svg', {
  type: 'scenario-sync',
  duration: 50,
  start: 'autostart'
});
