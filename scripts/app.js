function init() {
    console.log('hello');
    
    const cvURL = document.querySelector('.resume')

    function resumeBtnClick() {
        window.open("")
    }
    cvURL.addEventListener('click', resumeBtnClick)
}

document.addEventListener('DOMContentLoaded', init)