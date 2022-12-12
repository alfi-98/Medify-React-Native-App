
 import React, { useState } from "react";
 import { ScrollView, TouchableOpacity, KeyboardAvoidingView, SafeAreaView,TextInput, Button, Text, View, StyleSheet, Alert } from "react-native";
 import Task from './components/Task.js';
 const App = (props) => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }
   return (
   
     <View style={styles.container} >
      <View style ={styles.taskWrapper}>
        <View style={styles.homeView}>
          <Text style={styles.welcomeText}>Welcome, Alfi!</Text>
          <Text style={styles.welcomeTextTwo}>Keep Track of Your Medicines</Text>

          <View style={styles.nextMed}>
          
          </View>
        </View>
          <Text style={styles.sectionTitle}>Today's Medicines</Text>
          
          <View>
          <ScrollView style={styles.scrollView}>
          <View style={styles.items}>
            {
              taskItems.map((item, index) =>  {
                return <Task key={index} text={item}/>
              })
            }
          </View>
          </ScrollView>
          </View>

      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
     </View>
   
   );
 }
 
 

 const styles = StyleSheet.create({
   welcomeText: {
    color: 'rgb(139,69,19)',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    
   },
   welcomeTextTwo: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10
   },
  scrollView: {
    height: 300,
  },
  container: {
  flex:1,
  backgroundColor: 'rgb(246, 246, 246)',
  },
  homeView:{
    height: 300,
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: 'rgb(221, 170, 148)',
    alignItems: 'center',
  },
  nextMed: {
    height: 100,
    width: '90%',
    borderRadius: 15,
    marginTop: 105,
    marginBottom: 20,
    backgroundColor: 'rgb(245, 242, 239)',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
   marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'rgb(221, 170, 148)',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
    color: 'white'
  }

});
 
 export default App;
