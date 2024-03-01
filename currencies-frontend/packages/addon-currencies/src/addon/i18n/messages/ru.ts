import { StringMap } from "react-admin"

export const ru: StringMap = {
    resources: {
        Currency: {
            name: "Валюта |||| Валюты",
            fields: {
                name: "Название",
                isoCode: "ISO код",
                conversionRate: "Курс конвертации",
            },
        }
    },
};