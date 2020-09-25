import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BodyText} from "../globalStyles";

export default function Header() {
  return (
    <View style={styles.monsterScreen}>
      <BodyText isSize={20} isColour='#B3BDD2' isCentered style={{width: 201}}>
      You haven’t liked any cats, you monster.
      </BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  monsterScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 400
  },
});