import React, {Component} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const iconSize = 7/100 * windowWidth;
const icon = <FontAwesome5 name={'star'} size={iconSize} color={'yellow'}/>

function Card(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Chi tiết')}>
        <Image style={styles.image} source={require('../assets/phuYen.png')} />
        <Text style={styles.textTitle}>Palazzo Phú Yên</Text>
        <Text style={styles.textContent}>Đã được đặt 20</Text>
        <Text style={styles.textContent}>{icon}Đánh giá 4.5</Text>
        <Text style={styles.textPrice}>Giá 230000vnđ</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#20232a',
    borderRadius: 10,
    marginRight: 3/100 * windowWidth,
    marginLeft: 3/100 * windowWidth,
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  textTitle: {
    marginLeft: 5/100 * windowWidth,
    fontSize: 5/100 * windowWidth,
    fontWeight: 'bold',
  },
  textContent: {
    marginLeft: 5/100 * windowWidth,
    fontSize: 4/100 * windowWidth,
  },
  textPrice: {
    marginLeft: 5/100 * windowWidth,
    fontSize: 4/100 * windowWidth,
    fontWeight: 'bold',
  },
});

export default Card;
