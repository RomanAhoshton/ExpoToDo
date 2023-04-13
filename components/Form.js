import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Button,TextInput,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { v4  } from 'uuid';


export default function Form ({todo,setTodo}){
  
 
   

    const [value,setValue]=useState('');

    
    function saveTodo( ){
      if (value){ 
        setTodo([...todo,{
            title:value,
            status:true,
            id:v4(),
        }])
      }

      setValue("")
      

           
        
    }

    
    return( 
      <View >
        
         <View>
          <Button onPress={()=>saveTodo()} title="Add Task" color="#138eb0" accessibilityLabel="Learn more about this purple button"/>
          <TextInput   color='#138eb0' style={styles.input} value={value} onChangeText={setValue}  />
         </View>

      </View>
      



      
    //  <View>
    //     <Button onPress={()=>saveTodo()} title="Add Task" color="#138eb0" accessibilityLabel="Learn more about this purple button"/>
    //     <TextInput   color='#138eb0' style={styles.input} value={value} onChangeText={setValue}  />
    //    </View>

    )





}

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#138eb0'

    }

   


   
 
  
});
