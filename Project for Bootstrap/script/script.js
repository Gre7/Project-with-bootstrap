const toggles = document.querySelector('.toggles');
const portfolioItems = document.querySelectorAll('.portfolio__item');
const menuBtn = document.querySelector('.menu-btn');
const menuBlock = document.querySelector('.menu-block');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const services = document.getElementById('services');
const benefits = document.querySelectorAll('.benefits');
const moreView = document.getElementById('more-view');
const moreViewBlocks = document.querySelectorAll('.more-view-block');


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

const navigation = event => {
	const target = event.target;
	if (target.className == "fa-search") return;

	if (menuBlock.classList.contains('open-done')) { 
		hide(nav);
		menuBlock.classList.remove('open-done');
		document.body.style.overflow = 'visible';
	}
};

const hideText = (item) => item.classList.remove('show');

const showText = (item) => item.classList.add('show');

const readMore = event => {
	const target = event.target;

	if (target.tagName != "BUTTON") return;

	for (let elem of benefits) {
		if (target.dataset.target == "first" && elem.id == target.dataset.target) {
			let currentText = elem.querySelector('.more');
			if (!currentText.classList.contains('show')) {
				showText(currentText);
				target.textContent = 'HIDE'
			} else {
				hideText(currentText);
				target.textContent = 'READ MORE'
			}
			
		} 
	}

	for (let elem of benefits) {
		if (target.dataset.target == "second" && elem.id == target.dataset.target) {
			let currentText = elem.querySelector('.more');
			if (!currentText.classList.contains('show')) {
				showText(currentText);
				target.textContent = 'HIDE'
			} else {
				hideText(currentText);
				target.textContent = 'READ MORE'
			}
			
		} 
	}

	for (let elem of benefits) {
		if (target.dataset.target == "third" && elem.id == target.dataset.target) {
			let currentText = elem.querySelector('.more');
			if (!currentText.classList.contains('show')) {
				showText(currentText);
				target.textContent = 'HIDE'
			} else {
				hideText(currentText);
				target.textContent = 'READ MORE'
			}
			
		} 
	}

	for (let elem of benefits) {
		if (target.dataset.target == "fourth" && elem.id == target.dataset.target) {
			let currentText = elem.querySelector('.more');
			if (!currentText.classList.contains('show')) {
				showText(currentText);
				target.textContent = 'HIDE'
			} else {
				hideText(currentText);
				target.textContent = 'READ MORE'
			}
			
		} 
	}

	for (let elem of benefits) {
		if (target.dataset.target == "fifth" && elem.id == target.dataset.target) {
			let currentText = elem.querySelector('.more');
			if (!currentText.classList.contains('show')) {
				showText(currentText);
				target.textContent = 'HIDE'
			} else {
				hideText(currentText);
				target.textContent = 'READ MORE'
			}
			
		} 
	}

	for (let elem of benefits) {
		if (target.dataset.target == "sixth" && elem.id == target.dataset.target) {
			let currentText = elem.querySelector('.more');
			if (!currentText.classList.contains('show')) {
				showText(currentText);
				target.textContent = 'HIDE'
			} else {
				hideText(currentText);
				target.textContent = 'READ MORE'
			}
			
		} 
	}

	

};

const toggleDisplay = elem => {
	if (elem.style.display === 'flex') {
		elem.style.display = 'none'
		moreView.textContent = 'MORE VIEW'
	} else {
		elem.style.display = 'flex'; 
		moreView.textContent = 'HIDE MORE'
	} 
}

const viewMore = () => {
	for (let row of moreViewBlocks) {
		toggleDisplay(row);
	}
};

moreView.addEventListener('click', viewMore);
services.addEventListener('click', readMore);
toggles.addEventListener('click', choiceCategory);
menuBtn.addEventListener('click', showMenu);
menu.addEventListener('click', navigation)

