import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
<<<<<<< HEAD
    return element(by.css('t3h-root h1')).getText() as Promise<string>;
=======
    return element(by.css('app-root h1')).getText() as Promise<string>;
>>>>>>> 00e3f5647c65e355126ebb65368cf872cec6219f
  }
}
