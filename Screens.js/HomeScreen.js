import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import db from '../config';


export default class HomeScreen extends React.Component {


 nextScreen =()=>{
    this.props.navigation.navigate('SummaryScreen');
  }

getAttendance = async () => {  
var class_ref =await db.ref('/').on('value',data=>{
  var all_students=[]
    var class_a = data.val().class_A;
    for(var i in class_a){
      all_students.push(class_a[i]);
        }
      all_students.sort(function(a,b){
        return a.roll_no - b.roll_no;
 });
      this.setState({all_students: all_students});
});
}

 updateAttendence(roll_no, status){

  var id='';
  if(roll_no <=9){
    id='0'+roll_no;
    }else {
      id=roll_no;
    }

var today=new Date();
var dd=today.getDate();
var mm=today.getMonth()+1;

var yyyy=today.getFullYear();
if (dd<10){
  dd ='0'+dd;


}
if(mm<10){
  mm ='0'+mm;

}
today=dd+'-'+mm+'-'+yyyy;
var ref_path = id;
var class_ref = db.ref(ref_path);
class_ref.update({
  [today]:status,
});
}
 

  componentDidMount = () => {
    this.getAttendance();
  };


render() {
    return (
      <View>
     
      <TouchableOpacity
        style={[styles.button,{backgroundColor:"red"}]}
        onPress={()=>this.nextScreen("red")}>
        <Text
          style={styles.buttonText}>
        Present
        </Text>
      </TouchableOpacity>

 <TouchableOpacity
        style={[styles.button,{backgroundColor:"green"}]}
        onPress={()=>this.nextScreen("greeen")}>
        <Text
          style={styles.buttonText}>
        Absent
        </Text>
      </TouchableOpacity>

 <TouchableOpacity
        style={[styles.button,{backgroundColor:"blue"}]}
        onPress={()=>this.nextScreen("blue")}>
        <Text
          style={styles.buttonText}>
      SUMBIT
        </Text>
      </TouchableOpacity>

 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 35,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});




















