import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Item from './Item';
import estilosGlobal from '../../estilos';

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao: 'Não dê banho no seu gato! Mas se precisar nós damos',
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.9,
    descricao: 'Uma dose da vacina V4',
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.99,
    descricao: 'Uma dose da vacina Antirrábica',
  },
];

function Servicos() {
  return (
    <SafeAreaView style={estilosGlobal.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={estilosGlobal.preencher}
      >
        <FlatList
          data={servicos}
          renderItem={({ item }) => {
            return <Item {...item} />;
          }}
          keyExtractor={({ id }) => String(id)}
          removeClippedSubviews={false}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Servicos;
