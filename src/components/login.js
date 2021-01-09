import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Tuần 1</Text>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="Tài khoản" />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Mật khẩu"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 1.5/10 * windowWidth,
    color: '#fb5b5a',
    marginBottom: 1/10 * windowWidth,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 1.25/10 * windowWidth,
    marginBottom: 5/100 * windowWidth,
    justifyContent: 'center',
    padding: 6/100 * windowWidth,
  },
  inputText: {
    height:1.25/10 * windowWidth,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 3/100 * windowWidth,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 1.25/10 * windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1/10 * windowWidth,
    marginBottom: 5/100 * windowWidth,
  },
  loginText: {
    color: 'white',
  },
});
