function init() {
    const cvURL = document.querySelector('.btn')
    const projectURL = document.querySelectorAll('.projectLink')
    const projectName = document.querySelectorAll('.projectTitle')
    const socialAccount = document.querySelectorAll('.account')
    const senderName = document.querySelector('.fullNameInput')
    const senderEmail = document.querySelector('.emailInput')
    const senderMeassage = document.querySelector('.meassageInput')
    const formBtn = document.querySelector('#sendForm')

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

    function accountClick() {
        if (this.textContent === 'Email') {
            window.open('mailto:JumanaAhmedCS@outlook.com')
        } else if (this.textContent === 'GitHub') {
            window.open('https://github.com/iijumanaAhmed')
        } else if (this.textContent === 'LinkedIn') {
            window.open('https://www.linkedin.com/in/jumana-khawaji-0488382b8')
        }
    }

    for (let i = 0; i < socialAccount.length; i++) {
        socialAccount[i].addEventListener('click', accountClick)
    }

    function formValidation() {
        document.querySelector('.contactForm').action = 'https://submit-form.com/u51dADX3t'
    }
    formBtn.addEventListener('click', formValidation)




}

document.addEventListener('DOMContentLoaded', init)
