// Get the tab value and page value from the HTML Document
const tabs = document.querySelectorAll('.header .navbar .navbarBtn'); //array to tabs
const all_content = document.querySelectorAll('.main_box .main') //array for all pages

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', ()=> {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    }) 
    // => means It will be executed when the tab is clicked
    // classList provide access to the list of classes on the element, add 'active' on the class name on html

});
