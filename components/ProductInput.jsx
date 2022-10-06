import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
const ProductInput = () => {
    const [productName, setProductName] = useState('');

    const changeTextHandler = (value) => {
        console.log(value);
        setProductName(value)
    }
    return (
        <View style={ styles.productInput }>
            <TextInput style={ styles.productName } 
            placeholder='Introduzca un producto' 
            keyboardType='default' 
            onChangeText={ changeTextHandler }
            value={ productName }/>
            <Button style={ styles.addButton } title='Añadir' />
        </View>
    )
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#eef4ed",
        width: '80%',
        height: 80,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center'
    },
    productName: {
        flex: 4,
    },
    addButton: {
        flex: 1,
    },
})
export default ProductInput