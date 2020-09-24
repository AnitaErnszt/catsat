import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {likeCat} from '../state/actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as fullHeart} from '@fortawesome/free-solid-svg-icons';

export default function CatCard({cat, navigation}) {
  const dispatch = useDispatch();

  const LikeButton = () => {
    return (
      <TouchableOpacity
        style={[
          styles.likeButton,
          {backgroundColor: `${cat.liked ? '#F46D5C' : 'white'}`},
        ]}
        onPress={() => dispatch(likeCat(cat.id))}>
        <FontAwesomeIcon
          icon={cat.liked ? fullHeart : emptyHeart}
          color={cat.liked ? 'white' : '#F46D5C'}
          size={18}
        />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {cat: cat})}
      style={[styles.cardStyle, {backgroundColor: cat.background_color}]}>
      <Image
        style={styles.image}
        source={{
          uri: cat.image_url,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.textBox}>
          <Text style={styles.catName}>{cat.name}</Text>
          <Text style={styles.catOwner}>Owned by</Text>
          <Text style={styles.catOwner}>{cat.owner.name}</Text>
        </View>
        <LikeButton />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: '44%',
    margin: 10,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textBox: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  catName: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    color: '#143154',
    marginBottom: 5,
  },
  catOwner: {
    fontFamily: 'Avenir Next',
    fontSize: 12,
    lineHeight: 14,
  },
  likeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 36,
    width: 36,
    marginHorizontal: 16,
    marginVertical: 20,
  },
});
