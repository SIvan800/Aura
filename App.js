import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';    
import { StyleSheet, Text, View, Pressable } from 'react-native';

const AuraPress = ({ title, color, onPress }) => (//generic template for pressable box
  <Pressable 
    style={[styles.boxBase, { backgroundColor: color }]} 
    onPress={() => onPress(title)}
  >
    <Text style={styles.boxText}>{title}</Text>
  </Pressable>
);

export default function App() {
  const [mood, setMood] = useState('Good Morning');
  const handlePress = (selectedMood) => {
    setMood(`Your Aura is ${selectedMood}...`);
    console.log(`Log: User selected ${selectedMood}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.globalText}>{mood}</Text>
    <AuraPress title="Zen" color="#B2C2B1" onPress={handlePress} />
    <AuraPress title="Spark" color="#EFB395" onPress={handlePress} />
    <AuraPress title="Discovery" color="#D9B65B" onPress={handlePress} />
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
    textAlign: 'center',  
  },
  boxText: {
    fontSize: 36,        
    fontWeight: 'bold',  
    color: '#FFFDF5',      
  },
  boxBase: {
    width: 200, 
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around', 
    borderRadius: 10, 
  },
});
