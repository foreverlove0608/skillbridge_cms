$('.js-lang').click(function () {
		$(this).next().slideToggle();

		$('.switch-language__list li a').click(function () {
				var lang_value = $(this).html();
				$('.switch-language__label').html(lang_value);
				$('.switch-language__list').slideUp();
		})
});

$('.js-dropdown').click(function (e) {
	e.preventDefault();
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
	$('body').removeClass('has-modal');
})


$('.js-show-modal').click(function (e) {
	e.preventDefault();
	$('.cms-heading__control-option').slideUp();
	var modal_id = $(this).attr('data-modal');
	$('.c-modal').removeClass('is-show');
	$('#' + modal_id).addClass('is-show');
	$('body').addClass('has-modal');
});


$('ul.c-tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.c-tabs li').removeClass('is-active');
	$('.tabs-content').removeClass('current');

	$(this).addClass('is-active');
	$("#"+tab_id).addClass('current');
})





//update skills selected on input
$('.js-submit-skills').click(function (e) {
	e.preventDefault();
	$('.tabs-content input').each(function () {
		if ($(this).prop('checked')) {
			$('#register-form__list-skills').val($(this).val());
		}
	})
	$('.c-modal').removeClass('is-show');
})


$('.txt-delete-all').click(function (e) {
	e.preventDefault();
	$('.box-selected__result li').hide();
	$('.box-selected__heading .qty').html('(0)');
	$('.tabs-content input').prop('checked', false);
})


$('.btn-delete-skills-after').click(function () {
	$('#fillter').hide();
	$(this).parent().hide();
})

function updateTotal() {
	let count = 0;
	let checkbox_el = $('.tabs-content input');
	for (let i = 0; i < checkbox_el.length; i++) {
		if (checkbox_el[i].checked === true) {
			count++;
		}
	}

	$('.box-selected__heading .qty').html('('+count+')');
}

$('.fillter-acc__label').click(function () {
	$(this).next().slideToggle();
	$(this).parent().toggleClass('is-active');
})


$('.acc-skills__dt').click(function () {
	$(this).next().slideToggle(100);
	$(this).parent().toggleClass('is-active');
})


var skill_template = `<div class="form-grid form-grid--styles02">
											<dl class="form-group">
												<dt class="form-group__label">資格証明書</dt>
												<dd class="form-group__input">
													<a href="" class="txt-link js-qualifications">参考</a>
													<input type="text" class="form-control" placeholder="基本情報技術者">
												</dd>
											</dl>
											<dl class="form-group">
												<dt class="form-group__label">取得日</dt>
												<dd class="form-group__input">
													<input type="text" placeholder="2021年06月" class="form-control form-control--date">
												</dd>
											</dl>
											<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
										</div>`;

var project = `<div class="box-project">
<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
<div class="form-grid">
	<dl class="form-group form-group--full">
		<dt class="form-group__label">プロジェクト名</dt>
		<dd class="form-group__input">
			<input type="text" class="form-control" placeholder="プロジェクト名を入力してください。">
		</dd>
	</dl>
	<dl class="form-group">
		<dt class="form-group__label">開始</dt>
		<dd class="form-group__input">
			<input type="text" class="form-control" placeholder="Select time">
		</dd>
	</dl>
	<dl class="form-group">
		<dt class="form-group__label">終了</dt>
		<dd class="form-group__input">
			<input type="text" class="form-control" placeholder="Select time">
		</dd>
	</dl>
</div>
<div class="project-business">
	<h3 class="project-business__ttl"><span>業務内容</span></h3>
	<dl class="form-group form-group--full form-group--styles02">
		<dt class="form-group__label"><span>*</span>プロジェクト内容</dt>
		<dd class="form-group__input">
			<img src="../img/common/editor-02.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>組織</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-01.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>組織</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-02.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>役割</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-02.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>開発環境</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-03.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>担当業務</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-04.png" alt="担当業務">
		</dd>
	</dl>
</div>
</div>`;

var project02 = `<div class="register-form__dd-wp form-grid project-content02">
<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
<dl class="form-group form-group--full">
	<dt class="form-group__label">勤務先</dt>
	<dd class="form-group__input">
		<input type="text" placeholder="氏名を入力してください。" class="form-control">
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label"><span>*</span>勤務先</dt>
	<dd class="form-group__input">
		<select name="" id="" class="form-control form-control--select">
			<option value="いつから">いつから</option>
			<option value=""></option>
		</select>
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label"><span>*</span>終了日</dt>
	<dd class="form-group__input">
		<select name="" id="" class="form-control form-control--select">
			<option value="いつから">いつから</option>
			<option value=""></option>
		</select>
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label">資本金</dt>
	<dd class="form-group__input">
		<input type="text" class="form-control" placeholder="資本金を選択してください。">
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label">資本金</dt>
	<dd class="form-group__input">
		<input type="text" class="form-control" placeholder="従業員数を入力してください。">
	</dd>
</dl>
<a href="#" class="btn-add-project mt0">この会社のプロジェクを追加</a>
</div>`;

$('.box-project__close').click(function (e) {
	e.preventDefault();
	$(this).parent().remove();
});


//js add field qualifications
$('.js-qualifications').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('data-id');
	$('#qualifications').attr('data-modal', id);
	$('#qualifications').addClass('is-show');
});

var id = 2;
$('.js-add-qualifications').click(function (e) {
	// $(this).parent().append(skill_template);
	e.preventDefault();
	id++;
	$(this).before( `<div class="form-grid form-grid--styles02">
	<dl class="form-group">
		<dt class="form-group__label">資格証明書</dt>
		<dd class="form-group__input">
			<a href="" class="txt-link js-qualifications" data-id="`+ id +`">参考</a>
			<input type="text" class="form-control" placeholder="基本情報技術者" id="`+ id +`">
		</dd>
	</dl>
	<dl class="form-group">
		<dt class="form-group__label">取得日</dt>
		<dd class="form-group__input">
			<input type="text" placeholder="2021年06月" class="form-control form-control--date">
		</dd>
	</dl>
	<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
</div>` );
	$('.box-project__close').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
	$('.js-qualifications').click(function (e) {
		e.preventDefault();
		var id = $(this).attr('data-id');
		$('#qualifications').attr('data-modal', id);
		$('#qualifications').addClass('is-show');
	});
})

$('.js-add-project').click(function (e) {
	e.preventDefault();
	$(this).before(project);
	$('.box-project__close').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
})

$('.js-add-project02').click(function (e) {
	e.preventDefault();
	$(this).before(project02);
	$('.box-project__close').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
})



$('.js-submit-qualifications').click(function (e) {
	e.preventDefault();
	var data_modal = $(this).closest('.c-modal').attr('data-modal');
	console.log(data_modal);
	$('.qualifications-content__wp input').each(function () {
		if ($(this).prop('checked')) {
			$('#' + data_modal).val($(this).val());
		}
	})
	$('#qualifications').removeClass('is-show');
})