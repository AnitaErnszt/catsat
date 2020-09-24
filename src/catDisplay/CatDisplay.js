import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import CatOwner from './CatOwner';
import CatInfo from './CatInfo';

export default function CatCard({cat}) {
  return (
    <ScrollView style={{backgroundColor: cat.background_color}}>
      <Image
        style={styles.image}
        source={{
          uri: cat.image_url,
        }}
      />
      <View style={styles.content}>
        <CatInfo cat={cat} />
        <CatOwner owner={cat.owner} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingBottom: 56,
  },
  image: {
    width: '100%',
    height: 370,
  },
});
