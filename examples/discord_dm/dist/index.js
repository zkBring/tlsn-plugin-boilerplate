var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../src/utils/hf.js
var require_hf = __commonJS({
  "../../src/utils/hf.js"(exports, module2) {
    function redirect2(url) {
      const { redirect: redirect3 } = Host.getFunctions();
      const mem = Memory.fromString(url);
      redirect3(mem.offset);
    }
    function notarize2(options) {
      const { notarize: notarize3 } = Host.getFunctions();
      const mem = Memory.fromString(JSON.stringify(options));
      const idOffset = notarize3(mem.offset);
      const id = Memory.find(idOffset).readString();
      return id;
    }
    function outputJSON2(json) {
      Host.outputString(
        JSON.stringify(json)
      );
    }
    function getCookiesByHost(hostname) {
      const cookies = JSON.parse(Config.get("cookies"));
      if (!cookies[hostname])
        throw new Error(`cannot find cookies for ${hostname}`);
      return cookies[hostname];
    }
    function getHeadersByHost2(hostname) {
      const headers = JSON.parse(Config.get("headers"));
      if (!headers[hostname])
        throw new Error(`cannot find headers for ${hostname}`);
      return headers[hostname];
    }
    function getLocalStorageByHost(hostname) {
      const localStorage = JSON.parse(Config.get("localStorage"));
      if (!localStorage[hostname])
        throw new Error(`cannot find local storage for ${hostname}`);
      return localStorage[hostname];
    }
    function getSessionStorageByHost(hostname) {
      const sessionStorage = JSON.parse(Config.get("sessionStorage"));
      if (!sessionStorage[hostname])
        throw new Error(`cannot find session storage for ${hostname}`);
      return sessionStorage[hostname];
    }
    module2.exports = {
      redirect: redirect2,
      notarize: notarize2,
      outputJSON: outputJSON2,
      getCookiesByHost,
      getHeadersByHost: getHeadersByHost2,
      getLocalStorageByHost,
      getSessionStorageByHost
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  config: () => config,
  parseDiscordDm: () => parseDiscordDm,
  start: () => start,
  three: () => three,
  two: () => two
});
module.exports = __toCommonJS(src_exports);
var import_hf = __toESM(require_hf());
function isValidHost(urlString) {
  const url = new URL(urlString);
  return url.hostname === "discord.com" || url.hostname === "discord.gg";
}
function extractConversationId(urlString) {
  const url = new URL(urlString);
  if (url.hostname === "discord.com" && /\/channels\/@me\/[0-9]+$/.test(url.pathname)) {
    return url.pathname.split("/@me/")[1];
  } else {
    return url.pathname.split("/channels/")[1];
  }
}
function start() {
  const tabUrl = Config.get("tabUrl");
  if (tabUrl && !isValidHost(tabUrl)) {
    (0, import_hf.redirect)("https://discord.com/channels/@me");
    (0, import_hf.outputJSON)(false);
    return;
  }
  (0, import_hf.outputJSON)(true);
}
function two() {
  const conversationId = extractConversationId(Config.get("tabUrl") ?? "");
  const headers = (0, import_hf.getHeadersByHost)("discord.com");
  if (!conversationId || !headers["Authorization"]) {
    Host.outputString(JSON.stringify(false));
    return;
  }
  (0, import_hf.outputJSON)({
    url: `https://discord.com/api/v9/channels/${conversationId}/messages?limit=2`,
    method: "GET",
    headers: {
      Host: "discord.com",
      Accept: "*/*",
      "Accept-Encoding": "identity",
      "User-Agent": headers["User-Agent"],
      Authorization: headers["Authorization"],
      Connection: "close"
    },
    secretHeaders: [
      `authorization: ${headers["Authorization"]}`
    ]
  });
}
function parseDiscordDm() {
  const bodyString = Host.inputString();
  const params = JSON.parse(bodyString);
  if (params[0].content) {
    const revealed = `"content":"${params[0].content}"`;
    const selectionStart = bodyString.indexOf(revealed);
    const selectionEnd = selectionStart + revealed.length;
    const secretResps = [
      bodyString.substring(0, selectionStart),
      bodyString.substring(selectionEnd, bodyString.length)
    ];
    (0, import_hf.outputJSON)(secretResps);
  } else {
    (0, import_hf.outputJSON)(false);
  }
}
function three() {
  const params = JSON.parse(Host.inputString());
  if (!params) {
    (0, import_hf.outputJSON)(false);
  } else {
    const id = (0, import_hf.notarize)({
      ...params,
      getSecretResponse: "parseDiscordDm"
    });
    (0, import_hf.outputJSON)(id);
  }
}
function config() {
  (0, import_hf.outputJSON)({
    title: "Discord DMs",
    description: "Notarize your Discord DMs",
    steps: [
      {
        title: "Goto Discord DM's",
        description: "Log in to your discord if you haven't already",
        cta: "Go to discord.com",
        action: "start"
      },
      {
        title: "Open the DM you want to notarize",
        description: "Pick a short conversation (to meet the current size limits)",
        cta: "Check",
        action: "two"
      },
      {
        title: "Notarize DM",
        cta: "Notarize",
        action: "three",
        prover: true
      }
    ],
    hostFunctions: ["redirect", "notarize"],
    headers: ["discord.com"],
    requests: [
      {
        url: `https://discord.com/api/v9/channels/*/messages?limit=2`,
        method: "GET"
      }
    ]
  });
}
//# sourceMappingURL=index.js.map
