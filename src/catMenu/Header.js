import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.headerText}>Catsat</Text>
      <Text style={styles.subHeaderText}>
        Look after cute cats for stranges for free
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: '#143154',
    fontSize: 32,
    lineHeight: 41,
    fontFamily: 'Avenir Next',
    letterSpacing: -0.03,
    fontWeight: '700',
    marginBottom: 7,
  },
  subHeaderText: {
    fontFamily: 'Avenir Next',
    fontSize: 20,
    lineHeight: 24,
    color: '#143154',
    width: '55%',
    textAlign: 'center',
  },
});
