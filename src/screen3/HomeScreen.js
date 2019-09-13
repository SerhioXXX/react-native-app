/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {Header, ImageCard, Layout} from '../components/uikit';
import {SPIDER_DETAILS} from '../routes';

const url = 'http://api.tvmaze.com/search/shows?q=spider-man';

class HomeScreen extends React.Component {
  state = {
    title: 'SPIDERMAN',
    data: [],
  };
  componentDidMount = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.setState({data});
    } catch (error) {
      throw error;
    }
  };

  render() {
    const {title, data} = this.state;
    const {navigation} = this.props;
    console.log('HomeScreen this.props', this.props);

    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                onPress={() => navigation.navigate(SPIDER_DETAILS, item.show)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
