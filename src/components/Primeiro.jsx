import { StyleSheet,Text } from 'react-native';

export default function Primeiro() {
    return (
        <Text style={styles.text}>Olá Mundo</Text>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: '#f01',
    },
})