function redirect(url) {
  const { redirect } = Host.getFunctions();
  const mem = Memory.fromString(url);
  redirect(mem.offset);
}

function notarize(options) {
  const { notarize } = Host.getFunctions();
  const mem = Memory.fromString(JSON.stringify(options));
  const idOffset = notarize(mem.offset);
  const id = Memory.find(idOffset).readString();
  return id;
}

function outputJSON(json) {
  Host.outputString(
    JSON.stringify(json),
  );
}

function getCookiesByHost(hostname) {
  const cookies = JSON.parse(Config.get('cookies'));
  if (!cookies[hostname]) throw new Error(`cannot find cookies for ${hostname}`);
  return cookies[hostname];
}

function getHeadersByHost(hostname) {
  const headers = JSON.parse(Config.get('headers'));
  if (!headers[hostname]) throw new Error(`cannot find headers for ${hostname}`);
  return headers[hostname];
}

function getLocalStorageByHost(hostname) {
  console.log('HERE!!!!!')
  const localStorage = JSON.parse(Config.get('localStorage'));
  if (!localStorage[hostname]) throw new Error(`cannot find local storage for ${hostname}`);
  return localStorage[hostname];
}

function getSessionStorageByHost(hostname) {
  const sessionStorage = JSON.parse(Config.get('sessionStorage'));
  if (!sessionStorage[hostname]) throw new Error(`cannot find session storage for ${hostname}`);
  return sessionStorage[hostname];
}

module.exports = {
  redirect,
  notarize,
  outputJSON,
  getCookiesByHost,
  getHeadersByHost,
  getLocalStorageByHost,
  getSessionStorageByHost,
};
