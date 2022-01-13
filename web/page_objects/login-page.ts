
   
import * as defaultPage from "./default-page"

const signInEmailButton = "//button[text()='Sign in with email']"

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}