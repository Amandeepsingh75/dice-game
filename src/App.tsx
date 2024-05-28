/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RollingDice from './Components/rollingDice';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

const App = () => {
  const [rollDice, setRollDice] = useState(DiceOne);
  const handleRollDice = () => {
    let randomNumber = Math.round(Math.random() * 6);
    switch (randomNumber) {
      case 1:
        setRollDice(DiceOne);
        break;
      case 2:
        setRollDice(DiceTwo);
        break;
      case 3:
        setRollDice(DiceThree);
        break;
      case 4:
        setRollDice(DiceFour);
        break;
      case 5:
        setRollDice(DiceFive);
        break;
      case 6:
        setRollDice(DiceSix);
        break;

      default:
        setRollDice(DiceOne);
        break;
    }
  };
  return (
    <View style={styles.diceContainer}>
      <RollingDice imageUrl={rollDice} />
      <Pressable onPress={handleRollDice}>
        <Text style={styles.btnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  diceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 4,
    marginTop: 20,
  },
});
