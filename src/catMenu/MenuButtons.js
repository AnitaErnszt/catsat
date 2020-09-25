import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {BodyText} from "../globalStyles";

const AppButton = ({onPress, buttonName, activeMenu}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.button,
      {backgroundColor: `${activeMenu === buttonName ? '#143154' : '#E8EAEE'}`},
    ]}>
    <BodyText isSize={14} isBold isColour={`${activeMenu === buttonName ? 'white' : '#143154'}`}>
      {buttonName}
    </BodyText>
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
});
