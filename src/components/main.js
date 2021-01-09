import React, {Component} from 'react';
import {
  SectionList,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import Card from './card';
import DataThree from './dataThree';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const renderItem = () => <Card />;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataOne: [
        {
          key: 1,
          die: false,
        },
        {
          key: 2,
          die: false,
        },
        {
          key: 3,
          die: false,
        },
        {
          key: 4,
          die: false,
        },
        {
          key: 5,
          die: false,
        },
        {
          key: 6,
          die: false,
        },
      ],
      listDataTwo:[1,2,3],
      listDataThree:[1,2,3],
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.conatiner}>
          <View style={styles.listDataOne}>
            <Text style={styles.titleListDataOne}>List data one</Text>
            <FlatList
              style = {styles.FlatListOne}
              horizontal
              data={this.state.listDataOne}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.listDataTwo}>
            <Text style={styles.titleListDataTwo}>List data two</Text>
            {this.state.listDataTwo.map((item) => <Card key={item} title={item} /> )}
          </View>
          <View style={styles.listDataThree}>
            <Text style={styles.titleListDataTwo}>List data three</Text>
            {this.state.listDataThree.map((item) => <DataThree  key={item}/> )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {},
  listDataOne: {
    marginLeft: 5/100 * windowWidth,
  },
  listDataTwo: {
    marginRight: 2/100 * windowWidth,
    marginLeft: 2/100 * windowWidth,
  },
  listDataThree: {
    
    
  },
  titleListDataOne:{
    fontWeight: 'bold',
    fontSize: 7.5/100 * windowWidth,
    marginTop: 3/100 * windowHeight,
  },
  titleListDataTwo:{
    fontWeight: 'bold',
    fontSize: 7.5/100 * windowWidth,
    marginTop: 3/100 * windowHeight,
    marginLeft: 5/100 * windowWidth,
    marginBottom: 1.7/100 * windowHeight,
  },
  showListDataNamNgang:{
    flexDirection: 'row'
  }
});

export default Main;
