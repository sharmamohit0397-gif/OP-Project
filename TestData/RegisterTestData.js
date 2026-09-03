export const first_name_maxChar =50;
export const last_name_maxChar =50
export const registerNegativeScenario = [
  // {
  //   "id": "Tc_001",
  //   "TestCase": "Verify RegisterPage Validation when all fields are empty",
  //   input: {
  //     "email": "",
  //     "firstName": "",
  //     "lastName": "",
  //     "password": "",
  //     "phoneNumber": ""
      
  //   },
  //   expected :{
  //       firstNameError: "Required",
  //       lastNameError: "Required",
  //       phoneNumberError: "Required",
  //       emailError: "Required",
  //       passwordError: "The password must be at least 10 characters long.",
  //      
  //     }
  // },
  // {
  //   "id": "Tc_002",
  //   "TestCase": "Verify validation with invalid first name",
  //   input: {
  //     "email": "jkd@yopmail.com ",
  //     "firstName": "1234567",
  //     "lastName": "kumar",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
    
  //   },
  //   expected :{
  //       firstNameError : "Only letters are allowed "
  //     }
  // },
  // {
  //   "id": "Tc_003",
  //   "TestCase": "Verify validation when first name is below minimum length",
  //   input:
  //   {
  //     "email": "jkdg@yopmail.com ",
  //     "firstName":" ",
  //     "lastName": "kumar",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
  //   },
  //   expected :{
  //       firstNameError : "Atleast one letter is required"
  //     }
  // },

  // {
  //   "id": "Tc_004",
  //   "TestCase": "Verify validation when first name is above miximum length",
  //   input:
  //   {
  //     "email": "jkdf@yopmail.com ",
  //     "firstName": "A".repeat(first_name_maxChar + 10),
  //     "lastName": "kumar",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
  //   },
  //   expected :{
  //       firstNameMaxLength : first_name_maxChar 
  //     }
  // },
  // {
  //   "id": "Tc_005",
  //   "TestCase": "Verify validation with Trailing Space in first name",
  //   input: {
  //     "email": "jkd@yopmail.com ",
  //     "firstName": "Mohit Sharma ",
  //     "lastName": "kumar",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
    
  //   },
  //   expected :{
  //       firstNameError : "Trailing space should not be allowed"
  //     }
  // },
  // {
  //   "id": "Tc_006",
  //   "TestCase": "Verify validation with leading Space in first name",
  //   input: {
  //     "email": "jkd@yopmail.com ",
  //     "firstName": " Mohit Sharma",
  //     "lastName": "kumar",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
    
  //   },
  //   expected :{
  //       firstNameError : "Leading space should not be allowed"
  //     }
  // },
  // {
  //   "id": "Tc_007",
  //   "TestCase": "Verify validation with invalid Last name",
  //   input: {
  //     "email": "jkd@yopmail.com ",
  //     "firstName": "Mohit",
  //     "lastName": "1234567",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
    
  //   },
  //   expected :{
  //       lastNameError : "Only letters are allowed "
  //     }
  // },
  // {
  //   "id": "Tc_008",
  //   "TestCase": "Verify validation when last name is below minimum length",
  //   input:
  //   {
  //     "email": "jkdg@yopmail.com ",
  //     "firstName":"kumar",
  //     "lastName": " ",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
  //   },
  //   expected :{
  //       lastNameError : "Atleast one letter is required"
  //     }
  // },

  // {
  //   "id": "Tc_009",
  //   "TestCase": "Verify validation when last name is above miximum length",
  //   input:
  //   {
  //     "email": "jkdf@yopmail.com ",
  //     "firstName": "Mohit",
  //     "lastName":"A".repeat(last_name_maxChar + 10),
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
  //   },
  //   expected :{
  //       lastNameMaxLimit : first_name_maxChar 
  //     }
  // },
  // {
  //   "id": "Tc_010",
  //   "TestCase": "Verify validation with Trailing Space in last name",
  //   input: {
  //     "email": "jkd@yopmail.com ",
  //     "firstName": "Mohit",
  //     "lastName": "kumar ",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
    
  //   },
  //   expected :{
  //       lastNameError : "Trailing space should not be allowed"
  //     }
  // },
  // {
  //   "id": "Tc_011",
  //   "TestCase": "Verify validation with leading Space in last name",
  //   input: {
  //     "email": "jkd@yopmail.com ",
  //     "firstName": "Mohit Sharma ",
  //     "lastName": " kumar",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
    
  //   },
  //   expected :{
  //       firstNameError : "Leading space should not be allowed"
  //     }
  // },

  // {
  //   "id": "Tc_011",
  //   "TestCase": "Verify validation with leading Space in last name",
  //   input: {
  //     "email": "jkd@yopmail.com ",
  //     "firstName": "Mohit Sharma ",
  //     "lastName": " kumar",
  //     "password": "Admin@12345",
  //     "phoneNumber": "7889653214",
    
  //   },
  //   expected :{
  //       firstNameError : "Leading space should not be allowed"
  //     }
  // },

  {
    "id": "Tc_012",
    "TestCase": "Verify validation with invalid number in Phone number",
    input: {
      "email": "jkd@yopmail.com ",
      "firstName": "Mohit Sharma ",
      "lastName": "kumar",
      "password": "Admin@12345",
      "phoneNumber": "78965",
    
    },
    phoneValidation :{
        country : "India+",
        selectedCountry: "India: + 91",
        countryCode : "+91",
        requiredDigits : 12 ,
        phoneNumberError : "Phone number must be 12 digits with country code (+91)."
      }
  },

  {
    "id": "Tc_013",
    "TestCase": "Verify validation with invalid email",
    input: {
      "email": "@yopmail.com ",
      "firstName": "Mohit Sharma",
      "lastName": "kumar",
      "password": "Admin@12345",
      "phoneNumber": "7889653214",
    
    },
    expected :{
        emailError : "Please enter a valid email address."
      }
  },

  {
    "id": "Tc_014",
    "TestCase": "Verify validation with invalid email",
    input: {
      "email": "abcyopmail.com ",
      "firstName": "Mohit Sharma",
      "lastName": "kumar",
      "password": "Admin@12345",
      "phoneNumber": "7889653214",
    
    },
    expected :{
        emailError : "Please enter a valid email address."
      }
  },
]