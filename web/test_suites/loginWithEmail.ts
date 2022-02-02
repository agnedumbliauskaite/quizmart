import * as defaultPage from "../page_objects/default-page"
import * as loginPage from "../page_objects/login-page"
import {expect} from 'chai'
import * as discoverPage from "../page_objects/discover-page"
import { FieldValidationMessage } from "../utils/validationMessages"

const validEmail = ""
const validPass = "sauguspass"
const invalidEmail = "agne"
const invalidPass = "blah"

describe('Test for login with email', function () {
    this.timeout(0)

    it('Clicks sign in with email button', async function () {
        await defaultPage.openLandingPage()
        await loginPage.clickSignInWithEmailButton()
        await browser.pause(2000)
        expect (await loginPage.getSignInHeaderText()).equals("Sign in")
        await loginPage.clickAndEnterEmailField(validEmail,validPass)
        await browser.pause(2000)
        expect(await discoverPage.getDiscoverPageTitleText()).equals('Discover')


        
    })
    it('Check invalid email flow', async function () {
        await defaultPage.openLandingPage()
        await loginPage.clickSignInWithEmailButton()
        await browser.pause(2000)
        expect (await loginPage.getSignInHeaderText()).equals("Sign in")
        await loginPage.clickAndEnterEmailField(invalidEmail,validPass)
        await browser.pause(2000)
        expect(await loginPage.getEmailValidationText()).equals(FieldValidationMessage.NotValidEmail)
        await browser.pause(2000)
    })

})