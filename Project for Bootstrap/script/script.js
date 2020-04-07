const hide = item => item.style.opacity = 0;

const show = item => item.style.opacity = 1;

const toggles = document.querySelector('.toggles');
const portfolioItems = document.querySelectorAll('.portfolio__item');

const choiceCategory = event => {
	const target = event.target;
	const category = target.dataset.category;

	if (target.dataset.category == 'all') {
		for (let item of portfolioItems) {
				show(item);
		}
	};
	
	if (target.dataset.category == 'web-design') {
		for (let item of portfolioItems) {
			!item.classList.contains('web-design') ? hide(item) : show(item);
		}
	};
	
	if (target.dataset.category == 'design') {
		for (let item of portfolioItems) {
			!item.classList.contains('design') ? hide(item) : show(item);
		}
	};
	
	if (target.dataset.category == 'mockups') {
		for (let item of portfolioItems) {
			!item.classList.contains('mockups') ? hide(item) : show(item);
		}
	};
};

toggles.addEventListener('click', choiceCategory)

