import * as defaultPage from "./default-page"

const discoverPageTitle = 'h1'

export async function getDiscoverPageTitleText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(discoverPageTitle)
}