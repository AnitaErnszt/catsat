import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, StatusBar, View, ScrollView} from 'react-native';
import {fetchCats} from '../state/actions';
import Header from './Header.js';
import MenuButtons from './MenuButtons.js';
import CatCard from './CatCard.js';
import Monster from "./Monster";
import { SafeAreaView } from 'react-native-safe-area-context';
import { BodyText } from '../globalStyles';

export default function Main({navigation}) {
  const [menu, setMenu] = useState('All cats');
  const cats = [];
  const s = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(s);

  useEffect(() => {
    if (!s.cats && !s.isLoading) {
      dispatch(fetchCats());
    }
  });

  for (var key in s.cats) {
    if (menu === 'All cats'){
      cats.push(s.cats[key]);
    }
    if (menu === 'Liked'){
      if (s.cats[key].liked) {
        cats.push(s.cats[key]);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar hidden='true' />
      <ScrollView>
        <Header />
        <MenuButtons menuPick={setMenu} activeMenu={menu} />
          {s.cats ? (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {cats.length > 0 ? cats.map((cat) => (
                  <CatCard
                    key={cat.id}
                    cat={cat}
                    navigation={navigation}
                  />
            )) : <Monster />}
            </View>
          ) : (
            <BodyText>Loading</BodyText>
          )}
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
