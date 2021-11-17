const btn = document.querySelector(".header__btns");
const nav = document.querySelector(".header__nav");
const openBtn = document.querySelector(".header__btns--open");
const closeBtn = document.querySelector(".header__btns--close");
const header = document.querySelector(".header");

btn.addEventListener("click", () => {
    nav.classList.toggle("header__nav--active");
    isActive();
    trapFocus();

})

function isActive() {
    if (nav.classList.contains("header__nav--active")) {
        openBtn.classList.add("close-menu")
        closeBtn.classList.add("open-menu");
    } else {
        openBtn.classList.remove("close-menu")
        closeBtn.classList.remove("open-menu");
    }
}

function trapFocus() {
    let focusedElements = header.querySelectorAll(".trap-focus");
    let firstFocusedElement = focusedElements[0];
    let lastFocusedElement = focusedElements[focusedElements.length - 1];
    let KEYCODE_TAB = 9;
    console.log(focusedElements)

    header.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
            if (e.shiftKey) /* shift + tab */ {
                if (document.activeElement === firstFocusedElement) {
                    lastFocusedElement.focus();
                    e.preventDefault();
                }
            } else /* tab */ {
                if (document.activeElement === lastFocusedElement) {
                    firstFocusedElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}