// Use Crypto.js
import crypto from "crypto-js";

// Deconstructor
const { AES, mode, pad, enc } = crypto;

/**
 * encrypt
 * ======== ======== ========
 */
function encrypt(json, { secret, iv }, parse = enc.Utf8.parse) {
  // is Object
  if (json.constructor === Object) {
    json = JSON.stringify(json);
  }

  // Parse Json
  json = parse(json);

  // Use Aes Encrypt
  const parser = AES.encrypt(
    // Json to String
    json, // JSON.stringify(json),
    // Secret
    parse(secret),
    {
      // Mode
      mode: mode.CBC,
      // IV
      iv: parse(iv),
      // Padding
      padding: pad.Pkcs7
    }
  );

  return (
    // To String
    parser.ciphertext.toString()
  );
}

/**
 * decrypt
 * ======== ======== ========
 */
function decrypt(context, { secret, iv }, parse = enc.Utf8.parse) {
  // Hex Parse
  context = enc.Hex.parse(context);

  // Stringify
  context = enc.Base64.stringify(context);

  // Use Aes Decrypt
  const parser = AES.decrypt(context, parse(secret), {
    // Mode
    mode: mode.CBC,
    // IV
    iv: parse(iv),
    // Padding
    padding: pad.Pkcs7
  })
    // ToString
    .toString(enc.Utf8);

  // Result
  return parser.toString();
}

// Export
export { encrypt, decrypt };
