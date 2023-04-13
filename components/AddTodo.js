import React,{useState} from "react";
import { StyleSheet, Text, View, ScrollView,Button,TextInput} from 'react-native';


export default function AddTodo({todo,setTodo}){
 

  const [edit,setEdit]=useState(null)
  const [value1,setValue1]=useState('');


  function editTodo (id,title){
    setEdit(id)
    setValue1(title);

  
  }





  function saveTodo1(id){
    let newTodo=[...todo].map(item=>{
      if (item.id==id) item.title=value1;
      return item
    })
    
    setTodo(newTodo)
    setEdit(null)



  }
  
  function deleteTodo(id){
    let newTodo=[...todo].filter(item=>item.id!==id)
    setTodo(newTodo)
    
   }

 
    return (
      
        <View >
        {todo.map((item) => {
          return (
            <View  style={styles.view}>

              {
                edit == item.id ?<View >
                       <TextInput   color='#138eb0' style={styles.input}  onChangeText={setValue1} value={value1}/>
                       <Button style={styles.button}  color='#138eb0' title="save"  onPress={()=>saveTodo1(item.id)}/>
                   </View>  : 
                   <View style={{display:'flex', flexDirection:"row", alignItems:'center',maxWidth:'100%',flexWrap:'wrap'}}>
                   <Text style={styles.text} >{item.title}</Text>
                   <Button style={styles.button}  color='#138eb0' title="Delete" onPress={()=>deleteTodo(item.id)}/>
                   <Button style={styles.button}  color='#138eb0' title="Edit" onPress={()=>editTodo(item.id,item.title)}/>
                   </View>
                  
              }
              

             
            </View>
            
            
          );
        })}
      </View>
        
       
          

    )


}
const styles = StyleSheet.create({
  view:{
   
    borderWidth: 2,
    borderColor: '#138eb0',
    margin:10,
    justifyContent:'space-between',
    padding:5,
   
  },


  text:{
   color:'#138eb0',
   display:'flex',
   maxWidth:'68%'
 
   

  },
  button:{
    display:'flex',
    alignItems:'flex-end',
    marginLeft:150,




  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#138eb0'

}



})