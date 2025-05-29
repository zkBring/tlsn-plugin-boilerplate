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

// src/utils/hf.js
var require_hf = __commonJS({
  "src/utils/hf.js"(exports, module2) {
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
    function getCookiesByHost2(hostname) {
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
    module2.exports = {
      redirect: redirect2,
      notarize: notarize2,
      outputJSON: outputJSON2,
      getCookiesByHost: getCookiesByHost2,
      getHeadersByHost: getHeadersByHost2
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  config: () => config,
  start: () => start,
  three: () => three,
  two: () => two
});
module.exports = __toCommonJS(src_exports);

// assets/icon.png
var icon_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAQoNEhIs17v2AAA1SUlEQVR42u29eZhcZ3mnfZ+l1u7qvVtSS2ptlix5lZEX8IZtbGPMZhO+YYAYRuSbZBIgCbNkSDKQi5CZZJgv+UhIyDKT8YQQDEkwJIBtAraMjbGxjFdZq7Uvrd632uss88dzqrtUXd3qpbpOLe99Xa1unaques/pen7neZfn92ooqoq+A7sX8jQNiAItQCfQA6wu+OoGuoA2oBVo8p4fBoKACejeF4DjfVlAFkgDSSABTADjwDAwBJwv+BoERoBJ7/nuxRp+aseDfl9iRQGa3w1odC4S8BrQjATzOmAjsMX7vh4J/A7vOWFmAnslyQtFGogDo4gQnAZOAEe972cQwUgwjzAoQfAXJQAV5iIBHwXWAJcAlwNXANuQYO/0Hq/2v5mLZAMjiCgcBvYBrwNvAP3e4yVRglBZqv3DVBfME/TNwAbgauBaYCcS/N3IHb2eSCMZwRvAy8ALwCvASSSTmIUSg5VHCcAKME/Am0gqvxO4CbgBucN3AYbf7a4wNjKucBj4KfAMIgxnkC7GLJQglB8lAGVkjsCPAFuBm4HbgV2ICAT8bm+VkUOC/2fAHuDHwBEgVfxEJQTlQwnAMpkj6MPADuAO4C7gGmTATrFwBoGXgB8ATwAHkG7EBSgxWB5KAJZIicA3kBH6O4F3Atcjqb1i+QwBe4HvAT9EZhrswicoIVgaSgAWwRx3+y4kvX8fcBsyYq9YOU4DTwIPI92E4eInKDFYOEoAFkCJwNeRFP+9wP3AlUDI73Y2GBngNeBbwD8hXQSn8AlKCC6OEoB5KBH4UeDNwIeAe4C1frdRAcBZ4DHga8BzFK0zUEIwN0oASlAi8NuAu4GPALcCMb/bqCjJFPAU8BXgX5AlzNMoIZiNEoACSgR+F/Ae4N8gc/ZBv9uoWBBZZG3Bg8B3KBonUEIwgxIA5gz8+4FfQFboNdoinXrBRlYc/jUyVqCEoIiGFoASgd8K3Af8EjKNpwK/PrCB54G/BL6NVDhO08hC0JACUCLww8ig3ieBW1Cr9OqVHPA08CVk0PCChUWNKAQNJwBFwa8DbwF+HbgXGeVX1D9JZFHRHwPPUjB92Ggi0DACUOKuvwX4OPAAasVeozKMzBh8GVldOE2jCEFDCEBR8MeADyJ3/R1+t01RFRwAvgg8hEwlAo0hAnUtACXu+jcCnwbegZTmKhR5LOBR4A+AnxQ+UM9CUJcCMMe03i8jKf8qv9unqGoGgD8D/pwGmDasOwEoEfy3A59FCnUUioXyJPC7iDfBNPUmAnUlAEXB3w58AvhV1CCfYmkMA38C/Ckwlj9YTyJQFwJQ4q5/LaLe99TLOSp8w0XWDHwWWVU4TT0IQc0HR1HwB5GCnf+CmG0qFOXiJPB7yLRhNn+w1kWgpgWgKPh7kcDfTf056iqqgzRSYPR7wLn8wVoWgZoUgBIp/5uB/46U6ioUK81TwG8gFYfT1KIQrPQuMmWnKPgN4OeBr6OCX1E5bgW+AXyYgoKxBW7rVlXUVAZQYkXffwT+PbLBhkJRaeLAHwH/HzW6grBmBKAo+NcCv48ocM1lMYq6wgH+DvhNxJoMqB0RqAkBKAr+K5Eqrtv9bpdCUcAe4NcQo1KgNkSg6gWgKPhvQxZmXOl3uxSKEryGLDx7Mn+g2kWgqtPnouB/H/A3qOBXVC9XIp/R9+UPVPvAYNUKQMGF04CPIXZOfX63S6G4CH3IZ/VjeBl2NYtA1XUBii6WiVTwfR5lxa2oLSaR5cN/RsFux9XWJagqASgK/gAyzfcZZIddhaLWSCI3rz9E/AiB6hKBqhGAEmv6Pw38FmrLLUVtkwH+G2I0UnU1BNXoihNEAv83URtxKGqfEPDbyHjbf6NABKqBqhgELLj7B5A7vwp+RT0RRD7Tn8aznK+WgUHfBaDgQphIn/+3UMGvqD/yme1/wMu8q0EEfB0DKLgAOrIpx++jBvwU9U0KyQa+hLcfgZ/jAb4JQJH6fQyxZVZTfYpGYAqxpf/f+QN+iYAvAlBihd9fonz7FI3FMLIH5cP5A36IQMUFoMTa/r9BrfBTNCangI/iY+1ARQWgRFXf14ArKnrGCkV1sQ/4ED5VEVZsFqBEPf8fo4JfobgCiYW1+QOVnB3wYxowhqyKUvX8CoVwOxITFR8Er4gAFCiaAfwnJOVRKBQzfAhZB2NA5bKAFReAohP5IPCpSryvQlFj6Ii/5QfzByohAis6CFh0Am9GnFTViL9CMTengA8Az00fWMFBwUrdiXuBL6CCX6G4GH1IrPRW4s1WTAAK7v4hpKb/lkqckEJRB9yCxEwIVrYrsCICUNTgjyDbdSkUioWzG4kdYOVEoOxjAEUNvQ74R1Tqr1AshVPA+4G90wfKPB6wkmMAHYgdkgp+hWJp9CHb3Hes1BuUVQCK7v6fAO5eqYYrFA3C25FYAsrfFShbF6CoYXcgU36qwk+hWD7DyNTgE/kD5eoKrEQXoBuxQ1bBr1CUhy4kprrL/cJlEYCiu/+vAG+tyGVRKBqHtyKxBZSvK1DuDOCmwkYqFIqy8itIjJWNZQtAgRLFEK+znopfFoWiMehBYiwG5ckCliUARQ34MDJiqVAoVo63U1BNu1wRKFcX4BJkb/Rq3GhEoagnTMRQ9JJyvNiSBaDI0vvjwHafL4xC0ShsR2JOh+VlAeXIAG4CHvD7iigUDcYDwI3LfZElCUCB4kSQ1L/T76uhUDQYnUhXIAJLzwKW22d/B3Cv31eiptAKftBKHZ95bDHLNN0L/yl6YNaTZj1NUZPci8Tgw0t9gUUvBS5QmjbgW4i3f2Ojef9oMz9rGrgu8o/rgu3i2i5YDm7Oxs06uFn5Ttb2frZxcw5uzoGcg2s5YDvye447O2h1DU3XwNDQTB1MHS2gQ0C+a0EDLaijBQwIGt4xHc00wPR+R9fkSwM0DQ1w3QKRyIuGEoxqZQ+yuc44LH6J8HIygPuBm/0++4rgBccFgZ4P6pyDm7FwkxZOPIczmcGZyOCMZbDHMzjjaZyJLM5kBjeew0nkcFMWbtrCzXhBbzlgubi2A7YXbI4rgVgYhKUalpdwTUPTvXbmRcHQRBRML/CDBlrIRIsYaNEAelMAPRZEiwXRW4MYrSH0/FdLUB5rCqBFTLSQIYJhaPIehcLgKoHwkVuQWFxSccCiMoCCu3838B3gBr/PvqwUBrqmyV035+CkLZzJLM5YGnsoiT3gfQ0m5f9jEvRuIoeTsuSObjm1GRS6ZAZayECLmCISLUH0jjBGZwSjO4KxKorRHcXoiqB3hEUoogG0oJdR5NMfJQ6V4qfAu4EhWFwWsNQM4H2I2UftomkyBFoY6PEs9kga+3wC68wU1qkprDNT2OcT2CNpuYunLEnR6xXHne6OMJXFnuvymTpa2ESLBTDawyIMvc2Ya5sx18Uw1jSJSLQG0SImmPqMMDh4/SNFmbiWmT02F8WCM4Ciu//3qCUBmL6zywfQzdo44xns8wlyJybJHR3HOjaOdSaOPZTEmcziZuxlv23DYmjoERO9LYzRE8Vc34y5sZXAxlbM9TGMVVH01hBayJCMQYlCOdgLvJNFZgFLyQDeC7zJ77Odl8KAdxyceA57IEHu6AS5g6NkD41inZiUYI/nJANQlA/blfGQeA7rzBSZFwfkuKGhNwUwuiKY62MEtrQR2NqOubkVs7cZvS2EFjQKuhCq+7AI3gS8B/jrxfzSgjKAgrt/O9L3L2tFUlnQCwJ+Kod1dkqC/bVhsgdGsE5NYY9nwKrj9L0W0UBvCmL0RDA3tRK8tIPAjg4Cm9swV0fRmgJg6N4siBKEi/AMMhYwBgvLAhabAbydakr9vekrN21jn0+Q3T9C5sUBsq8Okzs5iTOeUWllteOCE8/ixLPkjk2QevwUmqmjt4cw+1oI7uggeGU3wUs7MNY2o8cCoOtet0H9bYu4DonRry/0Fy6aARTc/aOIw+87/D5LDA03bWMdnyC99zzp5/rJ7R/BGkiCre7wdYeuobeFCGxoIXhFF6GdPQR2dGD2NssAo4YaQ5jhUcRJOAkXzwIWkwHchN+be2garmWTeaaf+D8eJrP3PPZI2tcmKSqA4+KMpsmMpsm8NMjU1w5gdEYIbG0jdM0qQrt6CGxtx+iIyGxDY2cHtyA1Aj9cyJMXKgAGUoPc7Ntp6Rr2UIrJv3qFxMNHZPBO0ZjYrqzBGEySfuYcWsTEXBcjdHU3oRvWELqqC6O3WWYZvEVVDUQzEqt7gItOZc3bBShI/68A/gVY48sp6RrW2Thjn3+W1J7TvjRBUSMYGkZPlNCV3YRv7CW0axVmX0y6Co0jBv2IJf8+mL8bsNAM4D78Cn5NwxnPMP77P1XBr7g4tovdnyDZnyD5LycwuiMEr+gifPNawtevwdzQghau+8xgDRKz+y72xDkzgKKFP4/h49z/xJdfZuJLL/n19oo6weiOELy6h8ht60QM1jZDQK/XAcQXgXu4yMKghWQAtyBdgMqja2T3jxD/xiFf3l5RX9hDKVI/PEnq8VOYvU2EblhD9G19hK7pQe+MyJPqJyu4AondeUuFLyYAJrLGOOjLKbguye8exR5M+vL2ijrFdbHOxrEePkLyu8cIbG0jcnsfkTvWE9jaLoOHTs0vOgoisfvPgDXXk0p2AQrS/+3IdMLaijdf07BHUgx+7DFyh8Yq/vaKxkPvCBO+fg3Rd2wkfP0a9I6wPFC7WcEZ4C7gIJTuBlwsA7gLP4IfQAfrxATWmbgvb69oPJzRNMnHjpN6/CSBHZ1E79lI9M4NmOtj4oNg15wQrAPuxBOAUszyBCzy+3unXy3XNA3rzBRuUs33KyqLm3PIvjrE+Bf2MvgL32fsC3vJvjYsAmCUbT/dSvEu5vENnC8DuAypM/YF18Vby+9XCxQKsE5PMfXgPpL//Abht66n+f5LCF7dI1OJtZERXIvE8s9KPTifALwN5farUABgj6RJPHyE1A9OEr5lLc3v30Zo1ypZYFTdQtAJ3MEcAjCXLXgU6f/7hqaB3hpagm2pQrFyOFNZko8cZ/iTTzDyn58i/cxZcYiq7q7B3UhMz+ICASjoI2wDdvrZYtd1MdfF0CIBP5uhUJTESeRIPnZChOC3niaz97zMFuhVKQQ7kZieNQ4wVwZwC9Dla5MdMDe2yGothaJKceI5kt89xtDHH2f088+SPTAiWWt1CUEXczh4lxoDCAC3+91iXBejM0L4xl5yR2p4HUDeZTegQ8hACxnoYVOstgu+9LCJFjbEaNPz8yfgWXGbnv9/3vUob0uetw+3Xdk/IL+nQH6PgbSNm7ZwvO9uaubL8WzJyXh7EVhOLc93+44zniH+9UOknjxD889tpen92zB7m6vJxeh2xDT0gmm1aZkqSA02A08AG/xuMbpG9pUhhn75B9VZ969raGFj2l9fbw+LfbZnoa13hNHbQhitIfHeL/TY9zbqEP9+/YLNOWY2GMmjXfDtAtxZP8zsJZD31XOY3nPAzXkbkmRsEYJEDjeexZnIYo+ncUbT2KMF38cz4oacyImgKEu1BRG4tJ3YRy+n6R2b0KKBahDXE8jA/jGYWRRUKgO4Buj1u7UAOC7BKzppet82Jv/nq741Qwub6C1B8cVfHcVc2ywW2J71td4RFu/8SECWkZozd+v8zfqC3XXm26Kr5B1jGR8eTQMDNMMo2EekcEMR+Wdmrw/PTMPy3JNTFm48K5ucDKewBpLY/XGscwmxSx9O4Yx7AqHEYZrcoTHGfucnZJ7rp/XX3oS5Lua3CKxFYvtY4cFSAnAT0g2oDnSd2EcvI7t/hPQzZ1f4vTT05gBGdxRzfQxzUyuBTa2YfTGMVU0Y7SHZKSdggC6LlWbt3pP/2ZYffNf9QgqzBffCB2a109DQoiZGNABdEcx8dgKeQDi4GRtnKos9kpK9FE5PkTs5KQas5+Kyl0I8W+3TZCuGm3NI/PNRrHNxOn73JgJb2vwUgQAS298sPFjcBWgBHqHaXH91jdyxcUY/8wyZFwbK9rJa2JBg39hK8NJ2Apd2ENjUirE6it5S5FuvdrmZTX6rNH36P+B4wjCZxR5MiigcHZe9F05MYp1P4ExkG867MfzmNXR+4VaMVU1+isAziKfnVL4LoMEF/f+rkOKfbl+vVil0DevUJONffJHU908sKd3UQgbG6iYC29oJXdlN8PJOzE2tGJ1htLCpNqkoJ4U7L7nezktTIgq5E5PkDo2SPTiKdXwCayCJm6j/Jd+xj1xG+29c7+eagSFkHOA1kHGA4i7AVVTr6j/HxexrofPzN5G8qZepbxwid2BUtrCaC1PH6PLMI3f2ELq6m8CWNvSuiNzdYcYZJv+lKA+u6znSedfUc/bV28MEtnfCPRslUxjLYJ2eJHtwlOy+YXIHR7HOxHGmsn6fQdlJfPsNondtJHTDar+6RZ3A1XgCALPHAK5j7rUB/uO4aFGTpp/bRuT2PjIvDpD+aT+5I+PYoynIOWghE70rQnBrG8GrPT/51U0z9tH5gG/Qfqmv5LtRnihopo7RE8VYHSV03RqwHJwJTxBeHyHz0iDZ/SNYZ+O4KWtZb10NOJNZEt85SmhXz8x4SmXRkRj/av5AoQA04fPqvwXhfYj09hCRuzYQeVufTE+lLFzbkTn3iCkp/fRmlOruXrUUZgoa6O0hgp09BHeuovlfXYo9miZ3dJzMS4NkfjZA7tAo9nCqZsdi0j/txx5IYvQ2+/WZvBqJ9QSAVtD/34pYCftT/79c8gNSqIG6uiI/lgC4SUv2GnxliMxz58i8MoR1LlFT271pIYPuL99J+Ja1fmWhZ5DioCNwYQawFb+X/y6Hwrl1Rf0wnSFI8AS2thPY1kHzfZdgnU+QfXWI9DPnSL9wXsxjqlwM3IyNdXZKppD9+bx2I7E+SwCuAEJ+XyCFYl4cbwxB1zDXxTDXtxB9+ybsgQSZlwZJ/egMmRfOY52LV+39wB5KyfoRfwgBlyPT/dMCoHkHFYraIS8GGhi9zUTXxoi+fSPW2Tjp5/pJPXGKzMuDYixTRbhZ37OUK/D6y3kBiOGVCyoUNUlhZrChheaNLTS9Zwu5w2Mk95wi9cRprKPjVbFc2WgPMTMl5QtbkZifzAtAN2IgqFDUPt7ouhYyCO7sJnh1N7EP7yD9XD/JR46TeeE8zqQ/6wy0gI7Z1+L3FVqHxPy0AKwDOvxulUJRdryRdqMrStN7thC9awPZfcMkvneM1BOnsc8nKtocoydK4JI2v1eadiIxfzQvAJvwnEMVirrEm03Qggah61YTumYVuQ/tIPnocRKPHMc6PlGRZoSuWy0+Af6uS4kgMf+jvABsQbnvKRoFWwYOA1vbab2knab3bRUh+KejK2o+ozcHaHrvJRDU/V6JqiExj4kss9joZ2sUCl/w7sLmuhgt//Yqmt61mcSjx0k8/MaKCEH0XVsIXbvK7+DPsxHQTcQtVA0AVgqt4Aet1PGC/2hzp2Xuhf8UPcD8piOKC/GEwFjTTMvHrqTpnk0kvnOU+MNHsE5MluUtQm9aRcsvXoUWNPxO//OsA6Im0Aqs8rs1NU9+KXLezitf7JEvL3ZcmYKynBlbrrw1V9aGrHcs7+tnOWLjld+kMj9opInbkGZoYOozfoOej+C03dj0lw4BXWzHjGKnokKXIrWEeloIeptp+aWrid6zifjDR0h8+41lDRYGr+yi/bNvFoPb6gh+gB6g1USW/7b53ZqaoNAAI++hla91T1u4iRzOZBZnPIM9lsYZTYmv3lhGvPWmsjjxLG7SM+f0gn9aGGyvaCnv4+fOcQf3BEbLu8/qnmmoJwgEdQn+sIkeNdGaPc/CthBG24xvod4eRm8PobeE0JsDYkia9ym8wO2owcQh3zXY0ELbr72J6D0biT90kOSjxxc3fWjqRN/WR+uv7yKwubWagh+gHegyESVQ3tvFTBt0egs2bBc3aeFMZrCHU1j9CexzcayzcfHGG0xhj6XFYDNpyV19Rft6F64kX/Q76ZpkDGETvTmA3hbG6AyL9VlvE2ah52GbZ4UWbDCHJC9ggzs66fjMW4jeu5n41w+SfvbcvKsLtaBBYEcHzf/PNqLv2ITeHKy24AeJ+R4TWE2j1wAUuvHCjHvNUArr1CS54xPkjk+I191AEmc8jZO0qr7wZF4c17MNt+XDXLwLs+Y5HseCGF0RjN4mAn0tmJtaMftaMHubMDrC4nibd7ipV1FwZFPQ8FvWELqmh9zhUdLPnyf7+gh2fxw3ZYOpYXSECVzSRuja1YR29sj24vly9OojBKw2gTVUkwloJSi8u7subjKHPZQid2KC3MFRsofGsI5PYA+If101LB+tOK6Lm7KwUxb2YBL2j5DKX76Iid4WwuxtJrCpVSr0trZhro9hdEVkNydDm+nOVOXnfwnYLlpAJ3hVN8GruiHnyH4LliMZVUgs39GoBQ+KALDGRAYA638NgF4Q8IkcVn+C3OFRsq8Nk90/Qu7kJM5Ien6LMQXAjDD0J8j8TExatZCB0RnB7IsRuLSD4OWdBLa2Y/Y2o7cEwdBn9imo6rhYAPmuna5J12j6wlDtQV+IBqzKjwHUHwXbM7kZW8woD46SeXlQjCSOT2CPpqtlTrbmcTM21rk41jmpxEPX0FuCmOtjBHd0yl3zsk7M9c3osSDoejWnx4s4cb8bsCx6TKrVBHSpeIHvTuXIHZ8g89IAmb3nye4fxR5IyBSbYuVxXJzxDNnxDNnXhuEfDqG3hghsbCF4ZTehXasI7ujAWNOMFjamf6fGA6rW6NT6Dux+Fniz3y0pC7qGM54h+S8nSH7vGNkDozgT1VULrvAwdIyeCMHtHbI2f9cqAptb0Vu8LeGVNXsleM5ENgOpfXSN7P4Rxv/oBdLPnKv91LLesR3s/gSp/gSpPafRY0EZQb9uNeE3ryG4vUNG0XVNZQYrR4vWd2D3CaphI9Dl4G0iOvLbT5M7Mu53axTLRAubBDa1ELp+DeGb1xK6vBO9IyILsJQYlJOTWt+B3YNU405AC0XXsPsTDH9qD5mXBv1ujaLMaGGDwOY2wjf2EnnrOgI7OmVWobZG3KuVIRMI+92KZeG4TD10QAV/neKmbbL7R8juHyH+0EECl3USuX09kVvWYW5q8YprUOMFSyOs9R3YnaZWVwLqGtaJSQZ/4TGxhFY0DEZ3lNANq4nevZHwtavQOz0/G5UVLIa0CRh+t2LJaJDeex7rrAr+RsMeSpL87jFS3z9B4NIOot4uUYFNrRDQ1VjBwjDzhiC1ie2SfW1I/aEbGDfnkN03THbfMFMPHSRy6zqi79xM6OputKiphGB+dJMaXgbs5mQqSaEAsM8niP/9IZKPHCN03Wqa7ruE8Ft60dtCapygNJq5/NfwEVvq8BWKQpx4jtSe06SfOUfw6m6a7ruE6O3r0bsiSgiKMJEEqTazAENHjzZWIaNi4bhZm8ze82ReHCB+eRfN79tK5K4NGN1KCPKXyEQuRU2OA2hBA7Mv5nczFNWO7ZJ9dYjRfcME//GwGHXcvRG9M9zoYwSOiey9WptdAV3MFuNfO1jdNfu6hhbI23SJVZcW8ey6IgG0iDlzPO/tF9DB0MX7L1/G7ACOg2u5kLNx8z6CGVvq0tNiNeakbLEcS3u2YxnxGsSu4mtUCRyX7L5hRvePkPj2GzT/6+1E7uhDbw02qhBYJpClVtcBOBC6dhWBbe1k94/41w5DQw+baLEgRnsIvTOC0R3F6ImIm05HBL0thN4SFH++iIkWMsWs0/Q8+PS8YSczhqIwu3NW7PrrrYhzHc+2zHLEqCIrIuAkczjxHM5EBmcsgz2awhlOYQ+nsEfSOKNpeSyRw83YjTGP7rhkXhoku2+Y0HWriT1wGeEbe9EiZqOVh+fqYilw/O8PMfa5Z1c+C9A19KYAemcYc00z5voYZl8Mc10MY1UUozMiQR4xZ/zzPPPOWQafcxl+Lpdi2/H8/wudgB3AdnAztgjEZBZnOIU1kMQ+O4V1Jo51dgr7fFJMTeO5us4etKhJ5I4+Wh64TJx+8gVI9c9Q7RcDaeAmLUY//yyJb71R1tfVm4MYq6KYG1sJbm3DvKSNQF8LRk8UvTUk9k8FKXrNeeIVWZlPOwHbrojDZBZ7OCmCcHyC3NFxcicmsfsTOOPpuvNWMLoiNN2/leZ/fSnm+lgjdAtOan0Hdr8OXOZ3S5aFrmEPJhn7r8+RfOzEkl/DaA9jbogR2N5J8PJOglvbMXqbJNgLHXEbZQRZK7RAd8FycBI5zyx1ityRMbIHR8kdHcc+F8eZytZFwAS2tdOy+wqi92wU09P6zQb2148hiK7hjKWZfHAf8b8/jDOWvvivtAQxN7YSurKL4M4egts7MNY0oTcHZjzsGiXYF0qxXXrOwZnIYJ2Lkz00Jqvy9o9gnZrCGU/XrCBoAZ3ovZto/bVd1bahRzl5Tus7sPtR4B6/W1IWNA0ch8yrwyS/e4z03n7s/gRuWow+tZCB3hEmeGkHoetWEdrZg7mhRcpL9Toyraw0ef9FTZMsIZ7FOhOXKr6XBsnsG8Y6PYWbyPnd0kUTvqmXjs/fXK8i8KjWd2D33wI/73dLyoqhge1ij6axzyfE99510VtC0n/vDEv/HRqhn1d5CrMEy8EZT5M7OkHmxQHSL5wnd3AUezhVM9e96T1b6PjcjTJLUCNtXiBfNYH6K6T3pnKMzois+gLkU1mQ0jfWdE9lmd7LULbh1jsihLoihG5YTSx5OdaZKTIvDZL+yTmyrwxhnU9U9d01+ehxwreso+m9W+rtczNoAgPU8nLg+XBdWeYk//G7NY1Lwd9BCxmykci2DpruvwT7nOwtkHr6DJkXB7EHElX3p3JzDomHjxC9Yz1aU6Dq2rfU0wIGTOA8kAOCfrdI0SA4kh1oho65oQVzYyvRd2/GOj1F5rl+UntOk3l1aN799ypN9vVhckfHCe7sqZcsIAf0m0A/kEEJgMIPCsQgsLmNwJY2mu7fSu7wGKknT5Pac4rcG+O+rzlwJrNkD48RvGYVdZICZIDz+TGAOKCqahT+4o0DaGGD4M5ugld30/zhHWSeP0/yseOkn+/HGfMvK7DPJ+ppSjiONwYwDIwjm4QqFP7jcsFAbvSdm4i8rY/cwVGSjx0n+fgprJOTlW9W1qmTmz8gMT9sAhPIQOAOv1ukUMzCG0DUArpkBVd10fzB7aQeP0Xiu8fIHhipWJ9cbw7W01D5ADBhAkngjN+tUSguihfoZl8Lsd1XEH33FlI/Ok3i4SNkXxla2XECQ8PcEGN6Orn2OQMk84YgJ/xujUKxYJyZ7kHz+7cRvXMDqafOkPiHw2ReHFgRITB6ogQv7ainMYATeIYgAMf8bo1CsWi87oHeEqTpPVuIvHUdqSfPEP/6QTIvD5a1axC5ae1MhWDt4wJHYcYJ6BjSFYj63TKFYtF4g4Z6LEjTe7cQuWUtycdOMPXQAXKHxpb98kZPlOYPXAqmXi8CkAKOw4wX4Blg1O9WKRTLIi8EbWGaP7Sdnr+4i9ZPXIOxumnJL6kFDVp+8SqCV3TVS/CDxPoZmBGAIdRAYG1QP6PQK4dX62H0NtP6iZ10/8WdNL9/m5R5LwItbNLy766i+V9dWm/X/QwS89NdgCngMPXgC1DNFDrwTP+fabsuyI8x5d2FvAOOi2u7YsuVr9rQPA9BXZx8LvAT1GZe05150ZnXpEEqIL07dnBHJ+2/8xai92xk6iv7ST/Xj5u15/3VwCVttPzbK4neu1kMWuvreh1GYn5aAFzgdb9bVbMUWWtNm3p6wYvl4uZsMepMi4OvkxIHXzcpxp3TP6dyuEnvsZT3vOSM469rO+IybHqGooVuwxETPRJAawqgNwfQY0H0WBDN+643e4+FTSmHNkU4pq3ACkWnnnBcNFMnfOs6gtf0kH62n9QPTpLdN4w9ksLN2Gi6hhYLEtjYQvjWdUTv3ljPtmCv451VoR34PmR9cG06BFcCrSjIHbkruynPXHMiizOWxh4R110n77w7lsaeyODGc+K+m7frzjlgOWJmuhIfNA2xFjd1tJAnEM0B9NYQekcYozuCuaoJY3WTmJp2RdDbwyIUIc8CDa1+jFJsF70pQPTuDURvXy9+EcMpMSoxdYz2EEZ3VCr+oJ76/IVkkFgHLhSAI8iy4LV+t9B3ClNpxGXIzdhirz2axh5IYJ2LY52JY5+LYw0kcUZS4q6b9Oy1q6FizGVaYNy0BRMZSia+GmghUxyPO8JihLouRmBji1TrrWvG6Iqix4IQ1KlpUcgvM9Y1z7o9OtMVK+hy1THDSKwD3qn3HdgN0Ax8D7jV7xZWlFIed4mc+Oafi5M7OYl1fALr1BRWfwJnNIUzlbtoH7Je0AI6esxzR97Q4tXytxPY1IqxqsA/Ebde0+V64yngXiBxaseDF2QAceBl6l0A9IJBOMvBmcxhDyaxTk6Se2OM7BvjWCcnsc8ncSYzcjdvYNycI6nyaJrsgVF47ASaqaO3hSRLuLSd4BVdBHd0YK6PobeEZgxVazFDqH9eBqa31C7eEuwFanivwDnxgt5NW2JpfXKS3KECS+v+BM5Eprq3F6siXMuRDGk4JSvuvnEIvTWEuT5G8PJOQm9aRfDyTsy1zRf2p5UY+I0D7C08UCwArwAj1PJOQcXoGva5OMknTpH+8VlyR8Zk4Cfd2Hf2cuNMZMhOZMjuGyb+D4cxOsMEtrYTum414WtXE9jaht4WlluLEgO/GAFeLTwwvbzBGwdoAR4FbvS7pWXBdUn+4CQTf/4KuYNqoaNfaE0BAptaCV2/msiNvQQv60TviCgxqDzPIP3/yVM7HgRmZwCTwE+pEwGIf+sNxv/gedmxRuEbbiInG4bsGyb+tYMENrcSfksv4VvXihi0eDPP9T36Xg08j8T4NKW2BX8G+ASwuHWT1YSukfnZABNf/JkK/irDTVuyYcj+EaYeOkhweweR29YTvnUdgS2tsv5A7ca0EuSQ2L6AUgLwEnCOGt4w1M3YTH11P/ZQyu+mKObBTebIvDhA5sUBjK+8Tui61UTfvpHQ9asxOr39HFRWUC7OIbF9AReUOHjjAAHgG8D9frd4SegauUOjDO7+PvaIEoBaQwvoBLa1E717I5E7NxDY1CJluNWwsKq2+RbwASCX7/9D6QwgB+yhlgXgjXHsBWwOqqg+3JxD9vURsq9LFyFy23qa3r2Z4JXdaGFDDRounT1IbF+AOceTf4wsGezyu9VLwR5OqdSxDrDPJ4h//SDJR44RvrGXpvu3Er5uNVpzQAnB4hgGni71wAULfgpSg0PIiqHaRK+v4u1Gx5nMknzsBMO/vofhT+0h+f0TuAlLNoFVf+qF8DJSAlwY48DcGUAS+AFwp98tXzQuGKuj0m+sxZV93lbbmq7NbLmtc6FnAMwss3U8vwCn/tfiuymL1I/OkH6un9D1q4l9YDvhm3pltaEaI5iPHyAxPQtznl96HFk51Ol36xeF6xLc2o7RHcHuTyz/9ZaLoaOFdKnB9+r0p+vzW/J1+kG05gB6NIAWMaW2P2SgBQyp9zcKxMA7RxykFNlycHNSrZj3DHASOdypLM5UVkqUJzLyNZWVQqZkDidj16ZAIrM86afPktk7QPjGXmIf2k7o+jUyRqCEoJgRJJZLMp8A7EdqA97u9xksCsfFXBcjctt64g8dXPn30zW0sIkeC6C3hzG6Ihg9UcxVUmqqd0UwOsLoLSEJ/ohnxhHQ0Qy9oDhJm45vKHAGWhBz/K6DlDJbrpiRpCyceBZnPIMzksYaSGD3S2mz3Z/AHkrhjKdxklZNjKG4aYvUE6fIPN9P5G19xD58mXj3GVpNtL9CvIDEcklK9qC86UCATwJ/4vcZLBpdI/fGGMOffILcsYnyvKahTdfLm6ubMNfFMNfHpFZ+dZOYabSE0KImWtDw+qcFd+z857HQnquSzOVa5LhSFZmycCaz2ENJ7DNT5I5Pkjs2jnViEvt8AnsyW/UZg9EVoem+S2j+wKWYfS2qGlH4VeBLMLv/DxcXgO3AD6lFkxBdI/30GUY/9yzW6alF/aoWNNBbQxhrmghsaMHc3EpgUyvmuhhGdwS9JYgWNsEottOq4Q9ckZ8grueNMJXFHkySOzFJ7uAo2QMj5I5OYA8mqragKrCljdhHLiN672b0lmAjZwNnkXG8g7AIAYBpETCB/wN82O8zWRK6RvaVISb+4hXSz57DTVmzn2NoUsq6ponAljYxu9jajrk+Jnf1pgAE9JmgaLRlqoWGKa4rzkgjKXLHJ8i+NkzmlSFyh0axB5LVVU5taERuXkvrx68heFV3Y/3NZvg74N8AVqngh4sLAMDPAV8Dgn6fzZLQNdxEjszLg6SfP491ahI356A3BzHXNhPY0kpgcxvG6ib0WEBmD2rZ8qoSFJiquGkbezBJ9sAImRdkWa91bAInkVvee5QJc10z7Z95C5Hb1jdaJpAFPgR8E0rf/WFhAtANPAa8ye8zWjLe1FreIw8X6aPn++mOCvZlkZ+hcByciQy5I+Okf9pP+tlz5A6N+V6QZa6P0fXHtxO8vK4297gYLwL34Pn/zyUAxly/PfFnL9P6iWtA5g9XAbf7fUbLIm95nffQzx+r87nzilBgJa6FTcx1McLXryF690bCN/VirmmSroNPA4nOZBYnniPy1nUy89IY/Dni7TFn8MM8AgDkBQBgDLgPiPl9VooawBNbLWRgrm0WMbhrI+Fdq9CaA7I2YbKyWYE9mCRyYy9Gb3MjCH4/8F+AQZCb+VzMKwAFWcAIcDmw0+8zU9QYeTEIG5gbW4ncso7IHX0EtrTiZmzs0TSswHbes5qRscWibGdPIwjAN4G/Btz57v4w/0KgQmxkIPD9iH24QrE48n78SJ+8+YPbaXrXFjKvDJL43jHST51Zcf8G6/RUIwR/HInVBc3RLlQAQNxEngbe4fcZKmocbyBOazIJ37yW8A1ryB4ZI/nIcZKPncA6NbnMNyiNazmNMB34NCWcf+bioiMiBSlEEvgKJWqKFYolUbBLT3BHJ23/fhc9/+tu2j61i8CWtrK/ndEVqfdK0RwSo0mYf/Avz2KHRL+PGAsqFOXFm40xN7TQ8u+upvt/3k3bf7yWwObWsry8FjQIXlZbdW1L4HkkRheMsZAnFQwGphHReCf1tnmIojrwBg311hChXauI3LYevS2EfTaxrJmD4GWdtP6/V6KFa9fr9iLYwO8BP4GF3f1haUH8T8giA4Vi5fD8Dcx1MVp/5Rq6/+ouYh+9HL0jvOiX0oIGsZ+/DL0zUs9jAC8isbkoFpQBwKyFQTqywUBdd6gUVYAXr0ZnhMiNvYR2rcJNWjKiv5Daf12j5SOXEfv5HeKrUJ84yN3/KVj43R8WNwtQyMPAbuAGv89c0SA4LmgaoV2rCO7oJLXnFJMPvk72teE57+p6R5jYA5fR8tHL0UJmPd/99yIxuWgWLYkFNQK7gb9i6SKiUCwNr7bDHkyS+uFJko+fxjo+gZPMoRk6RneE0K5VRN+1mdCV3ZKv1m3sYwG/CDwIi7v7w/IEoA3xGr/N7yugaFA8v0Q3aWGPpnETOTB1jPYQemtIpvzqv/jnScTCfxwqIAAwq1T4b4GI31dB0eDoRZ5odR/3AKSAB7hIye98LHcq7xG8iiOFwlfyrsiNVd35KBKDS2ZJAlCgNCngi0ixkEKhqBwjSOylYGl3fyjPYp5ngK/6fTUUigbjqyxizf9cLFkAChTHAf4U2U1IoVCsPIeQmHNg6Xd/KN9y3jeQdMRa5usoFIr5sZBYe6McL7YsAShSnq+xyEIEhUKxaL6PxBqwvLs/lCEDKGjAJPAHeDZECoWi7AwCv4/E2rKDH8pf0fdj4MsVvywKRWPwZcow8FdI2aojimzE/xG4tWKXRaGof55CLPnmtfleLCtR0z8EfA61NkChKBfDSEwNlfuFyyYARYq0B9mQsHHWZCkUK4OLxNKe/IFy3f1hBer5C7oCHchoZW1tL65QVBffR7b4GoXyBj+srK3XKPAZ4NQKvodCUc+cQmJodKXeoOwCUKRQexGnksxKnYBCUadkkNjZmz9Q7rs/rFAGUNTQryBbjCsUioXzf5DYAVYm+GGFPf0KxgPWAl8Hbl7J91Mo6oSngQ8CZ2Hlgh8qZ+19FvgN1HiAQnExTgH/GS/4V5oVFYAi5XoW2bE0UYkTUyhqkDgSI8/mD6zk3R8qkAGUKBj6I7wyRoVCMY0D/P+UsdBnIVTMKL1gPCAG/Dnw4Uq9t0JRA/wd8MvAFFQm+MGf7b2mgE8jbqYKhUJi4dN4wV9JKrpVSkEWAHAVonpXVPqkFYoqYh+SDb+aP1Cpuz9UOAMoOrFXgV8FTleyDQpFFXEaiQFfgh986AKUKBr6FKpyUNF4jCCf/RUp8lkovmzxXXSi30TmPSve/1EofGIK+cx/M3/Aj+AHnwSgxAk/CHwWz+NcoahjUshnfToA/Ap+8FEAik48by3+eVThkKJ+ySCf8bJYepcDXwWg6AJYwB8ipodZv9ulUJSZLPLZ/kM8+3y/gx+qQACKyCLOwn+AEgFF/ZAP/qq7uVV0HcB8FK0RCCELI37T+1mhqFUylAj+arj7QxUJAMwSgSDwHxBHFLX9uKIWSSF9/j+kCoMfqkwAYJYImMAngN9FaggUilphChnt/1MKtsyrpuCHKhSAPAVCoAO7kXGBLr/bpVAsgGGkC/sgVTLaPxdVKwAwKxv4OaRccr3f7VIo5uE0ssLP90U+C6GqBQBmicBtiEe6KiBSVCP7gE9SUOlazcEP1TcNOIuiC/gk4pG+Z0kvplCsHHuQz+aT+QPVHvxQAwIAsy7ka8BHgK+inIUU/uMgn8UHkM8mUBvBDzXQBSikqDsQA/4T0t9q9rttioYkjoxL/Q8KitlqJfihxgQAZomAgdgn/1egz++2KRqKU8BvAw8B9vTBGgp+qEEBgFkiAPBm4AvALX63TdEQPI3Y3D9XeLDWgh9qVADyFAlBL7JqcDdq+bBiZcggc/ufB87lD9Zi4OepaQGAkjUEH0G81VWXQFFOTiF79X2FgpL1Wg5+qAMBgJJdguuQ5cNvr5dzVPiGi2zR/VkKNuqE2g9+qLPgKBKCDqSO4JOoJcSKpTEM/AnwZxRs0V0PgZ+nrgQASmYDtwO/A7zV77YpaoofAZ+jaNFZPQU/1KEAQEkR6EZ2Xfk40ON3+xRVzQDwZWT3qqHCB+ot+KFOBSBPCSG4CanSugcpNVYo8ljAY0jV6TOFD9Rj4OepawHIU2IF4YeAXwe2+902RVVwEPgisjFnTa7oWyoNIQBQMhvYgnQJHkANEjYqw8DfIoN8RwsfaITghwYSgDxFQqADNyLZwL0o67FGIQU8gtz1f0JBUVmjBH6ehhMAKJkNRJBxgU8iy4nV+EB9YiHLeL+E9Pcv2Iim0YIfGlQA8pQQgjbgPuCXkMVEht9tVJQFG1nE85fAt4HxwgcbMfDzNLQA5CkhBF3A+4BfAHahhKBWsYGfAX8NPIz0+adp5MDPowSggDnWD7wbKTC6HrEqV1Q/WeB5pHDnOzTAfP5SUQJQghJC0A7cjRQa3YoyIKlW4sBTwN8APwDGCh9UgT8bJQDzUEIIosBbkHUE9yAlyAr/OYcM6n0NeBZIFj6oAn9ulAAsgBJCYCCLiO4D7geuRHUPKk0GceH9FjKwd5ACZx5Qgb8QlAAsghJCADJgeAsyaHgbsM7vdtY5Z5ACnW8hU3rDxU9Qgb9wlAAskTmygkuAO4F3ItOIaoVheRhGpvG+B/wQeAN1ty8LSgCWyRxZQQTYAdwB3AVcg8woKBbOEPASMpj3OJLip4qfpAJ/eSgBKCPziME24GbEm+BNSDch4Hd7q4wckt6/iKT4PwYOo4J+RVECsALMIQQgQb8O2ImUJt+AiEMXNbJJSxlxkNT+MPBTpAT3JeAsIgazUIFffpQAVIB5BCEGbACuBq5FhGELYlpSb87GGWAQqbp7GenTvwqcpKAEtxAV8CuPEoAKM48YADQBq4GtwOXIJqjbkKyhE1mHUO1/MxeZhx9BUvrDyHTd68AR4DyQmOuXVdBXlmr/MNU9FxEEDVl12IWIwCYkQ9jo/X8VskqxGQgjVYwr3ZVwkKq6NLLybgyx0ToDnEDu8Me9/w97z3HnejEV8P6iBKDKuIgg5NGRwcVWJDPoQTKH/Fc3Ihpt3nOakOwhjCxYygtF/u/vMhPYWSS4k8idegKpnhtGRubPF3wNInf6CWSw7qKbtaqAry7+L9nsfvHo6DSPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTAxLTEwVDEzOjE2OjMwKzAwOjAwdYv/9QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wMS0xMFQxMzoxNjozMCswMDowMATWR0kAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDEtMTBUMTM6MTg6MTgrMDA6MDA8wB8/AAAAAElFTkSuQmCC";

// config.json
var config_default = {
  title: "Spotify Top Artist",
  description: "Notarize your favorite artist on Spotify",
  steps: [
    {
      title: "Visit Spotify webplayer",
      cta: "Go",
      action: "start"
    },
    {
      title: "Collect credentials",
      description: "Login to your account if you haven't already",
      cta: "Go",
      action: "two"
    },
    {
      title: "Notarize",
      cta: "Notarize",
      action: "three",
      prover: true
    }
  ],
  hostFunctions: [
    "redirect",
    "notarize"
  ],
  cookies: [],
  headers: [
    "api.spotify.com"
  ],
  requests: [
    {
      url: "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=1",
      method: "GET"
    }
  ]
};

// src/index.ts
var import_hf = __toESM(require_hf());
function config() {
  (0, import_hf.outputJSON)({
    ...config_default,
    icon: icon_default
  });
}
function isValidHost(urlString) {
  const url = new URL(urlString);
  return url.hostname === "open.spotify.com";
}
function start() {
  if (!isValidHost(Config.get("tabUrl"))) {
    (0, import_hf.redirect)("https://open.spotify.com");
    (0, import_hf.outputJSON)(false);
    return;
  }
  (0, import_hf.outputJSON)(true);
}
function two() {
  const headers = (0, import_hf.getHeadersByHost)("api.spotify.com");
  if (!headers["authorization"]) {
    (0, import_hf.outputJSON)(false);
    return;
  }
  (0, import_hf.outputJSON)({
    url: "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=1",
    method: "GET",
    headers: {
      "x-twitter-client-language": "en",
      "x-csrf-token": headers["x-csrf-token"],
      Host: "api.x.com",
      authorization: headers.authorization,
      Connection: "close"
    },
    secretHeaders: [
      `authorization: ${headers.authorization}`
    ]
  });
}
function three() {
  const params = JSON.parse(Host.inputString());
  if (!params) {
    (0, import_hf.outputJSON)(false);
  } else {
    const id = (0, import_hf.notarize)({
      ...params
    });
    (0, import_hf.outputJSON)(id);
  }
}
//# sourceMappingURL=index.js.map
