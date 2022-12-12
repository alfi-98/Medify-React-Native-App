import React, { useState }  from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";const Medicines = (props) => {
    const [isSelected, setSelection] = useState(false);
    return (
    
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <BouncyCheckbox    
                text={props.text}      
                onPress={(isChecked: boolean) => {}}
            />
            </View>
            <View style={styles.checkboxContainer}>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20, 
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    squre: {
        width: 24,
        height: 24,
        backgroundColor: 'rgb(211, 170, 148)',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
    },
   
})

export default Medicines;
