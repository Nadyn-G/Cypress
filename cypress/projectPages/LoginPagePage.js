import { DataPage } from "./DataPage";


const SIGN_UP = '#signin2'
const SIGNUP_USERNAME_FIELD = '#sign-username'
const SIGNUP_PASSWORD_FIELD = '#sign-password'
const SIGNUP_BUTTON = '[onclick="register()"]'

const LOG_IN = '#login2'
const LOGIN_USERNAME_FIELD = '#loginusername'
const LOGIN_PASSWORD_FIELD = '#loginpassword'
const LOGIN_BUTTON = '[onclick="logIn()"]'
const WELCOME_LOGIN = '#nameofuser'

const LOG_OUT = '#logout2'
const ITEM_NAMES = '[class="card-img-top img-fluid"]'
const BTN_ADDTOCART = '[onclick="addToCart(1)"]'
const CART_OPEN = '#cartur'


export class LoginPagePage extends DataPage {

    static openPage() {
        DataPage.openPage()
    }

    static clickSignUp() {
        DataPage.click(SIGN_UP)
    }
    static clickLogIn() {
        DataPage.click(LOG_IN)
    }

    static inputUsernameSignUP(username) {
        DataPage.type(SIGNUP_USERNAME_FIELD, username)
    }
    static inputUsernameLogIN(username) {
        DataPage.type(LOGIN_USERNAME_FIELD, username)
    }

    static inputPasswordSignUP() {
        DataPage.type(SIGNUP_PASSWORD_FIELD, 'bif1234')
    }
    static inputPasswordLogIN() {
        DataPage.type(LOGIN_PASSWORD_FIELD, 'bif1234')
    }

    static clickSignupButton() {
        DataPage.click(SIGNUP_BUTTON)
    }
    static clickButtonLogIn() {
        DataPage.click(LOGIN_BUTTON)
    }

    static checkWelcomeMessage() {
        DataPage.checkExist(WELCOME_LOGIN)  
    }
    
    static LogOut() {
        cy.get(LOG_OUT).click({force: true})
    }

    static verifyErrorMessageText(errorMessageText) {
        cy.on('window:alert', (text) => {
            expect(text).to.equal(errorMessageText)
            console.error('ALERT:', text)
     })
    }

    static loginWithoutUI() {
        cy.setLoginCookies('QmlmdXJfdXNlcjE3NDczMjk=')
    cy.visit('https://www.demoblaze.com/', {failOnStatusCode: false,})
    DataPage.isVisible(WELCOME_LOGIN)
}

static addFirstItemToTheCart() {
    cy.get(ITEM_NAMES).first()
    .should('be.visible') 
    .then((item) => {
        cy.wrap(item).click()
        cy.get(BTN_ADDTOCART).first().click()
    })
    }

    static openCart() {
        DataPage.click(CART_OPEN)
    }
     
}

