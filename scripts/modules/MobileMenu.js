class MobileNav {
    constructor(btnSelect, navSelect, cssClass) {
        this.btn = btnSelect;
        this.nav = navSelect;
        this.classToggle = cssClass;
        this.events();
    }
    

    openNav() {
        this.nav.classList.toggle(this.classToggle)
        this.btn.classList.toggle(this.classToggle)
    }

    events() {
        this.btn.addEventListener('click', this.openNav.bind(this))
    }
}

const mobileNav = new MobileNav(document.getElementById("hamburger-btn"), document.getElementById("header-nav"), 'show')