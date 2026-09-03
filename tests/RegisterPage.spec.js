import { test, expect } from '@playwright/test';

import { RegisterPage }
  from '../Pages/RegisterPage.js';

import {
  registerNegativeScenario
} from '../TestData/RegisterTestData.js';
import { registerPageLocators } from '../Locators/RegisterPageLocators.js';
import { register } from 'node:module';

test.describe('Register Page Validation', () => {

  for (const scenario of registerNegativeScenario) {

    test(
      `${scenario.id} | ${scenario.TestCase}`,
      async ({ page }) => {

        const registerPage = new RegisterPage(page);

        await page.goto('/register');

        await page.evaluate(() => {
          document.body.style.zoom = '50%';
        });

        if (scenario.phoneValidation?.country) {
          await registerPage.selectCountry(scenario.phoneValidation.country);
        }

        // Verify selected country
        await expect(
          registerPage.getSelectedCountry()
        ).toHaveAttribute(
          'title',
          scenario.phoneValidation.selectedCountry
        );

        // Verify country code before entering phone number
        await expect(
          registerPage.getPhoneNumberField()
        ).toHaveValue(
          scenario.phoneValidation.countryCode
        );
      
        
        await registerPage.register(scenario.input);
    // waitForTimeout(7000);

    // Max-length validation
    if (scenario.expected?.firstNameMaxLength) {

      const actualValue =
        await registerPage
          .getFirstNameField()
          .inputValue();

      expect(actualValue.length).toBe(
        scenario.expected.firstNameMaxLength
      );
    }

    // First name error validation

    if (scenario.expected?.firstNameError) {
      await expect(
        registerPage.getFirstNameError()
      ).toHaveText(scenario.expected.firstNameError);
    }

    // Last name error validation

    if (scenario.expected?.lastNameError) {
      await expect(
        registerPage.getLastNameError()
      ).toHaveText(scenario.expected.lastNameError);
    }


    if (scenario.phoneValidation?.phoneNumberError) {
      const expectedPhoneError = `Phone number must be ${scenario.phoneValidation.requiredDigits} digits with country code (${scenario.phoneValidation.countryCode}).`

      await expect(registerPage.getPhoneNumberError()).toHaveText(expectedPhoneError);
    }
    // if (scenario.phoneValidation) {

    //   // 1. Verify selected country
    //   await expect(
    //     registerPage.getSelectedCountry(
    //       scenario.phoneValidation.country,
    //       scenario.phoneValidation.countryCode
    //     )
    //   ).toBeVisible();



    //     // 2. Verify country code in phone field
    //     const phoneValue = await registerPage
    //       .getPhoneNumberField()
    //       .inputValue();

    //     expect(phoneValue).toContain(
    //       scenario.phoneValidation.countryCode
    //     );
    //   }

    //       if (scenario.expected?.phoneNumberError) {
    //   await expect(
    //     registerPage.getPhoneNumberError()
    //   ).toHaveText(scenario.expected.phoneNumberError);
    // }



    if (scenario.expected?.emailError) {
      await expect(
        registerPage.getEmailError()
      ).toHaveText(scenario.expected.emailError);
    }

    if (scenario.expected?.passwordError) {
      await expect(
        registerPage.getPasswordError()
      ).toHaveText(scenario.expected.passwordError);
    }

    if (scenario.expected?.checkboxError) {
      await expect(
        registerPage.getCheckboxError()
      ).toHaveText(scenario.expected.checkboxError);
    }

    if(scenario.expected?.emailError){
      await expect(registerPage.getEmailError()).toHaveText(scenario.expected.emailError)
    }

    
  }
    )
  }
});
