import { DevSupport } from "@amplicode/ide-toolbox";
import {AdminContext, AdminUI, Loading, Resource} from "react-admin";
import { useAuthProvider } from "../authProvider/useAuthProvider";
import { dataProvider } from "../dataProvider/graphqlDataProvider";
import { ComponentPreviews, useInitial } from "../dev";
import { i18nProvider } from "../i18nProvider";
import { AdminLayout } from "./AdminLayout";
import { activeAppTheme } from "./themes/appThemeConfig";
import { getStoredThemeMode } from "./themes/getStoredThemeMode";
import {
  CurrencyCreate,
  CurrencyEdit,
  CurrencyList,
  getCurrencyRecordRepresentation
} from "@sample/addon-currencies";

const themeMode = getStoredThemeMode();

export const App = () => {
  const { authProvider, loading } = useAuthProvider();

  if (loading) {
    return (
      <Loading
        loadingPrimary="Loading"
        loadingSecondary="The page is loading, just a moment please"
      />
    );
  }

  return (
    <AdminContext
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      lightTheme={activeAppTheme.light}
      darkTheme={activeAppTheme.dark}
      defaultTheme={themeMode}
    >
      <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
        <AdminUI layout={AdminLayout} requireAuth={true}>
          <Resource
            name="Currency"
            options={{label: "Currency"}}
            list={CurrencyList}
            create={CurrencyCreate}
            edit={CurrencyEdit}
            recordRepresentation={getCurrencyRecordRepresentation}
          />
        </AdminUI>
      </DevSupport>
    </AdminContext>
  );
};
