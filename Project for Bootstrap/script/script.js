const toggles = document.querySelector('.toggles');
const portfolioItems = document.querySelectorAll('.portfolio__item');
const menuBtn = document.querySelector('.menu-btn');
const menuBlock = document.querySelector('.menu-block');
const nav = document.querySelector('nav');

const hide = item => item.style.opacity = 0;

const show = item => item.style.opacity = 1;


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


const showMenu = event => {
	event.preventDefault();

	!menuBlock.classList.contains('open-done') ?
	show(nav) : 
	hide(nav);

	!menuBlock.classList.contains('open-done') ?
	menuBlock.classList.add('open-done') : 
	menuBlock.classList.remove('open-done');

	if (menuBlock.classList.contains('open-done')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
	}
};

// const showMenu = event => {
// 	event.preventDefault();
// 	!menuBlock.classList.contains('menu_active') ? menuBlock.classList.add('menu_active') : menuBlock.classList.remove('menu_active');
// };


// toggles.addEventListener('click', choiceCategory)
menuBtn.addEventListener('click', showMenu);


