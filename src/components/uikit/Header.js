/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {w} from '../../../constants';

const Header = ({title, onPress, leftIcon, leftColor, detail}) => {
  const {viewStyle, textStyles, leftButtonStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={leftIcon}
          style={[leftButtonStyle, {paddingLeft: detail ? 10 : 20}]}
          color={leftColor}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[textStyles, {paddingLeft: leftIcon ? 10 : 0}]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    ...ifIphoneX(
      {
        height: 116,
      },
      {
        height: 90,
      },
    ),
    //justifyContent: 'center',
    backgroundColor: '#30d0fe',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyles: {
    color: '#fff',
    fontSize: 28,
    width: w - 40,
    paddingRight: 10,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX(
      {
        paddingTop: 75,
      },
      {
        paddingTop: 90,
      },
    ),
  },
  leftButtonStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75,
      },
      {
        paddingTop: 90,
      },
    ),
    fontSize: 35,
  },
});

export default Header;
