import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import AddTodo from './components/AddTodo';

export default function App() {

  const[edit1,setEdit1]=useState(false)
  const [todo,setTodo]= useState([
    {
      title:'first task',
      id:1, 
      status:true,

    },
    {
      title:'second task',
      id:2,
      status:true,

    },
    {
      title:'third task',
      id:3,
      status:true,

    },


  ]);





  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Form  todo={todo} setTodo={setTodo}/>
      <AddTodo edit1={edit1} setEdit1={setEdit1} todo={todo} setTodo={setTodo}/>





      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingLeft:20,
    paddingRight:20,
  }
});
