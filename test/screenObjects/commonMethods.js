
export class BaseScreen {


  UIElement;
  locator;
  ELEMENT;
  constructor() {
    this.locator = locator;
    this.UIElement = $(locator);
  }

  async click() {
    await (await this.UIElement).click();
  }
  async addValue() {
    await (await this.UIElement).addValue(keys);
  }

  async getAttribute() {
    return await (await this.UIElement).getAttribute(attribute);
  }

  async getVisibleText() {

    return await (await this.UIElement).getText();
  }

  async waitForDisplayed() {
    return await (await this.UIElement).waitForDisplayed({ timeout: 70000 });
  }
  async waitForEnabled() {
    return await (await this.UIElement).waitForEnabled();
  }
  async isEnabled() {
    return await (await this.UIElement).isEnabled();
  }
  async isDisplayed() {
    return await (await this.UIElement).isDisplayed();
  }
  async isClickable() {
    return await (await this.UIElement).getAttribute('clickable');
  }
  async clearValue() {
    return await (await this.UIElement).clearValue();
  }


}
