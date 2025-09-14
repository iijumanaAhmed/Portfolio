// Written by Jumana Ahmed Khawaji

function init() {
    const resumeURL = document.querySelector('#resumeBtn')
    const senderName = document.querySelector('.fullNameInput')
    const senderEmail = document.querySelector('.emailInput')
    const senderMeassage = document.querySelector('.meassageInput')
    const formBtn = document.querySelector('#sendForm')
    const logoElem = document.querySelector('.logo')
    const projectURL = document.querySelectorAll('.projectLink')
    const projectName = document.querySelectorAll('.projectTitle')
    const socialAccount = document.querySelectorAll('.account')

    const bodyElem = document.body
    const headerElem = document.querySelector('#header')
    const contactElem = document.querySelector('#contacts')
    const darkLightModeElem = document.querySelector('#darkLightModeBtn')
    const lampElem = document.querySelector('.lamp')
    const nameElem = document.querySelector('.name')
    const specialistElem = document.querySelector('.specialist')
    const projectSectionElem = document.querySelector('#projects')
    const bodyH1Elems = document.querySelectorAll('h1')
    const bodyH2Elems = document.querySelectorAll('h2')
    const bodyH3Elems = document.querySelectorAll('h3')
    const bodyPElems = document.querySelectorAll('p')
    const bodyAElems = document.querySelectorAll('a')
    const bodyDivElems = document.querySelectorAll('div')
    const bodyLabelElems = document.querySelectorAll('label')
    const bodyButtonElems = document.querySelectorAll('button')
    const certificateCardsElems = document.querySelectorAll('.certificateCard')
    const projectCardsElems = document.querySelectorAll('.projectCard')

    const tool1 = document.querySelector('#androidStudio')
    const tool2 = document.querySelector('#axure')
    const tool3 = document.querySelector('#balasmiq')
    const tool4 = document.querySelector('#figma')
    const tool5 = document.querySelector('#github')
    const tool6 = document.querySelector('#xmapp')
    const githubIcon = document.querySelectorAll('.githubIcon')

    function darkLight() {
        if (darkLightModeElem.textContent === 'Dark Mode') {
            darkLightModeElem.textContent = 'Light Mode'
            logoElem.src = "./images/portofolio_logo_darkMode.png"
            tool1.src = "./images/tools/Android_Studio_DarkMode.png"
            tool2.src = "./images/tools/axure_DarkMode.png"
            tool3.src = "./images/tools/balasmiq_DarkMode.png"
            tool4.src = "./images/tools/figma_DarkMode.png"
            tool5.src = "./images/tools/GitHub_DarkMode.png"
            tool6.src = "./images/tools/xampp_DarkMode.png"
            bodyElem.classList.add('darkModeBody')
            headerElem.classList.add('darkModeSection')
            contactElem.classList.add('darkModeSection')
            projectSectionElem.classList.add('darkModeProjectSection')
            nameElem.classList.add('nameDarkMode')
            specialistElem.classList.add('specialistDarkMode')
            lampElem.classList.add('darkModeLamp')

            bodyH1Elems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
            })
            bodyH2Elems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
            })
            bodyH3Elems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
            })
            bodyPElems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
            })
            bodyAElems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
            })
            bodyDivElems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
            })
            bodyLabelElems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
            })
            bodyButtonElems.forEach(Elem => {
                Elem.classList.add('darkModeFontColor')
                Elem.classList.add('darkModeBtn')
            })
            certificateCardsElems.forEach(Elem => {
                Elem.classList.add('darkModeCertificateCard')
            })
            projectCardsElems.forEach(Elem => {
                Elem.classList.add('darkModeProjectCard')
            })
            githubIcon.forEach(icon => {
                icon.src = "./images/tools/gitHub_Icon_DarkMode.png"
            })

        } else {
            darkLightModeElem.textContent = 'Dark Mode'
            logoElem.src = "./images/portofolio_logo_lightMode.png"
            tool1.src = "./images/tools/Android_Studio_LightMode.png"
            tool2.src = "./images/tools/axure_LightMode.png"
            tool3.src = "./images/tools/balasmiq_LightMode.png"
            tool4.src = "./images/tools/figma_LightMode.png"
            tool5.src = "./images/tools/GitHub_LightMode.png"
            tool6.src = "./images/tools/xampp_LightMode.png"
            bodyElem.classList.remove('darkModeBody')
            headerElem.classList.remove('darkModeSection')
            contactElem.classList.remove('darkModeSection')
            projectSectionElem.classList.remove('darkModeProjectSection')
            nameElem.classList.remove('nameDarkMode')
            specialistElem.classList.remove('specialistDarkMode')
            lampElem.classList.remove('darkModeLamp')

            bodyH1Elems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
            })
            bodyH2Elems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
            })
            bodyH3Elems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
            })
            bodyPElems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
            })
            bodyAElems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
            })
            bodyDivElems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
            })
            bodyLabelElems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
            })
            bodyButtonElems.forEach(Elem => {
                Elem.classList.remove('darkModeFontColor')
                Elem.classList.remove('darkModeBtn')
            })
            certificateCardsElems.forEach(Elem => {
                Elem.classList.remove('darkModeCertificateCard')
            })
            projectCardsElems.forEach(Elem => {
                Elem.classList.remove('darkModeProjectCard')
            })
            githubIcon.forEach(icon => {
                icon.src = "./images/tools/github_Icon_LightMode.png"
            })
        }


    }
    darkLightModeElem.addEventListener('click', darkLight)


    function resumeBtnClick() {
        window.open("resume.html")
    }
    resumeURL.addEventListener('click', resumeBtnClick)

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
