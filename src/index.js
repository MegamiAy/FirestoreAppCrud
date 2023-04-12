



const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CreateUser" component={CreateUser} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}