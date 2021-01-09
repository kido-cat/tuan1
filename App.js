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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Main from './src/components/main';
import Login from './src/components/login';
import Detail from './src/components/detail';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const iconSize = 7/100 * windowWidth;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Trang chủ' component={Main} />
          <Stack.Screen name='Đăng nhập' component={Login} />
          <Stack.Screen name='Chi tiết' component={Detail} />
      </Stack.Navigator>  
         {/*
         <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'Trang chủ') {
                iconName = 'home';
              }
              if (route.name === 'Chi tiết') {
                iconName = 'binoculars';
              }
               else if (route.name === 'Đăng nhập') {
                iconName = 'people-arrows';
              }
              return (
                <FontAwesome5 name={iconName} size={iconSize} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Trang chủ" component={Main} />
          <Tab.Screen name="Đăng nhập" component={Login} />
          <Tab.Screen name="Chi tiết" component={Detail} />
        </Tab.Navigator>
        */}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
