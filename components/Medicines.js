import React, {useState, useEffect} from 'react';
import {Pressable, Image, SafeAreaView, Button, Text, View, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Icon } from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";

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
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={300}
                    openDuration={250}
                    customStyles={{
                        container: {
                        justifyContent: "center",
                        alignItems: "flex-start",
                        borderRadius: 20,
                        }
                    }}
                    >
                        <View style={styles.bottomSheet}>
                            <Text style={styles.bottomSheet}>💊 Medicine Name</Text>
                            <Text style={styles.bottomSheetText2}>➜ Napa</Text>
                            <Text style={styles.bottomSheet}>📋 Dose</Text>
                            <Text style={styles.bottomSheetText2}>➜ 3</Text>
                            <Text style={styles.bottomSheet}>⏱ Time</Text>
                            <Text style={styles.bottomSheetText2}>➜ 10:00pm</Text>
                        </View>
                   
                </RBSheet>
                <View style={styles.topLine}>
                <View style={styles.itemLeft}>
                    
                <Text style={styles.capsule}>💊</Text>
                    
                <Text style={styles.itemText}> {props.text} is {isTaken ? <Text style={styles.underLineText}>Taken</Text>: <Text style={styles.underLineText}>Not Taken</Text>}</Text>
                </View>
                <View style={styles.itemRigth}>
                <Pressable onPress={() => this.RBSheet.open()}><Image style={ styles.dotIcon} source={require('./image/dot.png')} /></Pressable>
                <CheckBox
                    disabled={isTaken}
                    onValueChange={(isTaken) => setIsTaken(true)}
                    onFillColor= 'rgb(221, 170, 148)'
                    tintColor='rgb(221, 170, 148)'
                    onCheckColor='white'
                    onTintColor='white'
                />
                </View>
                </View>
                <View style={styles.completed}>
                        {
                            isTaken ? <View style={styles.timeContainer}>
                                <Image style={ styles.timeIcon} source={require('./image/time.png')} />
                            <Text style={styles.timeText}>Taken at {currentDate}</Text>
                        </View> : <View></View>
                        }
                </View>
            </View> 

        
    );
};

const styles = StyleSheet.create({
    dotIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    itemRigth: {
        flexDirection: 'row',   
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topLine:{
        flexDirection: 'row',   
        justifyContent: 'space-between',
        alignItems: 'center'
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

    },
    bottomSheet: {
        flexDirection:"column",
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    bottomSheetText2: {
        flexDirection:"column",
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 15,
        opacity: 0.5
    }
});

export default Task;

