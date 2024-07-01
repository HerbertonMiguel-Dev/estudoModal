import React, { useState } from "react"; // Importa React e o hook useState para gerenciamento de estado
import { View, Text, StyleSheet, Button, Modal } from 'react-native'; // Importa componentes de layout e estilização do React Native

import Detalhes from './src/Detalhes'; // Importa o componente Detalhes

// Componente principal da aplicação
export default function App() {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  // Função para abrir o modal
  function abrirModal() {
    setModalVisible(true); // Define a visibilidade do modal como verdadeira
  }

  // Função para fechar o modal
  function fecharModal() {
    setModalVisible(false); // Define a visibilidade do modal como falsa
  }

  return (
    <View style={styles.container}>
      {/* Botão que abre o modal quando pressionado */}
      <Button title="Acessar" onPress={abrirModal} />

      {/* Componente Modal que exibe o conteúdo quando visível */}
      <Modal animationType="slide" visible={modalVisible}>
        {/* Componente Detalhes que recebe a função fecharModal como prop */}
        <Detalhes fechar={fecharModal} />
      </Modal>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    justifyContent: 'center', // Alinha os itens ao centro verticalmente
    alignItems: 'center', // Alinha os itens ao centro horizontalmente
  },
});
