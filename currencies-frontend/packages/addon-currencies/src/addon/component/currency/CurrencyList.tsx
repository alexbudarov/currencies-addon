import {gql} from "@amplicode/gql";
import {ResultOf} from "@graphql-typed-document-node/core";
import {ListProps} from "ra-ui-materialui";
import {Datagrid, DeleteButton, EditButton, List, TextField} from "react-admin";

const CURRENCY_LIST = gql(`query CurrencyList(
  $page: OffsetPageInput
) {
  currencyList(
    page: $page
  ) {
    content {
      id
      name
      isoCode
      conversionRate
    }
    totalElements
  }
}`);

const DELETE_CURRENCY = gql(`mutation DeleteCurrency($id: ID!) {
  deleteCurrency(id: $id) 
}`);

export const CurrencyList = (props: Omit<ListProps, "children">) => {
  const queryOptions = {
    meta: {
      query: CURRENCY_LIST,
      resultDataPath: "content",
      paginationQueryParam: "page",
    },
  };

  return (
    <List<ItemType> queryOptions={queryOptions} exporter={false} {...props}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField source="name" />
        <TextField source="isoCode" />
        <TextField source="currencyRate" />

        <EditButton />
        <DeleteButton
          mutationMode="pessimistic"
          mutationOptions={{ meta: { mutation: DELETE_CURRENCY } }}
        />
      </Datagrid>
    </List>
  );
};

/**
 * Type of data object received when executing the query
 */
type QueryResultType = ResultOf<typeof CURRENCY_LIST>;
/**
 * Type of the items list
 */
type ItemListType = QueryResultType["currencyList"];
/**
 * Type of single item
 */
type ItemType = { id: string } & Exclude<
  Exclude<ItemListType, null | undefined>["content"],
  undefined
>;
