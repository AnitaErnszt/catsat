import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AppButton = ({onPress, buttonName, activeMenu}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.button,
      {backgroundColor: `${activeMenu === buttonName ? '#143154' : '#E8EAEE'}`},
    ]}>
    <Text
      style={[
        styles.buttonText,
        {
          color: `${activeMenu === buttonName ? 'white' : '#143154'}`,
        },
      ]}>
      {buttonName}
    </Text>
  </TouchableOpacity>
);

const buttonNames = ['All cats', 'Liked'];

export default function MenuButtons({menuPick, activeMenu}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 25,
        justifyContent: 'center',
      }}>
      {buttonNames.map((button) => (
        <AppButton
          key={button}
          buttonName={button}
          onPress={() => menuPick(button)}
          activeMenu={activeMenu}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 44,
    paddingVertical: 10,
    paddingHorizontal: 45,
    marginRight: 17,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Avenir Next',
  },
});
