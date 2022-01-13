import * as defaultPage from "../page_objects/default-page"
import * as loginPage from "../page_objects/login-page"

describe('Test for login with email', function () {
    this.timeout(0)

    it('Clicks sign in with email button', async function () {
        await defaultPage.openLandingPage()
        await loginPage.clickSignInWithEmailButton()
        await browser.pause(2000)
    })

})