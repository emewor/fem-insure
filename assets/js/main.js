(function navMenuToggleEventListener() {
    // Click event listener and handler of mobile menu 
    const HEADER_NAV_MENU_ICON = document.getElementsByClassName("header__icon-group")[0];
    
    HEADER_NAV_MENU_ICON.addEventListener("click", () => {
        const burgerIcon = document.getElementsByClassName("header__burger-icon")[0];
        const closeIcon = document.getElementsByClassName("header__close-icon")[0];
        const headerMenu = document.getElementsByClassName("header__menu")[0];

        burgerIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("active");
        headerMenu.classList.toggle("active");
    });
})()