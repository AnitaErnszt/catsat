import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
          <Text style={[styles.textStyle, {fontWeight: '500'}]}>
            {contactInfo.name}
          </Text>
        </View>
        <View style={[styles.cellStyle, {flex: 2}]}>
          <Text style={[styles.textStyle, {color: '#7B9ABF'}]}>
            {owner[contactInfo.value]}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.ownerContact}>
      <Text style={styles.ownerName}>Owned by {owner.name}</Text>
      {contactMapping.map((contactInfo) => (
        <ContactInfoRow key={contactInfo.name} contactInfo={contactInfo} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    lineHeight: 19,
  },
  ownerContact: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 17,
  },
  ownerName: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#143154',
    marginBottom: 8,
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
