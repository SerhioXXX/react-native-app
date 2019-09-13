import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {h, w} from '../../../constants';

const ImageCard = ({data, onPress}) => {
  const {h1, cover, container, sub} = styles;
  const {image, name} = data;
  const img = `https${image.medium.slice(4)}`;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{uri: img}} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10,
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
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
  h1: {
    paddingTop: 10,
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'AvenirNext-DemiBold',
    width: w / 2.4,
  },
});

export default ImageCard;
