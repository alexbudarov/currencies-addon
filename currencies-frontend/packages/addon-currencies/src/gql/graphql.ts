/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInteger: any;
  Date: any;
  DateTime: any;
  LocalDateTime: any;
  LocalTime: any;
  Long: any;
  Time: any;
  Timestamp: any;
  Url: any;
  Void: any;
};

export type Currency = {
  __typename?: "Currency";
  conversionRate?: Maybe<Scalars["BigDecimal"]>;
  id?: Maybe<Scalars["ID"]>;
  isoCode: Scalars["String"];
  name: Scalars["String"];
};

export type CurrencyInput = {
  conversionRate?: InputMaybe<Scalars["BigDecimal"]>;
  id?: InputMaybe<Scalars["ID"]>;
  isoCode: Scalars["String"];
  name: Scalars["String"];
};

export type CurrencyResultPage = {
  __typename?: "CurrencyResultPage";
  content?: Maybe<Array<Maybe<Currency>>>;
  totalElements: Scalars["Long"];
};

export type FileUploadResponse = {
  __typename?: "FileUploadResponse";
  fileId: Scalars["String"];
  uploadUrl: Scalars["Url"];
};

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Void"]>;
  deleteCurrency?: Maybe<Scalars["Void"]>;
  updateCurrency: Currency;
};

export type MutationDeleteCurrencyArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateCurrencyArgs = {
  input: CurrencyInput;
};

export type OffsetPageInput = {
  number: Scalars["Int"];
  size: Scalars["Int"];
};

/** Query root */
export type Query = {
  __typename?: "Query";
  checkAuthenticated?: Maybe<Scalars["Void"]>;
  currency: Currency;
  currencyList: CurrencyResultPage;
  userInfo?: Maybe<UserInfo>;
  userPermissions?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Query root */
export type QueryCurrencyArgs = {
  id: Scalars["ID"];
};

/** Query root */
export type QueryCurrencyListArgs = {
  page?: InputMaybe<OffsetPageInput>;
};

export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

/** Contains information about user */
export type UserInfo = {
  __typename?: "UserInfo";
  avatar?: Maybe<Scalars["String"]>;
  fullName?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type Update_CurrencyMutationVariables = Exact<{
  input: CurrencyInput;
}>;

export type Update_CurrencyMutation = {
  __typename?: "Mutation";
  updateCurrency: {
    __typename?: "Currency";
    id?: string | null;
    name: string;
    isoCode: string;
    conversionRate?: any | null;
  };
};

export type Get_CurrencyQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type Get_CurrencyQuery = {
  __typename?: "Query";
  currency: {
    __typename?: "Currency";
    id?: string | null;
    name: string;
    isoCode: string;
    conversionRate?: any | null;
  };
};

export type CurrencyListQueryVariables = Exact<{
  page?: InputMaybe<OffsetPageInput>;
}>;

export type CurrencyListQuery = {
  __typename?: "Query";
  currencyList: {
    __typename?: "CurrencyResultPage";
    totalElements: any;
    content?: Array<{
      __typename?: "Currency";
      id?: string | null;
      name: string;
      isoCode: string;
      conversionRate?: any | null;
    } | null> | null;
  };
};

export type DeleteCurrencyMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteCurrencyMutation = {
  __typename?: "Mutation";
  deleteCurrency?: any | null;
};

export const Update_CurrencyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Update_Currency" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CurrencyInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateCurrency" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isoCode" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "conversionRate" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Update_CurrencyMutation,
  Update_CurrencyMutationVariables
>;
export const Get_CurrencyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Get_Currency" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currency" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isoCode" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "conversionRate" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_CurrencyQuery, Get_CurrencyQueryVariables>;
export const CurrencyListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CurrencyList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OffsetPageInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currencyList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "content" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isoCode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "conversionRate" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalElements" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CurrencyListQuery, CurrencyListQueryVariables>;
export const DeleteCurrencyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteCurrency" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteCurrency" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteCurrencyMutation,
  DeleteCurrencyMutationVariables
>;
