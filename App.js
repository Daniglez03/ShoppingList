import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ListItem from './components/ListItem';
import ProductInput from './components/ProductInput';

export default function App() {
  const [products, setProducts] = useState(['Agua mineral', 'Berenjenas', 'Chetos', 'Plátanos']);
  return (
    <View style={styles.container}>
      <ProductInput />
      <View style={styles.productList}>
        {
          products.length === 0 
            ? <Text style={styles.textEmpty}>Aún no hay productos</Text> 
            : products.map((product, idx) => (<ListItem key={idx + product} productName={product} />))
        }
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightgrey'
  },
  productList: {
    flex: 4,
    width: '95%',
  },
  textEmpty: {
    textAlign: 'center',
    marginTop: '5%',
  }
});