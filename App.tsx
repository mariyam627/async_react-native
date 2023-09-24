import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputValue2, setTextInputValue2] = useState('');
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');


  const saveValue = async () => {
    AsyncStorage.setItem("data",textInputValue)
    AsyncStorage.setItem("data2",textInputValue2)
  };

  const getValue = async () => {
    try {
      const storedValue = await AsyncStorage.getItem('data');
      const storedValue1 = await AsyncStorage.getItem('data2');
      if (storedValue !== null) {
        setValue(storedValue);
 
        setValue1(storedValue1)
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
    if(value===textInputValue){
      Alert.alert("Data Match")
    }
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>AsyncStorage in React-Native</Text>
        <TextInput
          placeholder="Enter Some Text"
          value={textInputValue}
          onChangeText={setTextInputValue}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity onPress={saveValue} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Save Data</Text>
        </TouchableOpacity>
          <TextInput
          placeholder="Retrive Data"
          value={textInputValue2}
          onChangeText={setTextInputValue2}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        
        <TouchableOpacity onPress={getValue} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Retrive Data</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{value}</Text>
        <Text style={styles.textStyle}>{value1}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 22,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'brown',
    backgroundColor: 'grey',
    padding: 5,
    marginTop: 10,
    minWidth: 250,
    height: 60,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
  },
});

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
