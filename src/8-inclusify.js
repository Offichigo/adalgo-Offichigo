/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * @param {string} text
 */
// \b = limite de mot
// g = toutes les occurrences

export const inclusify = (text) => {
  text = text.replace(/\bCelles\b/g, "Celleux");
  text = text.replace(/\bCeux\b/g, "Celleux");
  text = text.replace(/\bElles\b/g, "Iels");
  text = text.replace(/\bIls\b/g, "Iels");
  text = text.replace(/\bElle\b/g, "Iel");
  text = text.replace(/\bIl\b/g, "Iel");
  text = text.replace(/\bcelles\b/g, "celleux");
  text = text.replace(/\bceux\b/g, "celleux");
  text = text.replace(/\belles\b/g, "iels");
  text = text.replace(/\bils\b/g, "iels");
  text = text.replace(/\belle\b/g, "iel");
  text = text.replace(/\bil\b/g, "iel");
  return text;
};
