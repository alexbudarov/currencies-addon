import russianMessages from "@haulmont/ra-language-russian";
import { TranslationMessages } from "ra-core";
import { mergeMessages } from "./mergeMessages";
import { ru as currenciesMessages } from "@sample/addon-currencies";

const messages: TranslationMessages = {
  ...russianMessages,
  resources: {},
};

export const ru = mergeMessages(
  messages,
  [currenciesMessages] // place addon messages here
);
