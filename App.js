import { StyleSheet, View } from 'react-native';
import MaxMin from './src/components/MaxMin';

export default function App() {
  return (
    <View style={styles.container}>
      <MaxMin a={233} b={232}/>
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
