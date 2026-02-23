import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const handlePressZen = () => {
    alert('Fetching Zen posts from Aura...');
    //function to fetch Zen posts from Aura will go here in the future
  };
  const handlePressSpark = () => {
    alert('Fetching Spark posts from Aura...');
    //function to fetch Spark posts from Aura will go here in the future
  };
  const handlePressDiscovery = () => {
    alert('Fetching Discovery posts from Aura...');
    //function to fetch Discovery posts from Aura will go here in the future
  };
  return (
    <View style={styles.container}>
      <Text style={styles.globalText}>Good Morning</Text>
    <Pressable 
      style={styles.box1} 
      onPress={handlePressZen}    
      >
    <Text style={styles.boxText}>Zen</Text>
  </Pressable>
    <Pressable 
      style={styles.box2} 
      onPress={handlePressSpark}    
      >
    <Text style={styles.boxText}>Spark</Text>
  </Pressable> 
    <Pressable 
      style={styles.box3} 
      onPress={handlePressDiscovery}    
      >
    <Text style={styles.boxText}>Discovery</Text>
  </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFDF5',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 80
  },
  globalText: {
    fontSize: 50,
    color: '#4A4A4A',
    fontWeight: 'bold',  
  },
  boxText: {
    fontSize: 36,        
    fontWeight: 'bold',  
    color: '#FFFDF5',      
  },
  box1: {
    width: 200, 
    height: 100,
    backgroundColor: '#B2C2B1', 
    //backgroundColor: '#ffcfd2',     
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box2: {
    width: 200, 
    height: 100, 
    backgroundColor: '#EFB395',     
    //backgroundColor: '#fcf5c7',     
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box3: {
    width: 200, 
    height: 100, 
    backgroundColor: '#D9B65B',     
    //backgroundColor: '#D9E9CF',     
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
