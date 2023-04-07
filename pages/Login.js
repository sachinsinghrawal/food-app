import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

class Login extends Component {
  state = {check: false};

  // const [checked, setChecked] = React.useState(true);
  // const toggleCheckbox = () => setChecked(!checked);

  render() {
    return (
      <View style={styler.outermost}>
        <ScrollView >
          <View style={styler.first}>
            <Text style={styler.toptxt}>Welcome Back!</Text>
            <Text style={styler.toptxt2}>Sign in to continue</Text>
          </View>

          <View style={styler.second}>
            <Text style={styler.logtxt}>Email</Text>
            <TextInput placeholder="email #" style={styler.box}></TextInput>
            <Text style={styler.logtxt}>Password</Text>
            <TextInput placeholder="password #" style={styler.box}></TextInput>
          </View>


          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              // backgroundColor:'red',
              alignItems: 'center',
              width: Dimensions.get('window').width /1.08,
              // backgroundColor: 'silver',
            }}>
            <CheckBox
              checked={this.state.check}
              onPress={() => {
                this.setState({check: !this.state.check});
              }}
            />
            <Text style={styler.rm}>
              Remember Me <Text style={styler.pass}>Forget password?</Text>
            </Text>
          </View>

          <View style={styler.fourth}>
            <TouchableOpacity
              style={styler.button}
              onPress={() => {
                this.props.navigation.navigate('toHome');
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: RFValue(18, 580),
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styler.fifth}>
            <Text style={{textAlign: 'center', fontSize: RFValue(18, 580)}}>
              or sign in with
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              width: Dimensions.get('window').width / 1.4,
              // backgroundColor: 'red',
              marginVertical:'5%'
            }}>
            <View
              style={{
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                height: 75,
                width: 75,
                borderRadius: 10,
              }}>
              <Icon name="logo-google" type="ionicon" color="black" size={35} />
            </View>

            <View
              style={{
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                height: 75,
                width: 75,
                borderRadius: 10,
              }}>
              <Icon
                name="logo-facebook"
                type="ionicon"
                color="black"
                size={35}
              />
            </View>

            <View
              style={{
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                height: 75,
                width: 75,
                borderRadius: 10,
              }}>
              <Icon name="logo-apple" type="ionicon" color="black" size={45} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styler = StyleSheet.create({
  outermost: {
    flex: 1,
    // width:'90%',
    // alignSelf:'center',
    backgroundColor:"#fff",
    // backgroundColor: 'lightgreen',
  },
  first: {
    // flex: 0.25,
    marginVertical: '10%',
    width: Dimensions.get('window').width / 1.2,
    // backgroundColor: 'red',
    // justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  toptxt: {
    fontSize: RFValue(30, 580),
    color: 'black',
    // paddingLeft: 15,
    fontWeight: 'bold',
  },
  toptxt2: {
    fontSize: RFValue(18, 580),
    //paddingLeft: 15,
  },
  second: {
    width: Dimensions.get('window').width / 1.2,
    alignSelf: 'center',
    // backgroundColor: 'rgb(129, 133, 137)',
    marginTop: '5%',
  },
  logtxt: {
    fontSize: RFValue(18, 580),
    color: 'black',
    fontWeight: '600',
    // marginTop: 10,
  },
  box: {
    borderBottomWidth: 1,
    width: Dimensions.get('window').width / 1.2,
  },
  pass: {
    fontWeight: 'bold',
    fontSize: RFValue(15, 595),
  },
  rm: {
    fontSize: RFValue(15, 595),
    marginLeft:-18
  },
  third: {
    // flex: 0.06,
    marginTop: 40,
    marginLeft: 25,
    flexDirection: 'row',
  },
  fourth: {
    height: '10%',
    marginTop: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    width: Dimensions.get('window').width / 1.2,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'rgb(0, 150, 255)',
    alignSelf: 'center',
    padding: 10,
    width: '100%',
    // justifyContent: 'center',
    borderRadius: 8,
  },
  fifth: {
    // flex: 0.08,
    // height:'30%',
    marginTop: '10%',
    width: Dimensions.get('window').width / 1.1,
    alignSelf: 'center',
    // borderWidth:2,
    // justifyContent: 'center',
    // backgroundColor: 'orange',
  },
});

export default Login;
