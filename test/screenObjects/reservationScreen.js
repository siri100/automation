import { BaseScreen } from "./commonMethods";

export class DorsiaElement {
     static Element() {

        return new BaseScreen(locator);
    }
}


export class DorsiaReservationScreen extends DorsiaElement{

    static getStartedBtn() { return this.Element('~get-started-button') };
    static inputNumber() { return this.Element('~phone-input') };
    static inputNumberNextBtn() { return this.Element('~phone-button-next') };
    static inputPIN() { return this.Element('//XCUIElementTypeOther[@name="       "]') };
    static next2() { return this.Element('~button-test-id') };
    static continueText() { return this.Element('//XCUIElementTypeStaticText[@name="We need your location to show you restaurants nearby."]') };
    static allowOnceBtn() { return this.Element('~Allow Once') };
    static allowBtn() { return this.Element('~Allow') };
    static homePageText() { return this.Element('(//XCUIElementTypeOther[@name="New York · Today, Dec 9"])[6]') };
    static searchBarInput() { return this.Element('//XCUIElementTypeNavigationBar[@name="RNSScreen"]/XCUIElementTypeTextField') };
    static searchResult() { return this.Element('~COTE Dev Korean Flatiron,  New York') };
    static coteBookScreentext() { return this.Element('//XCUIElementTypeStaticText[@name="The carnivorous vision of proprietor Simon Kim"]') };
    static timeSlot2() { return this.Element('((//XCUIElementTypeScrollView)[5]//XCUIElementTypeOther)[5]') };
    static tableSlot3() { return this.Element('((//XCUIElementTypeScrollView)[6]//XCUIElementTypeOther)[6]') };
    static confirmReservationScreen() { return this.Element('~Confirm your reservation') };
    static bookingConfirmedScreen() { return this.Element('~Booking confirmed.') };
    

    static async loginToDorsiaApp(memberNumber, memeberPIN) {

        await this.getStartedBtn().click();
        await this.inputNumber().waitForDisplayed();
        await this.inputNumber().addValue(memberNumber);
        await this.inputNumberNextBtn().waitForEnabled();
        await this.inputNumberNextBtn().click();
        await this.inputPIN().waitForDisplayed();
        await this.inputPIN().addValue(memeberPIN);
        await this.next2().waitForEnabled();
        await this.next2().click();
        await this.continueText().waitForDisplayed();
        await this.next2().click();
        await this.allowOnceBtn().waitForDisplayed();
        await this.allowOnceBtn().click();
        await this.allowBtn().waitForDisplayed();
        await this.allowBtn().click();
        await this.homePageText().waitForDisplayed();
        return await this.homePageText().getVisibleText();

    }

    static async reserveRestaurant() {

        await browser.touchAction({
            action: 'tap',
            x: 34,
            y: 63
        });
        await this.searchBarInput().waitForDisplayed();
        await this.searchBarInput().addValue('Cote DEV');
        await this.searchResult().waitForDisplayed();
        await this.searchResult().click();
        await this.coteBookScreentext().waitForDisplayed();

        const timeSlot2 = await $(`((//XCUIElementTypeScrollView)[5]//XCUIElementTypeOther)[5]`);

        // Perform the scroll action
        await driver.execute('mobile:scroll', {
            timeSlot2,
            toVisible: true,
            direction: 'down', 
        });
        await this.timeSlot2().waitForDisplayed();
        await this.timeSlot2().click();

        const tableSlot3 = await $(`((//XCUIElementTypeScrollView)[6]//XCUIElementTypeOther)[6]`);

        // Perform the scroll action
        await driver.execute('mobile:scroll', {
            tableSlot3,
            toVisible: true,
            direction: 'down', 
        });

        await this.tableSlot3().waitForDisplayed();
        await this.tableSlot3().click();
        await driver.pause(3000)
        await browser.touchAction({
            action: 'tap',
            x: 318,
            y: 757
        });
        await this.confirmReservationScreen().waitForDisplayed();
        await this.next2().click();
        await this.bookingConfirmedScreen().waitForDisplayed();
        await driver.pause(3000)
    }


}
// module.exports = new DorsiaReservationScreen();
