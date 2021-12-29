import React from 'react';
import { TextInput } from 'react-native';

function CampoInteiro({ valor, acao }) {
  const numeroEmTexto = String(valor);
  return (
    <TextInput
      keyboardType="number-pad"
      selectTextOnFocus
      value={numeroEmTexto}
      onChangeText={(novoValor) => {
        acao(novoValor);
      }}
    />
  );
}

export default CampoInteiro;
