import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {fetchCats} from '../state/actions';
import Header from './Header.js';
import MenuButtons from './MenuButtons.js';
import CatCard from './CatCard.js';

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
    cats.push(s.cats[key]);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <MenuButtons menuPick={setMenu} activeMenu={menu} />
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {cats ? (
            cats.map((cat) => (
                (menu === 'All cats' || cat.liked) && (
                  <CatCard
                    key={cat.id}
                    cat={cat}
                    navigation={navigation}
                    returnable={menu === 'All cats' || cat.liked}
                  />
            ))
          )) : (
            <Text>Loading</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
});
