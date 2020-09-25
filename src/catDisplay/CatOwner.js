import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BodyText} from "../globalStyles";

export default function CatOwner({owner}) {
  const contactMapping = [
    {name: 'Phone', value: 'phone'},
    {name: 'Email', value: 'email'},
    {name: 'Location', value: 'address'},
  ];

  const ContactInfoRow = ({contactInfo}) => {
    return (
      <View style={styles.rowStyle}>
        <View style={styles.cellStyle}>
          <BodyText style={{fontWeight: '500'}}>
            {contactInfo.name}
          </BodyText>
        </View>
        <View style={[styles.cellStyle, {flex: 2}]}>
          <BodyText isColour='#7B9ABF'>
            {owner[contactInfo.value]}
          </BodyText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.ownerContact}>
      <BodyText isSize={18} isBold style={{marginBottom: 8}}>Owned by {owner.name}</BodyText>
      {contactMapping.map((contactInfo) => (
        <ContactInfoRow key={contactInfo.name} contactInfo={contactInfo} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ownerContact: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 17,
  },
  rowStyle: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingVertical: 8,
  },
  cellStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
