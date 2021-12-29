import { StyleSheet } from 'react-native';
import Servicos from './src/screens/Servicos';

export default function App() {
  return <Servicos />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
