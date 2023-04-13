import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TO DO LIST</Text>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        maxWidth:'100%',
        backgroundColor:'#138eb0',
        display: 'flex',
        alignItems:'center',
        height: 100,
        justifyContent:'center'
    

    },


    headerText:{
        color:'white',
        fontSize:30,

        


    }
 
  
});
