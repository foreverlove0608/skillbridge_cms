$('.js-lang').click(function () {
		$(this).next().slideToggle();

		$('.switch-language__list li a').click(function () {
				var lang_value = $(this).html();
				$('.switch-language__label').html(lang_value);
				$('.switch-language__list').slideUp();
		})
});

$('.js-user').click(function () {
	$(this).next().slideToggle();
	$(this).toggleClass('is-active');
})

$(".toggle-pass").click(function() {
	var input = $($(this).attr("toggle"));
	if (input.attr("type") == "password") {
		input.attr("type", "text");
	} else {
		input.attr("type", "password");
	}
	});


$('.btn-action').click(function () {
	$(this).next().slideToggle();
	$(this).toggleClass('is-active');
})


$('.js-cancel').click(function (e) {
	e.preventDefault();
	$(this).closest('.c-modal').removeClass('is-show');
})


$('.js-show-modal').click(function (e) {
	e.preventDefault();
	$('.cms-heading__control-option').slideUp();
	var modal_id = $(this).attr('data-modal');
	$('.c-modal').removeClass('is-show');
	$('#' + modal_id).addClass('is-show');
});