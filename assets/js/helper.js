// sample decrypted function
function getText() {
  const key = [...Array(10).keys()].reverse().join('');
  const plainText = "U2FsdGVkX18lJVftHqtawtg60cw5IbzckmQ1k20HsJ1EvEpk6Wy9mf+U2SOEBxE39LIIobhVxVlddHkAwdfPkw==";
  const decrypted = CryptoJS.AES.decrypt(plainText, key);
  return decrypted.toString(CryptoJS.enc.Utf8)
}
