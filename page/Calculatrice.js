import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';

//page de l'exo calculatrice
export const Calculatrice = () => {
  const [allCalcul, setAllCalcul] = useState('0');
  const [thisNumber, setThisNumber] = useState('0');
  const [result, setResult] = useState(0);
  const [visibleResult, setVisibleResult] = useState(false);
  const [oldOperator, setOldOperator] = useState('+');
  const [modifiable, setModifiable] = useState(true);

  /**
   * Au clic d'un chiffre
   * @param {string} el chiffre en question
   */
  const handlePressNumber = el => {
    if (modifiable) {
      setThisNumber(thisNumber === '0' ? el : thisNumber + el);
      setAllCalcul(allCalcul === '0' ? el : allCalcul + el);
    } else {
      setResult(0);
      setVisibleResult(false);
      setModifiable(true);
      setAllCalcul(el);
      setThisNumber(el);
    }
  };

  /**
   * Ajout des opeartor de calcul dans l'algo
   * @param {string} operator operateur pressé
   */
  const handlePressOperator = operator => {
    if (modifiable) {
      calculResult(oldOperator, parseFloat(thisNumber));
      setOldOperator(operator);
      setAllCalcul(allCalcul + operator);
      setThisNumber('');
    } else {
      let lastResult = result;
      setVisibleResult(false);
      setModifiable(true);
      setOldOperator(operator);
      setResult(0);
      setAllCalcul(lastResult + operator);
      setResult(lastResult);
    }
  };

  /**
   * Affichage du resultat
   */
  const handlePressResult = () => {
    calculResult(oldOperator, parseFloat(thisNumber));
    setVisibleResult(true);
    setThisNumber('0');
    setModifiable(false);
  };

  /**
   * Reset de toute les variables à l'état initial au bouton clear
   */
  const handlePressClear = () => {
    setVisibleResult(false);
    setResult(0);
    setOldOperator('+');
    setAllCalcul('0');
    setThisNumber('0');
    setModifiable(true);
  };

  /**
   * calcul pour le resultat final
   * @param {string} operator operator de calcul
   * @param {number} num nombre à ajouter au calcul complet
   */
  const calculResult = (operator, num) => {
    if (operator === '+') {
      setResult(result + num);
    }
    if (operator === '-') {
      setResult(result - num);
    }
    if (operator === '/') {
      setResult(result / num);
    }
    if (operator === 'x') {
      setResult(result * num);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.allCalcul}>{allCalcul}</Text>
        <Text style={styles.result}>{visibleResult ? result : ''}</Text>
        <Text style={styles.input}>{thisNumber}</Text>
      </View>
      <View style={styles.containerNumber}>
        <View style={styles.rowNumber}>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('7')}>
            <Text style={styles.text}>7</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('8')}>
            <Text style={styles.text}>8</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('9')}>
            <Text style={styles.text}>9</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressOperator('x')}>
            <Text style={styles.textSymbole}>x</Text>
          </Pressable>
        </View>
        <View style={styles.rowNumber}>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('4')}>
            <Text style={styles.text}>4</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('5')}>
            <Text style={styles.text}>5</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('6')}>
            <Text style={styles.text}>6</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressOperator('-')}>
            <Text style={styles.textSymbole}>-</Text>
          </Pressable>
        </View>
        <View style={styles.rowNumber}>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('1')}>
            <Text style={styles.text}>1</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('2')}>
            <Text style={styles.text}>2</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('3')}>
            <Text style={styles.text}>3</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressOperator('+')}>
            <Text style={styles.textSymbole}>+</Text>
          </Pressable>
        </View>
        <View style={styles.rowNumber}>
          <Pressable style={styles.pressableClear} onPress={handlePressClear}>
            <Text style={styles.textClear}>C</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressNumber('0')}>
            <Text style={styles.text}>0</Text>
          </Pressable>
          <Pressable style={styles.pressableTotal} onPress={handlePressResult}>
            <Text style={styles.text}>=</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => handlePressOperator('/')}>
            <Text style={styles.textSymbole}>/</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },
  containerInput: {
    flex: 1,
    margin: 20,
    padding: 10,
    backgroundColor: '#1F1F1F',
    height: 160,
    borderRadius: 30,
    fontSize: 40,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  containerNumber: {
    flex: 3,
  },
  rowNumber: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: '#E9E9EB',
  },
  textSymbole: {
    fontSize: 40,
    color: '#457318',
  },
  textClear: {
    fontSize: 40,
    color: '#E9E9EB',
  },
  pressable: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#1F1F1F',
  },
  pressableClear: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#ED0B0F',
  },
  pressableTotal: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#457318',
  },
  input: {
    fontSize: 40,
    color: '#E9E9EB',
  },
  allCalcul: {
    fontSize: 20,
    color: '#8f8f8f',
  },
  result: {
    fontSize: 60,
    color: '#e6761c',
  },
});

export default Calculatrice;
