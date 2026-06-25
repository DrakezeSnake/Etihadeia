import { getProductDocumentGroups } from "./data/productDocuments.js";

/** Primary site navigation: [label, href] pairs (used by inner pages). */
/** @type {[string, string][]} */
export const siteNavItems = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Services", "/services/"],
  ["Products", "/products/"],
  ["Industries", "/industries/"],
  ["Solutions", "/solutions/"],
  ["Partners", "/partners/"],
];

export const solutionDocumentMenuGroups = getProductDocumentGroups();
