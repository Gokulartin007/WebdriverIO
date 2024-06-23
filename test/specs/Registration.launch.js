const { expect } = require('@wdio/globals')
const RegistrationPage = require('../pageobjects/Registration.page')

describe('Registration form submission',()=>{

    before( async () => {
        // Code to set up or navigate to the login page
        await RegistrationPage.launchURL()
        await browser.maximizeWindow()
    });


    it('TC001__registration should not be submitted succesfully when required fields are blank', async () => {
        await RegistrationPage.clickOnElement(RegistrationPage.submitButton)
        await expect(RegistrationPage.errormsg).toHaveText('Please make sure all fields are valid. You need to fix 2 errors.')
    })

    it('TC002__trying to send invalid xpath and it should fail and capture the scrennshot', async () => {
        await RegistrationPage.clickOnElement($("//button[@type='submit' and text()='Submit']"))
    })


    it('TC003__registration should be submitted succesfully', async () => {

        await RegistrationPage.Typetext(RegistrationPage.FullName,'Gokul')
        await RegistrationPage.Typetext(RegistrationPage.Email,'testemailprovide@gmai.com')
        await RegistrationPage.Typetext(RegistrationPage.Phonenumber,'6658774588')
        await RegistrationPage.SelectByValue(RegistrationPage.Gender,'Male')
        await RegistrationPage.RadioButton()
        await RegistrationPage.clickOnElement(RegistrationPage.skills)
        await RegistrationPage.SelectByValue(RegistrationPage.tools,'Selenium')
        await RegistrationPage.Typetext(RegistrationPage.others,'Registration form should be submitted successfully with above data')
        
        await RegistrationPage.clickOnElement(RegistrationPage.submitButton)

        await browser.pause(1000)
        await expect(RegistrationPage.successmsg).toHaveText('Your message has been sent')
       
    })

    after(() => {
        // Close the browser session after all tests have completed
        browser.closeWindow()
    });
    
});