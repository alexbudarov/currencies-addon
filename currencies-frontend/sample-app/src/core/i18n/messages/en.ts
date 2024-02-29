import { TranslationMessages } from "ra-core";
import englishMessages from "ra-language-english";
import { mergeMessages } from "./mergeMessages";
import { en as currenciesMessages } from "@sample/addon-currencies";

const messages: TranslationMessages = {
  ...englishMessages,
  resources: {},
  amplicode: {
    not_set: "Not set",
  },
};

export const en = mergeMessages(
  messages,
  [currenciesMessages] // place addon messages here
);
