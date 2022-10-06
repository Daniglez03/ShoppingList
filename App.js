import { StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductInput />
      <View style={styles.productList}>
        <Text>Cuerpo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  productList: {
    flex: 4,
  }
});
