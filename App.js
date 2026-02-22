import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Good Morning</Text>
      <View style={styles.box1}>
        <Text style={styles.boxText}>Zen</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.boxText}>Spark</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.boxText}>Discovery</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box1: {
    width: 200, height: 100, backgroundColor: '#ffcfd2',
  },
  box2: {
    width: 200, height: 100, backgroundColor: '#fcf5c7',
  },
  box3: {
    width: 200, height: 100, backgroundColor: '#D9E9CF',
  },
});
