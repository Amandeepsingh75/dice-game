/* eslint-disable prettier/prettier */
import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import RollingDice from './Components/rollingDice';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

const App = () => {
  const [rollDice, setRollDice] = useState(DiceOne);
  const [changeTurns, setChangeTurns] = useState(false)
  const [opponentScore, setOpponentScore] = useState<number[]>([])
  const [YourScore, setYourScore] = useState<number[]>([])

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
    if (!changeTurns) {
      setOpponentScore([...opponentScore, randomNumber])
    } else {
      setYourScore([...YourScore, randomNumber])
    }
    setChangeTurns(!changeTurns)
  };

  useEffect(() => {
    if (opponentScore.length == 3 && YourScore.length == 3) {
      calculateResult(opponentScore, YourScore)
    }
  }, [changeTurns])

  const calculateResult = (Oppos: number[], Yours: number[]) => {
    const opp = Oppos.reduce((acc, cur) => acc + cur)
    const your = Yours.reduce((acc, cur) => acc + cur)
    { opp > your ? Alert.alert('Winner : Team A Wins', `Team A score: ${opp} Team B score ${your}`) : Alert.alert('Winner : Team B Wins', `Team A score: ${opp} Team B score ${your}`) }
    setOpponentScore([])
    setYourScore([])
    setChangeTurns(false)
  }
  return (
    <View style={styles.diceContainer}>
      <View>
        <TouchableOpacity onPress={handleRollDice} disabled={changeTurns && true}>
          <Text style={[styles.btnText, { marginBottom: 20 }, changeTurns ? { color: 'grey', opacity: 0.4 } : { color: 'green' }]}>Roll the Dice</Text>
        </TouchableOpacity>
        {!changeTurns && <Text style={styles.yourTurnText} >Team A Your Turn</Text>}
      </View>
      <Text>{opponentScore.slice(0, 5).join(',')}</Text>
      <RollingDice imageUrl={rollDice} />
      <Text>{YourScore.join(',')}</Text>

      <View>
        {changeTurns && <Text style={styles.yourTurnText}> Team B Your Turn</Text>}
        <TouchableOpacity onPress={handleRollDice} disabled={!changeTurns && true}>
          <Text style={[styles.btnText, { marginTop: 20 }, !changeTurns ? { backgroundColor: 'grey', opacity: 0.4 } : { color: 'green' }]}>Roll the Dice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  diceContainer: {
    marginVertical: 50,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  btnText: {
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 4,
  },
  yourTurnText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: 'green',
  }
});
