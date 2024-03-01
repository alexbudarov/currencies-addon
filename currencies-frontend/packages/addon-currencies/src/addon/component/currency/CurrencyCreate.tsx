import { gql } from "@amplicode-addon/gql";
import { ResultOf } from "@graphql-typed-document-node/core";
import { useCallback } from "react";
import {
    Create,
    CreateProps, required,
    SimpleForm,
    TextInput,
    useCreate,
    useNotify,
    useRedirect,
} from "react-admin";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {BigDecimalNumberInput} from "currencies-sample/src/core/components/number/BigDecimalNumberInput";
import {checkServerValidationErrors} from "../../../core/error/checkServerValidationError";

const UPDATE_CURRENCY = gql(`mutation Update_Currency($input: CurrencyInput!) {
    updateCurrency(input: $input) {
      id
      name
      isoCode
      conversionRate
    }
  }`);

export const CurrencyCreate = (props: CreateProps) => {
    const redirect = useRedirect();
    const notify = useNotify();
    const [create] = useCreate();

    const save: SubmitHandler<FieldValues> = useCallback(
        async (data: FieldValues) => {
            try {
                const params = { data, meta: { mutation: UPDATE_CURRENCY } };
                const options = { returnPromise: true };

                await create("Currency", params, options);

                notify("ra.notification.created", { messageArgs: { smart_count: 1 } });
                redirect("list", "Currency");
            } catch (response: any) {
                console.log("create failed with error", response);
                return checkServerValidationErrors(response, notify);
            }
        },
        [create, notify, redirect]
    );

    return (
        <Create<ItemType> redirect="list" {...props}>
            <SimpleForm onSubmit={save}>
                <TextInput source="name" validate={required()}/>
                <TextInput source="isoCode" validate={required()} />
                <BigDecimalNumberInput source="conversionRate" />
            </SimpleForm>
        </Create>
    );
};

const CURRENCY_TYPE = gql(`query Get_Currency($id: ID!) {
    currency(id: $id) {
      id
      name
      isoCode
      conversionRate
    }
  }`);

/**
 * Type of data object received when executing the query
 */
type QueryResultType = ResultOf<typeof CURRENCY_TYPE>;
/**
 * Type of the item loaded by executing the query
 */
type ItemType = { id: string } & Exclude<QueryResultType["currency"], undefined>;
