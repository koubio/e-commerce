export class ECommercePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('e-commerce-app p')).getText();
  }
}
