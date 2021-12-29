import React from 'react';
import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import Item from './Item';

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
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={servicos}
        renderItem={({ item }) => {
          return <Item {...item} />;
        }}
        keyExtractor={({ id }) => String(id)}
        removeClippedSubviews={false}
      />
    </SafeAreaView>
  );
}

export default Servicos;
