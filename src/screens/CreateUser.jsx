import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function CreateUser() {
    const [nome, setNome] = useState("");

    function cadastrarPessoa() {
        console.log(nome);

        const docRef = addDoc(
            collection(db, "pessoas"),
            {
                nomeDaPessoa: nome
            }
        )
    };

    return(
        <View 
            style={styles.container}
        >
            <Text>Criar Usuario</Text>
            <View>
                <TextInput
                    label={"Nome"}
                    placeholder="Digite seu nome"
                    value={nome}
                    mode="outlined"
                    onChangeText={setNome}
                />
                <Button
                    onPress={cadastrarPessoa}
                >Cadastrar</Button>
            </View>
        </View>
    )
}