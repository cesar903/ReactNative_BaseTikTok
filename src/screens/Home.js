import React from "react"
import { ScrollView, StatusBar, View, Text } from "react-native"
import Dados from "../databases/Dados"
import Conteudo from "../components/Conteudo"
import Navegador from "../components/Navegador"


export default function Home({ navigation }) {
    const DadosAleatorio = Dados.sort(function () {
        return Math.random() - 0.5
    })

    return <View>
        <StatusBar barStyle="light-content" backgroundColor="#000" />

        <Navegador navigation={ navigation }/>

        <ScrollView pagingEnabled>
            {DadosAleatorio.length > 0 &&
                DadosAleatorio.map(function (video) {
                    return <Conteudo
                        key={video.codigo}
                        codigo={video.codigo}
                        fonte={video.fonte}
                        nome={video.nome}
                        descricao={video.descricao}
                        etiqueta={video.etiqueta} />
                })
            }
        </ScrollView>
    </View>
}
