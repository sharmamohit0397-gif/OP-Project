import { registerPageLocators } from "../Locators/RegisterPageLocators";
import {page} from '@playwright/test';
import {userData}  from "../TestData/RegisterTestData";

// Add one line for practice 
// Add login automation 
    
export class RegisterPage {
  constructor(page) {
    this.page = page;
  }
  getFirstNameField() {
    return this.page.locator(
      registerPageLocators.legalFirstName
    );
  }

  getPhoneNumberField(){
    return this.page.locator(registerPageLocators.phoneNumber);
  }

  async selectCountry(countryName){
    await this.page.locator(registerPageLocators.countryDropdownButton).click();
    await this.page.locator(registerPageLocators.countryOptions)
    .filter({hasText :countryName}).click();
  }

    getSelectedCountry(){
      return this.page.locator(registerPageLocators.selectedCountry);
    }

  // getSelectedCountry(country,countryCode){
  //   return this.page.getByRole('button',{name:`${country}: +${countryCode.replace('+','')}`});

  // }

  // async enterFirstNameByTyping(firstName) {
  //   const firstNameField = this.getFirstNameField();

  //   await firstNameField.clear();
  //   await firstNameField.pressSequentially(firstName);
  // }

 async register(userData)
{
  await this.page.locator(registerPageLocators.legalFirstName).fill(userData.firstName);
  await this.page.locator(registerPageLocators.legalLastName).fill(userData.lastName); 
  await this.page.locator(registerPageLocators.phoneNumber).fill(userData.phoneNumber); 
  await this.page.locator(registerPageLocators.email).fill(userData.email); 
  await this.page.locator(registerPageLocators.password).fill(userData.password);
  // await this.page.locator(registerPageLocators.checkbox).click();
  await this.page.locator(registerPageLocators.submitButton).click();
}

getFirstNameError() {
    return this.page.locator(
      registerPageLocators.legalFirstNameError
    );
  }

  getLastNameError() {
    return this.page.locator(
      registerPageLocators.legalLastNameError
    );
  }

  getPhoneNumberError() {
    return this.page.locator(
      registerPageLocators.phoneNumberError
    );
  }

  getEmailError() {
    return this.page.locator(
      registerPageLocators.emailError
    );
  }

  getPasswordError() {
    return this.page.locator(
      registerPageLocators.passwordError
    );
  }

  getCheckboxError() {
    return this.page.locator(
      registerPageLocators.checkboxError
    );
  }

};


