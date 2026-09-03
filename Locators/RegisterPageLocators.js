export const registerPageLocators = {
    legalFirstName: "//input[@id='first-name-input']",
    legalLastName: "//input[@id='last-name-input']",
    phoneNumber: "//input[@id='phone-input']",
    email: "//input[@id='email-input']",
    password: "//input[@id='password-input']",
    checkbox: "//div[@class='Checkbox__StyledCheckbox-sc-1jvpv32-2 jkWYNf']",
    submitButton: "//button[@type='submit']",
    legalFirstNameError: "//div[@data-testid='input-first-name-input-hints']/p",
    legalLastNameError: "//div[@data-testid='input-last-name-input-hints']/p",
    phoneNumberError: "//div[@class='CustomPhoneInput__ErrorMessage-sc-ham8r6-2 feIllf']",
    emailError: "//div[@data-testid='input-email-input-hints']/p ",
    passwordError: "//div[@data-testid='input-password-input-hints']/p",
    checkboxError: "//input[@id='toc-checkbox']/following::p[contains(@class,'ErrorText')][1]",
    countryDropdownButton: "//div[contains(@class,'flag-dropdown')]",
    countryOptions: "//ul[contains(@class,'country-list')]//li",
    selectedCountry: "//div[contains(@class,'selected-flag')]"
}