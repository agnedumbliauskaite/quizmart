import * as defaultPage from "../page_objects/default-page"
import * as loginPage from "../page_objects/login-page"
import {expect} from 'chai'
import * as discoverPage from "../page_objects/discover-page"
import { FieldValidationMessage } from "../utils/validationMessages"

const validEmail = "agne.dumbliauskaite+1@telesoftas.com"
const validPass = "sauguspass"
const invalidEmail = "agne"
const invalidPass = "blahblah"
const shortPass = "blah"

describe('Tests for login with email', function () {
    this.timeout(0)

    this.beforeEach (async function() {
        await defaultPage.openLandingPage()
        await loginPage.clickSignInWithEmailButton()
        await browser.pause(2000)
    })

    it('Clicks sign in with email button and sign in', async () => {
       
        expect (await loginPage.getSignInHeaderText()).equals("Sign in")
        await loginPage.clickAndEnterEmailField(validEmail,validPass)
        await browser.pause(2000)
        expect(await discoverPage.getDiscoverPageTitleText()).equals('Discover')


        
    })
    it('Check invalid email validation', async () => {
        
        expect (await loginPage.getSignInHeaderText()).equals("Sign in")
        await loginPage.clickAndEnterEmailField(invalidEmail,validPass)
        await browser.pause(2000)
        expect(await loginPage.getEmailValidationText()).equals(FieldValidationMessage.invalidEmail)
        await browser.pause(2000)
    })

    it('Check incorrect password validation', async () =>  {
        
        expect (await loginPage.getSignInHeaderText()).equals("Sign in")
        await loginPage.clickAndEnterEmailField(validEmail,invalidPass)
        await browser.pause(2000)
        expect(await loginPage.getFormValidationText()).equals(FieldValidationMessage.IncorrectEmailAndPasswordCombination)
        await browser.pause(2000)
    })

    it('Check short password validation', async () => {
        
        expect (await loginPage.getSignInHeaderText()).equals("Sign in")
        await loginPage.clickAndEnterEmailField(validEmail,shortPass)
        await browser.pause(2000)
        expect(await loginPage.getPassValidationText()).equals(FieldValidationMessage.TooShortPassword)
        await browser.pause(2000)
    })
})