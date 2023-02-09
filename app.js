const header = document.querySelector(`.header`);
const sideBar = document.querySelector(`.side-bar`);
const content = document.querySelector(`.content`);
const footer = document.querySelector(`.footer`);

header.addEventListener(`click`, function(){
    if(header.classList.contains(`header`)){
        header.classList.toggle(`header-two`)
    }
})
sideBar.addEventListener(`click`, function(){
    if(sideBar.classList.contains(`side-bar`)){
        sideBar.classList.toggle(`side-bar-two`)
    }
})
content.addEventListener(`click`, function(){
    if(content.classList.contains(`content`)){
        content.classList.toggle(`content-two`)
    }
})
footer.addEventListener(`click`, function(){
    if(footer.classList.contains(`footer`)){
        footer.classList.toggle(`footer-two`)
    }
})