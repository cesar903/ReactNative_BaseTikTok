import React from "react"
import { Image, Pressable, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Estilo from "../styles/Estilo"

export default function Navegador(props) { 
    return <View style={Estilo.navegador}>
        <Pressable onPress={() => props.navigation.navigate("Home")} >
            <Image
                style={Estilo.navegadorIcone}
                source={require("../../assets/house.png")} />
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("Search")}>
            <Image
                style={Estilo.navegadorIcone}
                source={require("../../assets/magnifying-glass.png")} />
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("Likes")}>
            <Image
                style={Estilo.navegadorIcone}
                source={require("../../assets/heart.png")} />
        </Pressable>
    </View>
}
