
   
import * as defaultPage from "./default-page"

const signInEmailButton = "//button[text()='Sign in with email']"
const signInHeader = "//main //h1"
const emailInput = '//form//input[@name="email"]'
const passInput = '//input[@name="password"]'
const signInBtn = '//button[text()="Sign in"]'
const emailValidationMessage = '//div[./input[@name="email"]]//h3'
const formValidationMessage = '(//form //h3)[1]'
const passwordValidationMessage = '//div[./input[@name="password"]]//h3'

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}
export async function getSignInHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(signInHeader)
}

export async function clickAndEnterEmailField(email: string, pass: string): Promise<void> {
    await defaultPage.appendTextByLocator(emailInput, email)
    await defaultPage.appendTextByLocator(passInput, pass)
    await defaultPage.clickByLocator(signInBtn)
}
export async function getEmailValidationText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(emailValidationMessage)
}
export async function getFormValidationText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(formValidationMessage)
}
export async function getPassValidationText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(passwordValidationMessage)
}
