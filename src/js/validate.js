/* validate */
if($.fn.validate !== undefined) {
  $(".js-form").each(function(){
    let $this = $(this);
    let $message = $this.find(".js-message");
    let $submit = $this.find(".js-submit");
    $this.validate({
      focusInvalid: false,
      highlight: function(element) {
          $(element).closest(".form__wrapper").removeClass('is-complete');
          $(element).addClass('is-error');
      },
        unhighlight: function(element) {
          $(element).closest(".form__wrapper").addClass('is-complete');
          $(element).removeClass('is-error');
      },
      rules: {
        password: {
          minlength: 8
        },
        confirmPassword: {
          equalTo: "#password"
        }
      },
      submitHandler: function() {
        $submit.hide();
        $message.fadeIn();
        $(".form__wrapper").removeClass('is-complete');
        setTimeout(function() {
          $this[0].reset();
          $message.hide();
          $submit.addClass('is-disabled').fadeIn();
        }, 5000);
      }
    });
  });
};

$(".required").each(function(){
  let $this = $(this);
  let $form = $this.closest(".js-form");
  let $submit = $form.find(".js-submit");
  $this.on('change', function() {
    let $valid = $form.valid();
    if ($valid == true) {
      $submit.removeClass('is-disabled');
    } else {
      $submit.addClass('is-disabled');
    }
  });
});
