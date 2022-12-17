document.addEventListener('DOMContentLoaded', () => {
	const navbarBtn = document.getElementById('navbarBtn')
	const navIcon = document.querySelector('.nav-icon')
	const ulMobile = document.querySelector('.nav-list-mobile')

	navbarBtn.addEventListener('click', () => {
		navIcon.classList.toggle('nav-icon-close')
		ulMobile.classList.toggle('nav-list-mobile-active')
	})

	const navbarItems = document.querySelectorAll('.nav-mobile-item')
	navbarItems.forEach(el => {
		el.addEventListener('click', () => {
			navIcon.classList.remove('nav-icon-close')
			ulMobile.classList.remove('nav-list-mobile-active')
		})
	})
})
