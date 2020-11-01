import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input:{
    padding:10,
    margin:10,
    paddingHorizontal:1,
    borderWidth:1,
    borderRadius:10,
     textAlign:'center'

  },
  errorText:{
    color:'#AC0404',
    fontWeight:'bold',
    marginTop:6,
    marginBottom:10,
    textAlign:'center'
  }
});

export const images =
{
  ratings :{
    '1' : require('../assets/rating-1.png'),
    '2' : require('../assets/rating-2.png'),
    '3' : require('../assets/rating-3.png'),
    '4' : require('../assets/rating-4.png'),
    '5' : require('../assets/rating-5.png'),

  }

}