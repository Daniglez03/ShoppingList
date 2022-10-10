import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';

export default function App() {
  const [ products, setProducts ] = useState(['Agua mineral', 'Berenjenas', 'Chetos', 'Plátanos']);
  return (
    <View style={styles.container}>
      <ProductInput />
      <View style={styles.productList}>
        { products.map((product, index) => {
          return (
            <View key={index} style={styles.listItem}>
              <Image style={styles.productImage} source={require('./assets/botella.webp')}/>
              <Text style={styles.productName}>{product}</Text>
            </View>
          );
        }) }
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
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 15,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  productImage : {
    width: 70,
    height: 70,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
});
