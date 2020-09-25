import React from 'react';
import {StyleSheet, View} from 'react-native';
import { BodyText } from '../globalStyles';

export default function Header() {
  return (
    <View style={{alignItems: 'center', marginTop: 10}}>
      <BodyText isBold isSize={32} style={styles.headerText}>Catsat</BodyText>
      <BodyText isCentered isSize={20} style={{width: '55%'}}>
        Look after cute cats for stranges for free
      </BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    letterSpacing: -0.03,
    marginBottom: 7,
  },
});
