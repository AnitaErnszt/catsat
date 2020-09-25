import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const BodyText = ({children, ...props}) => {
    const customStyles = [styles.textStyle, 
        props.isColour && {color: props.isColour},
        props.isBold && {fontWeight: '700'},
        props.isSize && {fontSize: props.isSize},
        props.isCentered && {textAlign: 'center'},
        props.style
    ]

    return (
        <Text style={customStyles}>
            {children}
        </Text>
    )}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Avenir Next',
        fontSize: 16,
        color: '#143154',
    },
  });