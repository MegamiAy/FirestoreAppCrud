import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUser from "./screens/CreateUser";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
