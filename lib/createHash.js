async function hashAPIKey(apikey) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder("utf-8").encode(apikey)
  );
  return Array.prototype.map
    .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
    .join("");
}

module.exports = { hashAPIKey };
