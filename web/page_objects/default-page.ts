/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}
export async function getElementTextByLocator(locator:string) :Promise<string>{
    return (await getElementByLocator(locator)).getText()
}

export async function openLandingPage(): Promise<void> {
    await browser.url('')
}
export async function appendTextByLocator(locator: string,text: string): Promise<void> {
    await (await getElementByLocator(locator)).addValue(text)
}