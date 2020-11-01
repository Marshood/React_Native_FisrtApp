import React from 'react';
import { StyleSheet, View, Text ,Image} from 'react-native';
import { globalStyles,images } from '../styles/global';
import Card from '../shared/card';
 export default function ReviewDetails({ navigation }) {
   const ratingKey=navigation.getParam('rating');
   console.log("ratingKey",ratingKey)
   
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>Title:{"\n"}{ navigation.getParam('title') }</Text>
      <Text>Info:{"\n"}{ navigation.getParam('body') }</Text>
      {/* <Text>Rating:{"\n"}{ navigation.getParam('rating') }</Text> */}
      <View style={styles.rating}>
      <Text> Rating:</Text> 
      <Image source={images.ratings[ratingKey]}/>
      </View>
       </Card>
    </View>
  );
}
const styles=StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#B7B7B7',
    resizeMode: 'cover',
    
  },
  
});