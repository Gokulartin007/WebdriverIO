const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get FullName () {
        return $('#g4072-fullname');
    }

    get Email () {
        return $('#g4072-email');
    }

    get Phonenumber () {
        return $('#g4072-phonenumber');
    }

    get Gender () {
        return $('#g4072-gender');
    }

    get Exp() {
        return $("//input[@value='1']");
    }
    get skills() {
        return $("//input[@value='Functional testing']");
    }
    get tools() {
        return $("//select[@ id='g4072-qatools']");
    }
    get others() {
        return $("//textarea[@id='contact-form-comment-g4072-otherdetails']");
    }
    get submitButton() {
        return $("//button[@type='submit' and text()='Submit!']");
    }
    get successmsg() {
        return $("//h4[@id='contact-form-success-header']");
    }

    get errormsg() {
        return $("//div[@class='contact-form__error']//child::span[2]");
    }

    get invalidMsg() {
        return $("//span[contains(text(),'Please include')]");
    }

    /**
     * a method to encapsule automation code to interact with the page
     */

    async Typetext (wElement, valuetotype) {
        await wElement.setValue(valuetotype);
    }

    async clickOnElement (wElement) {
        await wElement.click();
    }

    async SelectByValue (wElement,val) {
        const selectBox = await wElement;
        await selectBox.selectByAttribute('value', val);
        console.log(await selectBox.getValue());
    }

    async RadioButton () {
        await this.Exp.click();
    }

}

module.exports = new RegistrationPage();
