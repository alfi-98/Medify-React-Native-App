import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, Button, Text, View, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Icon } from 'react-native-elements'

const Task = (props) => {
    const [isTaken, setIsTaken] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
       
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
        hours + ':' + min + ':' + sec
        );
      }, []);

    return (

            <View style={styles.item}>
                <View style={styles.topLine}>
                <View style={styles.itemLeft}>
                    
                <Text style={styles.capsule}>💊</Text>
                    
                <Text style={styles.itemText}> {props.text} is {isTaken ? <Text style={styles.underLineText}>Taken</Text>: <Text style={styles.underLineText}>Not Taken</Text>}</Text>
                </View>
                <CheckBox
                    disabled={isTaken}
                    onValueChange={(isTaken) => setIsTaken(true)}
                    onFillColor= 'rgb(221, 170, 148)'
                    tintColor='rgb(221, 170, 148)'
                    onCheckColor='white'
                    onTintColor='white'
                />
                </View>
                <View style={styles.completed}>
                        {
                            isTaken ? <View style={styles.timeContainer}>
                                <Image style={ styles.timeIcon} source={require('./image/time.png')} />
                            <Text style={styles.timeText}>Completed at {currentDate}</Text>
                        </View> : <View></View>
                        }
                </View>
            </View> 

        
    );
};

const styles = StyleSheet.create({
  
    topLine:{
        flexDirection: 'row',   
        justifyContent: 'space-between'
    },
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'column',   
        marginBottom: 20,
    },
    itemLeft:{
       flexDirection: 'row',
       alignItems: 'center',
       flexWrap: 'wrap',
    },
    capsule:{
        fontSize: 30,
        marginRight: 10
    },
    timeContainer: {
        backgroundColor: 'rgb(245, 242, 239)',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        flexDirection: 'row', 
        padding: 20  
    },
    timeText: {
        color: 'rgb(195, 158, 136)',
        fontSize: 20,
        fontWeight: 'bold'
    },
    timeIcon: {
        width: 30,
        height: 30,
        marginRight: 5
    },
   
    underLineText: {
       // textDecorationLine: 'underline',
        color: 'rgb(195, 158, 136)',

    }
});

export default Task;

