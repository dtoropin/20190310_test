(function () {
	
	var _elements = $('.card');

	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		$('.courses__block').on('click', '.card__input', _blockSlideUp);
	};

	var _blockSlideUp = function (e) {
		var card = $(e.target).parents('.card');
		card.find('.card__checkbox').css('background', '#f6f7f2');
		card.addClass('active');
		setTimeout(function () {
			card.fadeOut();
		}, 1000);
		setTimeout(function () {
			_showComplete();
		}, 1500);
	};

	var _showComplete = function () {
		var show = true;
		$.each(_elements, function(i, item) {
			if($(item).is(':visible')) show = false;
		});
		// console.log(show);
		show ? $('.complete').show() : false;
	};

	return init();
})();