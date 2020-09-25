import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {likeCat} from '../state/actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as fullHeart} from '@fortawesome/free-solid-svg-icons';
import { BodyText } from '../globalStyles';

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
    <View style={{width: '50%', padding: 10}}>
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
          <BodyText isBold style={{marginBottom: 5}}>{cat.name}</BodyText>
          <BodyText isSize={12}>Owned by</BodyText>
          <BodyText isSize={12}>{cat.owner.name}</BodyText>
        </View>
        <LikeButton />
      </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: '100%',
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
