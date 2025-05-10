/// <reference types="cypress" />
import { LoginPagePage } from "../../projectPages/LoginPagePage"


describe('Demoblaze Page', () => {
    it('01. Success Sign up', () => {
        LoginPagePage.openPage()
        LoginPagePage.clickSignUp()
        LoginPagePage.inputUsernameSignUP('Bifur_user')
        LoginPagePage.inputPasswordSignUP()
        LoginPagePage.clickSignupButton()  
    }) 

    it('02. Success Log in', () => {
        LoginPagePage.openPage()
        LoginPagePage.clickLogIn()
        LoginPagePage.inputUsernameLogIN('Bifur_user')
        LoginPagePage.inputPasswordLogIN()
        LoginPagePage.clickButtonLogIn()
        LoginPagePage.checkWelcomeMessage('Bifur_user')    
    }) 

    it('03 Success Log out', () => {
        LoginPagePage.openPage()
        LoginPagePage.clickLogIn()
        LoginPagePage.inputUsernameLogIN('Bifur_user')
        LoginPagePage.inputPasswordLogIN()
        LoginPagePage.clickButtonLogIn()
        LoginPagePage.checkWelcomeMessage('Bifur_user')
        cy.wait(1000)
        LoginPagePage.LogOut()
    }) 

    it('04. Login withaut password', () => {
        LoginPagePage.openPage()
        LoginPagePage.clickLogIn()
        LoginPagePage.inputUsernameLogIN('Bifur_user')
        LoginPagePage.clickButtonLogIn()
        LoginPagePage.verifyErrorMessageText('Please fill out Username and Password.')
    })

    it('05. Add product to the cart', () => {
        LoginPagePage.loginWithoutUI()
        LoginPagePage.addFirstItemToTheCart()
        LoginPagePage.openCart()  
    })

})