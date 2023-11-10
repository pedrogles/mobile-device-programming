import { StyleSheet, View } from 'react-native';
import Contador from './src/components/contador/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Contador inicial={0} passo={1}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
