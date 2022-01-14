
   
import * as defaultPage from "./default-page"

const signInEmailButton = "//button[text()='Sign in with email']"
const signInHeader = "//main //h1"

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}
export async function getSignInHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(signInHeader)
}