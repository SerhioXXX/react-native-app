import React, {Component, PureComponent} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, ImageCard, ImageBigCard} from '../components/uikit';

class DetailsScreen extends PureComponent {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  render() {
    console.log('DetailScreen this.props', this.props);
    const {image, name, summary} = this.props.navigation.state.params;
    const {navigation} = this.props;
    const data = {image};
    const {container, h1, h2, sub} = styles;
    return (
      <View style={container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          leftColor="#fff"
        />
        <Text> DetailsScreen </Text>
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>
              {name ? name.toLocaleUpperCase() : 'N/A in name'}
            </Text>
            <Text style={h2}>
              {summary ? summary.replace(/<[^>]+>/g, '') : 'N/A in summary'}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff',
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    padding: 15,
    color: 'grey',
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});

export default DetailsScreen;
