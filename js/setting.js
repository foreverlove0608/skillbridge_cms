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