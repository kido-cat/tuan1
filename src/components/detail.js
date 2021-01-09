import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Detail(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productDetail}>
          <View style={styles.lanDetail}>
            <Image
              source={require('../assets/phuYen.png')}
              style={styles.DetailImg}
            />
          </View>
          <View style={styles.productDetailContent}>
            <Text style={styles.productDetailInfo}>
              Phú Yên là mảnh đất đầy nắng và gió nên bạn hãy đến đó chơi đi
              !!!!!!
            </Text>
          </View>
        </ScrollView>
        <View style={styles.bottomOption}>
          <TouchableOpacity style={styles.callPeople} onPress={() => navigation.navigate('Đăng nhập')}>
            <Text>Liên hệ ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productDetail: {
    marginTop: 50,
  },
  lanDetail: {
    alignItems: 'center',
  },
  DetailImg: {
    resizeMode: 'cover',
    width: '50%',
  },
  productDetailContent: {
    marginVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  productDetailInfo: {
    marginVertical: 10,
    fontSize: 15,
  },
  bottomOption: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  callPeople: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4511e',
  },
});
