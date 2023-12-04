let span = document.querySelector('.span');
let products = document.getElementsByClassName('products');
let product_page = Math.ceil(products.length / 4);
let l = 0;
let movePer = 30.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia('(max-width: 768px)');
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = () => {
	l = l + movePer;
	if (products == 1) {
		l = 0;
	}
	for (const i of products) {
		if (l > maxMove) {
			l = l - movePer;
		}
		i.style.left = '-' + l + '%';
	}
};
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) {
		l = 0;
	}
	for (const i of products) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
};
span[1].onclick = () => {
	right_mover();
};
span[0].onclick = () => {
	left_mover();
};