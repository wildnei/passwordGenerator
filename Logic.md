## Acceptance Criteria


GIVEN I need a new, secure password

WHEN I click the button to generate a password

* Condition "click" = generate password 

THEN I am presented with a series of prompts for password criteria

* Prompt = password text with criteria "Please select the following options to generate your secure password:" 

WHEN prompted for password criteria

THEN I select which criteria to include in the password

WHEN prompted for the length of the password

* Prompt "How many characters would you like for your password, please choose any number between 8 and 128"
* VALIDATION: if number < 8 prompt "Please select a number between 8 and 128"  

THEN I choose a length of at least 8 characters and no more than 128 characters



WHEN prompted for character types to include in the password

* Prompt: "Would you like to add special character types in your password?" 
* If yes: (Prompt: Add lowercase character?) Else: () 
* : Add numeric character?
* Else if Prompt: Add special character " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ? 

THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt

THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered

THEN a password is generated that matches the selected criteria

WHEN the password is generated

THEN the password is either displayed in an alert or written to the page



