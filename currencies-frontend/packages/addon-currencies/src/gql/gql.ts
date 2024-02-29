/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "mutation Update_Currency($input: CurrencyInput!) {\n    updateCurrency(input: $input) {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n  }":
    types.Update_CurrencyDocument,
  "query Get_Currency($id: ID!) {\n    currency(id: $id) {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n  }":
    types.Get_CurrencyDocument,
  "query CurrencyList(\n  $page: OffsetPageInput\n) {\n  currencyList(\n    page: $page\n  ) {\n    content {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n    totalElements\n  }\n}":
    types.CurrencyListDocument,
  "mutation DeleteCurrency($id: ID!) {\n  deleteCurrency(id: $id) \n}":
    types.DeleteCurrencyDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "mutation Update_Currency($input: CurrencyInput!) {\n    updateCurrency(input: $input) {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n  }",
): (typeof documents)["mutation Update_Currency($input: CurrencyInput!) {\n    updateCurrency(input: $input) {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "query Get_Currency($id: ID!) {\n    currency(id: $id) {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n  }",
): (typeof documents)["query Get_Currency($id: ID!) {\n    currency(id: $id) {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "query CurrencyList(\n  $page: OffsetPageInput\n) {\n  currencyList(\n    page: $page\n  ) {\n    content {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n    totalElements\n  }\n}",
): (typeof documents)["query CurrencyList(\n  $page: OffsetPageInput\n) {\n  currencyList(\n    page: $page\n  ) {\n    content {\n      id\n      name\n      isoCode\n      conversionRate\n    }\n    totalElements\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "mutation DeleteCurrency($id: ID!) {\n  deleteCurrency(id: $id) \n}",
): (typeof documents)["mutation DeleteCurrency($id: ID!) {\n  deleteCurrency(id: $id) \n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
