/**
 * This function takes a message as parameter and replaces all occurences
 * of "pain au chocolat" by "chocolatine".
 *
 * This would work with "pains au chocolat" and "chocolatines" as well and when
 * we see "un pain au chocolat" it should be replaced by "une chocolatine".
 *
 * @param {string} message The message in which the text should be replaced
 * @returns {string} an updated message with every "pain au chocolat" replaced by "chocolatine"
 */
export const chocolatine = (message) => {
  message = message.replaceAll("un pain au chocolat", "une chocolatine");
  message = message.replaceAll("pains au chocolat", "chocolatines");
  message = message.replaceAll("pain au chocolat", "chocolatine");
  return message;
};
