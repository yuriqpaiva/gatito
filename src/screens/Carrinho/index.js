import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import TelaPadrao from '../../components/TelaPadrao';
import StatusCarrinho from '../../components/StatusCarrinho';

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao: 'Não dê banho no seu gato! Mas se precisar nós damos',
    quantidade: 1,
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.9,
    descricao: 'Uma dose da vacina V4',
    quantidade: 2,
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.99,
    descricao: 'Uma dose da vacina Antirrábica',
    quantidade: 2,
  },
];

function Carrinho() {
  // Utilizando reduce para percorrer cada objeto do array,
  // somando o preço pela quantidade, retornando o total
  const total = servicos.reduce((soma, { preco, quantidade }) => {
    return soma + preco * quantidade;
  }, 0);

  return (
    <TelaPadrao>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => {
          return <Item {...item} />;
        }}
        keyExtractor={({ id }) => String(id)}
        removeClippedSubviews={false}
      />
    </TelaPadrao>
  );
}

export default Carrinho;
