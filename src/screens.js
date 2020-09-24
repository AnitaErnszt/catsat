import React from 'react';
import {View} from 'react-native';
import Main from './catMenu/Main';
import CatDisplay from './catDisplay/CatDisplay';

export function HomeScreen({navigation}) {
  return <Main navigation={navigation} />;
}

export function DetailsScreen({navigation, route}) {
  return (
    <View>
      <CatDisplay cat={route.params.cat} />
    </View>
  );
}
