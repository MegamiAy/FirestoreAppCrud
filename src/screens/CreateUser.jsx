import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";




export default function CreateUser() {
    return(
        <View>
            <Text>Criar Usuario</Text>
            <View>
                <TextInput
                    label={"Nome"}
                    mode={"outlined"}
                />
            </View>
        </View>
    )
}