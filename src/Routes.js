import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Servicos from './screens/Servicos';
import Carrinho from './screens/Carrinho';
import { cores } from './estilos';

const Tab = createBottomTabNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: cores.roxo,
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor: cores.roxo,
          tabBarInactiveBackgroundColor: cores.laranja,
          tabBarIconStyle: { display: 'none' },
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            flex: 1,
            width: '100%',
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: cores.laranja,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen name="Serviços" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;
