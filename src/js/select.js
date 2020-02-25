/* stylize select */
(function($) {
  $(function() {
    $('.js-select').styler();
  });
})(jQuery);

/* add arrow svg to select */
setTimeout(function() {
  const arrow = '<div class="form__icon form__icon_select"><svg width="8" height="5" class="svg-icon"><use xlink:href="#iconSelect"></use></svg></div>';
  $('.jq-selectbox__trigger-arrow').html(arrow);
}, 1);
