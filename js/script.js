const loginbuttons = document.querySelectorAll('.login-btn')
const signupbuttons = [document.querySelector('.signup-btn'), document.querySelector('.form-signup-button'), document.querySelector('.signup')]
const bussAcc = document.querySelector('.bussAcc')

const loginPage = document.querySelector('.login-page')
const signupPage = document.querySelector('.signup-page')
const frontPage = document.querySelector('.front-page')

loginbuttons.forEach(button => {
    button.addEventListener('click', () => {
        loginPage.classList.remove('none')
        signupPage.classList.add('none')
        frontPage.classList.add('none')
    })
})

signupbuttons.forEach(button => {
    button.addEventListener('click', () => {
        loginPage.classList.add('none')
        signupPage.classList.remove('none')
        frontPage.classList.add('none')
    })
})

bussAcc.addEventListener('click', () => {
    loginPage.classList.add('none')
    signupPage.classList.remove('none')
    frontPage.classList.add('none')

    document.querySelector('#bussID').checked = true
})

// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')

if (window.innerWidth < 1000) {
    const menuIcon = document.querySelector('.menu')
    const navbar = document.querySelector('.navbar')

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change')

        if (!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else {
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
        })
    })
}


const PayPalLogo = document.querySelectorAll('.navbar-logo')
PayPalLogo.forEach(logo => {
    logo.addEventListener('click', () => {
        loginPage.classList.add('none')
        signupPage.classList.add('none')
        frontPage.classList.remove('none')
    })
})

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => e.preventDefault())
})

const loginForm = document.forms[0].children
const [email, password, login, problem, or, signup] = loginForm

const languagesFrontPage = document.querySelectorAll(`.footer-list:last-of-type li a`)
const languagesLogin = document.querySelectorAll('.languageLogin')
const br = [languagesLogin[2], languagesFrontPage[2]]
const es = [languagesLogin[1], languagesFrontPage[1]]
const us = [languagesLogin[0], languagesFrontPage[0]]


br.forEach(change => {
    change.addEventListener('click', () => portugues())
})

es.forEach(change => {
    change.addEventListener('click', () => spanish())
})

us.forEach(change => {
    change.addEventListener('click', () => english())
})


const navElements = document.querySelectorAll('.nav-list-link')
const navButtons = document.querySelectorAll('.navbar-btn')
const navLink1 = document.querySelectorAll('.nav-dropdown-link-1')
const navLink2 = document.querySelectorAll('.nav-dropdown-link-2')
const section2Els = document.querySelectorAll('.service-heading')
const section3Els = document.querySelectorAll(".feature-heading")
const footerContent = document.querySelectorAll(`.footer-list:first-of-type li a`)

const signupContent = [document.querySelector('.signup-page-content-left h1'),
document.querySelector('.signup-page-content-right h3'),
document.querySelector('.signup-page-content-right h4'),
document.querySelectorAll('.option h3')[0],
document.querySelectorAll('.option h3')[1],
document.querySelector('.signup-page-form .blue-btn'),
document.querySelector('.signup-page-top .login-btn')]

function portugues() {
    // login
    email.placeholder = 'Email ou Número de Celular'
    password.placeholder = 'Senha'
    login.value = 'Entrar'
    problem.textContent = 'Com problemas para entrar na conta?'
    or.textContent = 'ou'
    signup.value = 'Inscreva-se'

    // signup
    const signupArr = ['Veja por você mesmo porquê milhões de pessoas amam o PayPal', 'Se Inscreva agora no PayPal, é de Graça', 'Escolha entre dois tipos de contas:', 'Conta Pessoal', 'Conta para Empresas', 'Continua', 'Entrar']
    returnData(signupContent, signupArr)

    // navbar
    const navbarArr1 = ['Pessoal', 'Empresas', 'Parceiros']
    returnData(navElements, navbarArr1)
    const navbarArr2 = ['Entre', 'Cadastro']
    returnData(navButtons, navbarArr2)
    const navbarArr3 = ['Como Paypal Funciona', 'Pagamentos online', 'Envie Pagamentos', 'Pesquise por ofertas', 'Soluções de negócios', 'Aceita pagamento online', 'Envio de Faturas', 'Venda internacionalmente']
    returnData(navLink1, navbarArr3)
    const navbarArr4 = ['O que você consegue fazer com uma conta pessoal', 'Pagamento online sem fronteiras', 'Envie pagamentos pelo mundo afora', 'Pague com PayPal e envie dinheiro', 'Veja nossa variedade de produtos', 'Seja pago no seu site', 'Crie e Envie faturas digitalmente', 'PayPal apoia o seu crescimento global']
    returnData(navLink2, navbarArr4)
    document.querySelector('.help').textContent = 'Ajuda'

    // section 1
    document.querySelector(".banner-heading").textContent = 'Nós temos a solução'
    document.querySelector('.banner .blue-btn').textContent = 'Saiba Mais'

    // section 2
    document.querySelector(".section-2-heading").textContent = 'PayPal é para todos'
    const section2Arr = ['Individual', 'Empresas', 'Parceiros']
    returnData(section2Els, section2Arr)


    // section 3
    document.querySelector('.section-3-heading').textContent = 'O mundo prefere PayPal'
    const section3Arr = ['Proteção Avançada', 'Pagamentos Rápidos', 'Alcance Global', 'Fácil Integração', 'Simples e Conveniente', 'Serviço 24/7']
    returnData(section3Els, section3Arr)

    // section 4
    document.querySelector('.section-4-heading').textContent = 'Conheça o PayPal'
    document.querySelector('.set-up').textContent = `Crie uma `
    document.querySelector('.bussAcc').textContent = 'Conta para Empresas'

    // section 5
    document.querySelector('.section-5-top-heading').textContent = 'Se Inscreva e Conheça'
    document.querySelector('.signup').textContent = 'Conhecer'

    const footerArr = ['Suporte', 'Juros', 'Segurança', 'Funcionalidades', 'Loja']
    returnData(footerContent, footerArr)
    document.querySelector('.footer img').src = 'img/flagBR.png'
}

function spanish() {
    email.placeholder = 'Correo electrónico o número de teléfono'
    password.placeholder = 'Contraseña'
    login.value = 'Iniciar sesión'
    problem.textContent = '¿Tienes problemas para iniciar sesión?'
    or.textContent = 'o'
    signup.value = 'Registrarse'


    const signupArr = ['Descubre por ti mismo por qué millones de personas aman PayPal', 'Regístrate ahora en PayPal, es gratis', 'Elige entre dos tipos de cuentas:', 'Cuenta Personal', 'Cuenta de Negocios', 'Continuar', 'Iniciar sesión']
    returnData(signupContent, signupArr)

    // navbar
    const navbarArr1 = ['Personal', 'Empresas', 'Socios']
    returnData(navElements, navbarArr1)
    const navbarArr2 = ['Ingresar', 'Registrarse']
    returnData(navButtons, navbarArr2)
    const navbarArr3 = ['Cómo funciona PayPal', 'Pagos en línea', 'Enviar pagos', 'Buscar ofertas', 'Soluciones empresariales', 'Acepte pagos en línea', 'Envío de facturas', 'Vender internacionalmente']
    returnData(navLink1, navbarArr3)
    const navbarArr4 = ['Qué puede hacer con una cuenta personal', 'Pago en línea sin fronteras', 'Enviar pagos en todo el mundo', 'Pague con PayPal y envíe dinero', 'Explore nuestra variedad de productos', 'Reciba pagos en su sitio web', 'Cree y envíe facturas digitalmente', 'PayPal apoya su crecimiento global']
    returnData(navLink2, navbarArr4)
    document.querySelector('.help').textContent = 'Ayuda'


    // section 1
    document.querySelector(".banner-heading").textContent = 'Tenemos la solución'
    document.querySelector('.banner .blue-btn').textContent = 'Más información'

    // section 2
    document.querySelector(".section-2-heading").textContent = 'PayPal es para todos'
    const section2Arr = ['Individual', 'Empresas', 'Socios']
    returnData(section2Els, section2Arr)

    // section 3
    document.querySelector('.section-3-heading').textContent = 'El mundo prefiere PayPal'
    const section3Arr = ['Protección avanzada', 'Pagos rápidos', 'Alcance global', 'Fácil integración', 'Sencillo y conveniente', 'Servicio 24/7']
    returnData(section3Els, section3Arr)

    // sección 4
    document.querySelector('.section-4-heading').textContent = 'Conoce PayPal'
    document.querySelector('.set-up').textContent = 'Crea una ' 
    document.querySelector('.bussAcc').textContent = 'Cuenta para Empresas'

    // sección 5
    document.querySelector('.section-5-top-heading').textContent = 'Regístrate y Conoce'
    document.querySelector('.signup').textContent = 'Conocer'

    const footerArr = ['Soporte', 'Tarifas', 'Seguridad', 'Funciones', 'Tienda']

    returnData(footerContent, footerArr)
    document.querySelector('.footer img').src = 'img/flagES.png'
}

function english() {
    email.placeholder = 'Email or Mobile Number'
    password.placeholder = 'Password'
    login.value = 'Log In'
    problem.textContent = 'Having Problem Logging in ?'
    or.textContent = 'or'
    signup.value = 'Sign Up'

     // signup
     const signupArr = ['Veja por você mesmo porquê milhões de pessoas amam o PayPal', 'Se Inscreva agora no PayPal, é de Graça', 'Escolha entre dois tipos de contas:', 'Conta Pessoal', 'Conta para Empresas', 'Continua', 'Entrar']
     returnData(signupContent, signupArr)
 
     // navbar
     const navbarArr1 = ['Personal', 'Business', 'Partners and Developers']
     returnData(navElements, navbarArr1)
     const navbarArr2 = ['Log In', 'Sign Up']
     returnData(navButtons, navbarArr2)
     const navbarArr3 = ['How PayPal works', 'Pay online', 'Send payments', 'Search for deals', 'All business solutions', 'Accept online payments', 'Send invoices', 'Sell internationally']
     returnData(navLink1, navbarArr3)
     const navbarArr4 = ['What can you do with a personal account', 'Online payment without borders', 'Send payments abroad', 'Pay with PayPal and send money', 'See our range of products', 'Get paid on your website', 'Create and email online invoices', 'PayPal supports your global growth']
     returnData(navLink2, navbarArr4)
     document.querySelector('.help').textContent = 'Ajuda'

    // section 1
    document.querySelector(".banner-heading").textContent = "We've got you covered"
    document.querySelector('.banner .blue-btn').textContent = 'Learn More'

    // section 2
    document.querySelector(".section-2-heading").textContent = 'PayPal is for Everyone who pays or gets paid'
    const section2Arr = ['Individuals', 'Businesses', 'Partners']
    returnData(section2Els, section2Arr)

    // section 3
    document.querySelector('.section-3-heading').textContent = 'The world prefers PayPal'
    const section3El = ['Advanced Protection', 'Fast Payments', 'Global Reach', 'Easy Integration', 'Simple and Convinient', '24/7 service']
    returnData(section3Els, section3Arr)

    // section 4
    document.querySelector('.section-4-heading').textContent = 'Get Started with PayPal.'
    document.querySelector('.set-up').textContent = `Set up a `
    document.querySelector('.bussAcc').textContent = 'Business Account'

    // section 5
    document.querySelector('.section-5-top-heading').textContent = 'Sign Up and Get Started'
    document.querySelector('.signup').textContent = 'Get Started'

    const footerArr = ['Help and Contact', 'Fees', 'Security', 'Features', 'Shop']
    returnData(footerContent, footerArr)
    document.querySelector('.footer img').src = 'img/flag.png'
}

function returnData(htmlElement, textArray) {
    htmlElement.forEach((element, i) => {
        element.textContent = `${textArray[i]}`
    })
}


portugues()
