import React, {Component} from 'react';
import {Text, View, Image,StyleSheet,Dimensions} from 'react-native';
import Card from './card'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class DataThree extends Component {
  render() {
    return (
        <View>
            <Card />
            <View style={styles.listDataNgang}>
                <Card style={styles.cai1}/>
                <Card style={styles.cai2}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#20232a',
    borderRadius: 10,
    marginRight: 2/100 * windowWidth,
    marginLeft: 2/100 * windowWidth,
  },
  listDataNgang:{
      flexDirection: 'row',
      marginBottom: 3/100 * windowHeight,
      marginTop: 3/100 * windowHeight,
  },
  cai1:{
  }

});

export default DataThree;
