import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {likeCat} from '../state/actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as fullHeart} from '@fortawesome/free-solid-svg-icons';
import {BodyText} from "../globalStyles";

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
        <BodyText
          isBold
          isColour={`${liked ? 'white' : '#F46D5C'}`}>
          <FontAwesomeIcon
            icon={liked ? fullHeart : emptyHeart}
            color={liked ? 'white' : '#F46D5C'}
            size={18}
          />{' '}
          {liked ? 'Liked' : 'Like'}
        </BodyText>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <BodyText isBold isSize={28} style={{marginBottom: 5}}>{cat.name}</BodyText>
          <BodyText>{cat.age} years old</BodyText>
        </View>
        <LikeButton />
      </View>
      <BodyText style={styles.catDescription}>
        {cat.description}
      </BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
