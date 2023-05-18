(() => {
	const mobileMenuBtn = document.querySelector("[data-mobile-menu-btn]");
	const mobileMenu = document.querySelector("[data-mobile-menu]");
	const firstNavItem = document.querySelector("[data-first-nav-link]");

	mobileMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true" || false;
		mobileMenuBtn.classList.toggle("is-open");
		mobileMenuBtn.setAttribute("aria-expanded", !expanded);
		mobileMenu.classList.toggle("is-open");
		document.body.classList.toggle("mobile-menu-open");

		firstNavItem.focus();
	}

	// if (window.innerWidth < 768) {
	let menuLinks = document.getElementsByClassName("menu-link");
	for (let menuLink of menuLinks) {
		menuLink.addEventListener("click", closeMenu);
	}

	function closeMenu() {
		document.body.classList.remove("mobile-menu-open");
		mobileMenu.classList.remove("is-open");
		mobileMenuBtn.classList.remove("is-open");
		const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true" || false;
		mobileMenuBtn.setAttribute("aria-expanded", !expanded);
	}
	// }
})();
