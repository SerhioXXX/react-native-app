import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {h, w} from '../../../constants';

const ImageBigCard = ({data}) => {
  const {cover, container, sub} = styles;
  const {image} = data;
  const img = `https${image.medium.slice(4)}`;

  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: img}} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  sub: {
    shadowColor: '#000',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowRadius: 8,
    shadowOffset: {width: 5, height: 8},
    shadowOpacity: 0.9,
  },
  cover: {
    width: w / 1.67,
    height: w * 0.9,
    borderRadius: 10,
  },
});

export default ImageBigCard;
