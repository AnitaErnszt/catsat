import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {likeCat} from '../state/actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as fullHeart} from '@fortawesome/free-solid-svg-icons';

export default function CatInfo({cat}) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(cat.liked);

  useEffect(() => {
    if (liked !== cat.liked) {
      dispatch(likeCat(cat.id));
    }
  }, [liked])

  const LikeButton = () => {
    return (
      <TouchableOpacity
        style={[
          styles.likeButton,
          {backgroundColor: `${liked ? '#F46D5C' : 'white'}`},
        ]}
        onPress={() => setLiked(!liked)}>
        <Text
          style={[
            styles.buttonText,
            {color: `${liked ? 'white' : '#F46D5C'}`},
          ]}>
          <FontAwesomeIcon
            icon={liked ? fullHeart : emptyHeart}
            color={liked ? 'white' : '#F46D5C'}
            size={18}
          />{' '}
          {liked ? 'Liked' : 'Like'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.catName}>{cat.name}</Text>
          <Text style={styles.textStyle}>{cat.age} years old</Text>
        </View>
        <LikeButton />
      </View>
      <Text style={[styles.textStyle, styles.catDescription]}>
        {cat.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  catName: {
    fontFamily: 'Avenir Next',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 24,
    color: '#143154',
    marginBottom: 5,
    paddingTop: 20,
  },
  textStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    lineHeight: 19,
  },
  catDescription: {
    marginTop: 21,
    marginBottom: 43,
    lineHeight: 24,
  },
  likeButton: {
    borderRadius: 20,
    height: 36,
    width: 112,
    marginTop: 16,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    paddingLeft: 4,
  },
});
