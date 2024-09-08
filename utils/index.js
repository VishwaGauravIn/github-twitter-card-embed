export function convertToUnicode(str) {
  // Trim excess spaces and new lines
  const cleanedStr = str.replace(/\s+/g, " ").trim();

  // Define a mapping for special characters to their HTML entity equivalents
  const specialCharMap = {
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;",
    "¢": "&cent;",
    "£": "&pound;",
    "¥": "&yen;",
    "€": "&euro;",
    "©": "&copy;",
    "®": "&reg;",
    "™": "&trade;",
    "§": "&sect;",
    "¶": "&para;",
    "±": "&plusmn;",
    "÷": "&divide;",
    "×": "&times;",
    "¤": "&curren;",
    "‰": "&permil;",
    "∞": "&infin;",
    µ: "&micro;",
    "¬": "&not;",
    "±": "&plusmn;",
    "°": "&deg;",
    "²": "&sup2;",
    "³": "&sup3;",
    "½": "&frac12;",
    "¼": "&frac14;",
    "¾": "&frac34;",
    "¿": "&iquest;",
    "¡": "&iexcl;",
    Ø: "&Oslash;",
    Æ: "&AElig;",
    æ: "&aelig;",
    ø: "&oslash;",
    ß: "&szlig;",
    Å: "&Aring;",
    å: "&aring;",
    Ö: "&Ouml;",
    ö: "&ouml;",
    Ü: "&Uuml;",
    ü: "&uuml;",
    Ñ: "&Ntilde;",
    ñ: "&ntilde;",
    Á: "&Aacute;",
    á: "&aacute;",
    É: "&Eacute;",
    é: "&eacute;",
    Í: "&Iacute;",
    í: "&iacute;",
    Ó: "&Oacute;",
    ó: "&oacute;",
    Ú: "&Uacute;",
    ú: "&uacute;",
    Ç: "&Ccedil;",
    ç: "&ccedil;",
  };

  return [...cleanedStr]
    .map((char) => {
      const codePoint = char.codePointAt(0);
      // Replace special characters with HTML entities
      if (specialCharMap[char]) {
        return specialCharMap[char];
      }
      // Convert only emojis (code points > 127) to Unicode escape sequences
      if (codePoint > 127 && /\p{Emoji}/u.test(char)) {
        return `&#x${codePoint.toString(16).toUpperCase()};`;
      }
      return char;
    })
    .join("");
}

export const parseDateString = (dateString) => {
  // Remove the " · " separator and split the string into date and time parts
  const [datePart, timePart] = dateString.split(" · ");

  // Parse the date part
  const [month, day, year] = datePart.split(" ");
  const parsedDate = new Date(`${month} ${day}, ${year}`);

  // Parse the time part
  const timeMatch = timePart.match(/(\d{1,2}):(\d{2}) (AM|PM) UTC/);
  if (timeMatch) {
    const [, hour, minute, period] = timeMatch;
    const hours =
      period === "PM" ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
    parsedDate.setHours(hours, minute);
  }

  return parsedDate;
};
