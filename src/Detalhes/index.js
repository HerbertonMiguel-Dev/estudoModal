import React from "react"; // Importa React
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; // Importa componentes de layout e estilização do React Native

// Componente que exibe os detalhes no modal
export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        {/* Texto de boas-vindas */}
        <Text style={styles.titulo}>Seja bem-vindo</Text>
        {/* Botão que fecha o modal quando pressionado */}
        <TouchableOpacity style={styles.buttonModal} onPress={props.fechar}>
          <Text style={styles.textoButton}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    margin: 15, // Adiciona margem
    alignItems: "center", // Alinha os itens ao centro horizontalmente
    justifyContent: 'flex-end', // Alinha os itens ao final do eixo vertical
  },
  modal: {
    backgroundColor: '#292929', // Cor de fundo do modal
    width: '100%', // Largura do modal
    height: 350, // Altura do modal
    borderRadius: 5, // Borda arredondada do modal
    alignItems: 'center', // Alinha os itens ao centro horizontalmente
  },
  titulo: {
    fontSize: 25, // Tamanho da fonte do título
    color: '#fff', // Cor do texto do título
    textAlign: 'center', // Alinha o texto ao centro
    padding: 20, // Adiciona padding
  },
  buttonModal: {
    backgroundColor: '#3f51b5', // Cor de fundo do botão
    borderRadius: 5, // Borda arredondada do botão
    paddingVertical: 10, // Padding vertical do botão
    paddingHorizontal: 20, // Padding horizontal do botão
    marginTop: 20, // Margem superior do botão
    width: '50%', // Largura do botão
  },
  textoButton: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18, // Tamanho da fonte do texto do botão
    textAlign: 'center', // Alinha o texto ao centro
  }
});
