/**
 * Cette fonction prend un tableau de mots et le convertit en une phrase française.
Les mots sont séparés par des virgules et les deux derniers mots sont séparés par "et".

 * This function takes an array of words and convert it into a french sentence. Words are separated by
 * commas and the two last words are separated by "et".
 *
 * @param {string[]} array array of words
 * @returns {string}
 *
 * @example
 *      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
 *      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */
export const arrayToFrench = (array) => {
  if (array.length === 1) {
    return array[0];
  } else if (array.length > 1) {
    const firstWords = array.slice(0, array.length - 1);
    const lastWord = array[array.length - 1];
    return firstWords.join(", ") + " et " + lastWord;
  }
};
