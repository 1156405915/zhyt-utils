"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Utils: () => Utils,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var Utils = {
  /**
   * 将字符串或字符串数组转换为驼峰命名格式
   * @param input 
   * @returns 
   */
  cameCase(input) {
    if (!input) return "";
    if (Array.isArray(input)) {
      input = input.join(" ");
    }
    const words = input.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(" ");
    if (words.length === 1) return words[0];
    return words.map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
  },
  /**
   * 深拷贝
   * @param value 
   * @returns 
   */
  cloneDeep(value) {
    if (!value) {
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((item) => this.cloneDeep(item));
    }
    if (value instanceof Date) {
      return new Date(value);
    }
    if (typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => {
          return [k, this.cloneDeep(v)];
        })
      );
    }
    return value;
  },
  /**
   * 手机号脱敏
   * @param text 
   * @returns 
   */
  maskPhoneNumber(text) {
    if (!text) {
      return "";
    }
    const regex = /(\d{3})\d{4}(\d{4})/g;
    text = text.replace(regex, "$1****$2");
    return text;
  }
};
var index_default = Utils;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Utils
});
