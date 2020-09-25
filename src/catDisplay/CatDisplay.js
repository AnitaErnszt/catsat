import React from 'react';
import {StyleSheet, StatusBar, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import CatOwner from './CatOwner';
import CatInfo from './CatInfo';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CatCard({cat, navigation}) {
  const CloseButton = () => {
    return (
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate('Home')}>
        <FontAwesomeIcon
          icon={faTimes}
          size={18}
          style={styles.times}
          />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
    <ScrollView style={{backgroundColor: cat.background_color}}>
    <StatusBar hidden='true' />
      <Image
        style={styles.image}
        source={{
          uri: cat.image_url,
        }}
      />
      <CloseButton/>
      <View style={styles.content}>
        <CatInfo cat={cat} />
        <CatOwner owner={cat.owner} />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingBottom: 56,
  },
  image: {
    height: 370
  },
  times: {
    color: '#143154'
  },
  closeButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 36,
    width: 36,
    position: 'absolute',
    top: 20,
    right: 20,
  }
});
