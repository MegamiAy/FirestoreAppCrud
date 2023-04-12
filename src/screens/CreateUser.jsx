import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";




export default function CreateUser() {
    return(
        <View>
            <Text>Criar Usuario</Text>
            <View>
                <TextInput
                    label={"Nome"}
                    mode="outlined"
                />
                <Button>Cadastrar</Button>
            </View>
        </View>
    )
}