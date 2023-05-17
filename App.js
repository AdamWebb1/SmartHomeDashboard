import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import windowIcon from './assets/img/window.png'
import Window from './Window';
import ImagesExample from './image_example';

export default function App() {
  
  {/* 
      _____________________________
      |       My Dashboard        |
      |                           |
      |  Window   Door   Motion   |
      |   win1    front   yardF   |
      |   win2    back    yardB   |
      |   win3    side   living   |
      |   win4          mstrBdrm  |
      |   win5                    |
      |                           |
      |                           |
      |                           |
      |                           |
      |                           |
      |                           |
      |                           |
      |                           |
      |                           |
      |___________________________| 
      
      */}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Dashboard</Text>
      <View style={styles.list}>
        <Text>
          {/* <Text style={styles.subtitle}>Windows</Text> */}
          <Image
            source = {{uri:"https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png"}}
          />
          <Image 
            source = {{uri:'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png'}}
          />

          <ImagesExample/>
          
        </Text>
        
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
  },
  
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  title: {
    paddingTop: "10%",
    fontSize: 30
  },

  windowIcon: {
    
  }
  
});
