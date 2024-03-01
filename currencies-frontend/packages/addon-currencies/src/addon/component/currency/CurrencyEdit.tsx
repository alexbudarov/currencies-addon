import { gql } from "@amplicode-addon/gql";
import { ResultOf } from "@graphql-typed-document-node/core";
import { useCallback } from "react";
import {
    Edit,
    EditProps, required,
    SimpleForm,
    TextInput,
    useNotify,
    useRedirect,
    useUpdate,
} from "react-admin";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {checkServerValidationErrors} from "../../../core/error/checkServerValidationError";
import {BigDecimalNumberInput} from "../../../core/components/number/BigDecimalNumberInput";

const CURRENCY = gql(`query Get_Currency($id: ID!) {
    currency(id: $id) {
      id
      name
      isoCode
      conversionRate
    }
  }`);

const UPDATE_CURRENCY = gql(`mutation Update_Currency($input: CurrencyInput!) {
    updateCurrency(input: $input) {
      id
      name
      isoCode
      conversionRate
    }
  }`);

type AdvancedEditProps = Omit<EditProps, "id" | "queryOptions" | "mutationOptions"> & {
    id?: string;
};

export const CurrencyEdit = (props: AdvancedEditProps) => {
    const queryOptions = {
        meta: {
            query: CURRENCY,
            resultDataPath: null,
        },
    };

    const redirect = useRedirect();
    const notify = useNotify();
    const [update] = useUpdate();

    const save: SubmitHandler<FieldValues> = useCallback(
        async (data: FieldValues) => {
            try {
                const params = { data, meta: { mutation: UPDATE_CURRENCY } };
                const options = { returnPromise: true };

                await update("Currency", params, options);

                notify("ra.notification.updated", { messageArgs: { smart_count: 1 } });
                redirect("list", "Currency");
            } catch (response: any) {
                console.log("update failed with error", response);
                return checkServerValidationErrors(response, notify);
            }
        },
        [update, notify, redirect]
    );

    return (
        <Edit<ItemType> mutationMode="pessimistic" queryOptions={queryOptions} {...props}>
            <SimpleForm onSubmit={save}>
                <TextInput source="name" validate={required()}/>
                <TextInput source="isoCode" validate={required()} />
                <BigDecimalNumberInput source="conversionRate" />
            </SimpleForm>
        </Edit>
    );
};

/**
 * Type of data object received when executing the query
 */
type QueryResultType = ResultOf<typeof CURRENCY>;
/**
 * Type of the item loaded by executing the query
 */
type ItemType = { id: string } & Exclude<QueryResultType["currency"], undefined>;
