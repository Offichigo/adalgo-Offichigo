/* Write a function named passwd_validator that takes a string as argument.

 It will return True if the string is a valid password; False otherwise.
 A valid password has the following characteristics:

 it has between 6 and 12 characters (included)
 it has at least one lowercase character
  it has at least one uppercase character
 it has at least one decimal number
 it has at least one special character: $, # or @
 Examples
 This: passwd_validator("l#H1@")
 Will return: False (because there are less than 6 characters)
 This: passwd_validator("el3H1@f")
 Will return: True

 This: passwd_validator("fwjifewJ#")
 Will return: False (because there's no decimal numbers) */

/* Écris une fonction nommée passwd_validator qui prend une string en argument.
 Elle retourne True si la string est un mot de passe valide, False sinon.
 Un mot de passe valide a les caractéristiques suivantes :
 - il contient entre 6 et 12 caractères (inclus)
 - il contient au moins une lettre minuscule
 - il contient au moins une lettre majuscule
 - il contient au moins un chiffre
 - il contient au moins un caractère spécial : $, # ou @
 Exemples :
 passwd_validator("l#H1@")
 → retourne False (moins de 6 caractères)
 passwd_validator("el3H1@f")
 → retourne True
 passwd_validator("fwjifewJ#")
 → retourne False (pas de chiffre)
*/
export const passwd_validator = (passwd) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#@]).{6,12}$/;
  return regex.test(passwd);
};
