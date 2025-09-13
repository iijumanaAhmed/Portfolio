

function init() {
    console.log('hello')
    const cvURL = document.querySelector('.resume')
    const projectURL = document.querySelectorAll('.projectLink')
    const projectName = document.querySelectorAll('.projectTitle')

    function resumeBtnClick() {
        window.open("")
    }
    cvURL.addEventListener('click', resumeBtnClick)

    function gitHubClick() {
        for (let n = 0; n < projectName.length; n++) {
            const name = projectName[n].textContent.replaceAll(' ', '-')            
            if ((name !== '') && (name === this.id)) {
                window.open(`https://github.com/iijumanaAhmed/${this.id}`)
                break
            }
        }
    }

    for (let i = 0; i < projectURL.length; i++) {
        if (projectURL[i] !== '') {
            projectURL[i].addEventListener('click', gitHubClick)
        }
    }
}

document.addEventListener('DOMContentLoaded', init)
