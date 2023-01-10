const receivingContent = document.getElementById('receiving-content')
const aboutUsContent = document.getElementById('aboutUs-content')
const contactContent = document.getElementById('contact-content')
const advertisingContent = document.getElementById('advertising-content')
const menuCollapse = document.getElementById('menu-collapse')

const receivingBtn = document.getElementById('receiving-btn')
const aboutUsBtn = document.getElementById('aboutUs-btn')
const contactBtn = document.getElementById('contact-btn')
const advertisingBtn = document.getElementById('advertising-btn')

const menuBtns = [receivingBtn, aboutUsBtn, contactBtn, advertisingBtn]
const contents = [receivingContent, aboutUsContent, contactContent, advertisingContent]

const menuList = document.getElementById('menu-list')

window.addEventListener('resize', () => {
	menuCollapseToggle()
	menuListAnimationToggle()
})

document.addEventListener('DOMContentLoaded', () => {
	menuCollapseToggle()
	menuListAnimationToggle()

	const menuBtn = document.getElementById('menu-btn')
	const menuBackBtns = document.querySelectorAll('.menu-back-btn')
	const menuCloseBtns = document.querySelectorAll('.menu-close-btn')

	menuBtn.addEventListener('click', () => {
		removeCollapseHorizontalLeft()
	})

	menuBackBtns.forEach(el =>
		el.addEventListener('click', () => {
			removeCollapseHorizontalLeft()
			toggleCollapse('#menu-collapse', true)
		})
	)

	menuCloseBtns.forEach(el =>
		el.addEventListener('click', () => {
			removeCollapseHorizontalLeft()
			setButtonBackgroundColor()
		})
	)

	receivingBtn.addEventListener('click', () => {
		receivingContent.classList.add('collapse-horizontal-left')
		toggleCollapse('#menu-collapse', true, receivingContent.id)
		setButtonBackgroundColor(receivingBtn.id)
	})

	aboutUsBtn.addEventListener('click', () => {
		aboutUsContent.classList.add('collapse-horizontal-left')
		toggleCollapse('#menu-collapse', true, aboutUsContent.id)
		setButtonBackgroundColor(aboutUsBtn.id)
	})

	contactBtn.addEventListener('click', () => {
		contactContent.classList.add('collapse-horizontal-left')
		toggleCollapse('#menu-collapse', true, contactContent.id)
		setButtonBackgroundColor(contactBtn.id)
	})

	advertisingBtn.addEventListener('click', () => {
		advertisingContent.classList.add('collapse-horizontal-left')
		toggleCollapse('#menu-collapse', true, advertisingContent.id)
		setButtonBackgroundColor(advertisingBtn.id)
	})
})

function toggleCollapse(id, boolean, contentId) {
	if (window.innerWidth < 992) {
		const bsCollapse = new bootstrap.Collapse(id, {
			toggle: boolean,
		})
	} else {
		const menuContents = [receivingContent, aboutUsContent, advertisingContent, contactContent]
		menuContents.forEach(item => {
			if (item.id !== contentId) {
				item.classList.remove('collapse-horizontal-left')
			}
		})
	}
}

function removeCollapseHorizontalLeft() {
	contents.forEach(item => {
		item.classList.remove('collapse-horizontal-left')
	})
}

function menuCollapseToggle() {
	if (window.innerWidth >= 992) {
		menuCollapse.classList.remove('collapse')
		menuCollapse.classList.remove('collapse-horizontal')
	} else {
		menuCollapse.classList.add('collapse')
		menuCollapse.classList.add('collapse-horizontal')
	}
}

function setButtonBackgroundColor(id) {
	menuBtns.forEach(item => {
		if ((item.id !== id) & (window.innerWidth >= 992)) {
			item.classList.remove('bg-warning')
			item.classList.add('bg-white')
		} else if (window.innerWidth >= 992) {
			item.classList.remove('bg-white')
			item.classList.add('bg-warning')
		}
	})
}

function menuListAnimationToggle() {
	if (window.innerWidth >= 992) {
		menuList.classList.add('slide-in-blurred-right')
	} else {
		menuList.classList.remove('slide-in-blurred-right')
	}
}
