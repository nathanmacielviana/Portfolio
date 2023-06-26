let menuIcon = document.querySelector('#openmenu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('#closemenu');
}

/*remover botão*/
menuIcon = document.remove('#openmenu');
navbar = document.remove('.navbar');

/*scroll reveal*/
ScrollReveal({
	 reset: true,
	 distance:'80px',
	 duration: 2000,
	 delay: 200 
	});

ScrollReveal().reveal('.homecontent, .servicos, .projetos, contato', { origin: 'top' });