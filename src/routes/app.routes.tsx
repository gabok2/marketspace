import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
import { DetailsProducts } from "@screens/DetailsProducts";

type AppRoutesProps = {
  Home: undefined;
  detailsProducts: {
    id: string;
  };
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>();
export function AppRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="detailsProducts"
        component={DetailsProducts}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
