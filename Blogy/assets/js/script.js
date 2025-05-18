'use strict';

const addEventonElem=function(elem,type,callback){
    if(elem.length > 1){
        for(let i=0;i<elem.length;i++){
            elem[i].addEventListener(type,callback);
        }
    }
    else{
        elem.addEventListener(type,callback);
    }
};


const navbar=document.querySelector("[data-navbar]");
const navbarlinks=document.querySelector("[data-nav-link]");
const navtoggler=document.querySelector("[data-nav-toggler]");
const togglenavbar=function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
};
addEventonElem(navtoggler,"click",togglenavbar);
const closenavbar=function(){
    navbar.classList.toggle("active");
    navtoggler.classList.toggle("active");
}
addEventonElem(navbarlinks,"click",closenavbar);

/*search bar toggle*/
const searchbar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelector("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function() {
    searchbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
};
addEventonElem(searchTogglers,"click",toggleSearchBar);






// new code

// 'use strict';

// const addEventonElem = function(elem, type, callback) {
//     if (elem instanceof NodeList || Array.isArray(elem)) {
//         for (let i = 0; i < elem.length; i++) {
//             elem[i].addEventListener(type, callback);
//         }
//     } else if (elem) {
//         elem.addEventListener(type, callback);
//     }
// };

// const navbar = document.querySelector("[data-navbar]");
// const navbarLinks = document.querySelectorAll("[data-nav-link]");
// const navToggler = document.querySelector("[data-nav-toggler]");

// const toggleNavbar = function() {
//     navbar.classList.toggle("active");
//     this.classList.toggle("active");
// };
// addEventonElem(navToggler, "click", toggleNavbar);

// const closeNavbar = function() {
//     navbar.classList.remove("active");
//     navToggler.classList.remove("active");
// };
// addEventonElem(navbarLinks, "click", closeNavbar);

// /* Search bar toggle */
// const searchbar = document.querySelector("[data-search-bar]");
// const searchTogglers = document.querySelectorAll("[data-search-toggler]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleSearchBar = function() {
//     searchbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//     document.body.classList.toggle("active");
// };
// addEventonElem(searchTogglers, "click", toggleSearchBar);
