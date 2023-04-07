import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import {Icon} from 'react-native-vector-icons';

class Details3 extends Component {
  state={
    count:0,
    imgState:true,
  };
  onPress1=()=>{
    this.setState({count:this.state.count+1});
  };
  onPress2=()=>{
    if(this.state.count>=1)
   {
    this.setState({count:this.state.count-1});
   }
  };
  render() {
    return (
      <View style={styler.outermost}>
        <View style={styler.box1}>

          <View style={styler.header}>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('menu')}>
              <Image
              style={styler.logo}
              source={require('../imgs/arw.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity>
               <Image
              style={styler.logo}
              source={require('../imgs/crt.png')}>                
              </Image>
            </TouchableOpacity>
           
          </View>
          <View style={styler.mainImg}>
            <Image
              style={styler.food}
              source={require('../imgs/veg.png')}></Image>
          </View>
        </View>
        <View style={styler.box2}>
          <View style={styler.mini}>

            <TouchableOpacity onPress={this.onPress2}
              style={{backgroundColor: 'red', flex: 0.17, borderRadius: 20}}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 25}}>
                -
              </Text>
            </TouchableOpacity>

            <View style={{flex: 0.3, backgroundColor: 'red', borderRadius: 20}}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 25}}>
                {' '}
                {this.state.count}{' '}
              </Text>
            </View>

            <TouchableOpacity onPress={this.onPress1}
              style={{backgroundColor: 'red', flex: 0.17, borderRadius: 20}}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 25}}>
                +
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styler.b1}>
             <View style={{flex: 0.6}}>
              <Text style={{
                fontSize: 20,
                fontWeight: '800',
                color: 'black',
              }}>Mixed Veg {'(full)'}</Text>
              <Text style={{
                fontSize: 20,
                fontWeight: '800',
                color: 'black',
              }}>₹300</Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                flex: 0.4,
                textAlign: 'right',
                fontWeight: '800',
                color: 'black',
              }}>
              *****(5K)
            </Text>
          </View>

          <View style={styler.b2}>
            <View style={styler.t1}>
              <Image
                style={styler.minilogo}
                source={require('../imgs/fire.png')}></Image>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: '800'}}> 100 kcal</Text>
              </View>
            </View>
            <View style={styler.t1}>
              <Image
                style={styler.minilogo}
                source={require('../imgs/rolls.png')}></Image>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: '800'}}> 3 cups </Text>
              </View>
            </View>
            <View style={styler.t1}>
              <Image
                style={styler.minilogo}
                source={require('../imgs/clock.png')}></Image>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: '800'}}>15-20 Min</Text>
              </View>
            </View>
          </View>

          <View style={styler.b3}>
            <Text style={{fontSize: 18, fontWeight: '800', color: 'black'}}>
              {'   '}
              Ingredients
            </Text>
            <View style={styler.ingredients}>
              <Image
                style={styler.ing}
                source={require('../imgs/ing4.png')}></Image>
              <Image
                style={styler.ing}
                source={require('../imgs/ing5.png')}></Image>
              <Image
                style={styler.ing}
                source={require('../imgs/ing3.png')}></Image>
              <Image
                style={styler.ing}
                source={require('../imgs/ing4.png')}></Image>
              <Image
                style={styler.ing}
                source={require('../imgs/ing5.png')}></Image>
              <Image
                style={styler.ing}
                source={require('../imgs/add.png')}></Image>
            </View>
          </View>

          <View style={styler.b4}>
            <Text style={styler.input}>Details{'                                                           >'}</Text>
            <Text style={styler.input}>Free Delivery and returns
            {'                          >'}
            </Text>
            <Text style={styler.input}>See reviews
            {'                                                  >'}
            </Text>
          </View>

          <View style={styler.b5}>
          { this.state.imgState?(<TouchableOpacity style={{flex: 0.15}} onPress={()=>this.setState({imgState:false})} >
               <Image
                style={{height: 52,width: 55,marginLeft:6}}
                source={require('../imgs/like.png')}>
               </Image>
            </TouchableOpacity>):(<TouchableOpacity style={{flex: 0.15}} onPress={()=>this.setState({imgState:true})} >
               <Image
                style={{height: 52,width: 60,marginLeft:6}}
                source={require('../imgs/like2.png')}>
               </Image>
            </TouchableOpacity>) }
           
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                flex: 0.8,
                justifyContent: 'center',
                borderRadius: 15,
              }} onPress={()=>Alert.alert('item added successfully')}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styler = StyleSheet.create({
  outermost: {
    flex: 1,
    backgroundColor: 'rgb(240,199,135)',
  },
  box1: {
    flex: 0.4,
    backgroundColor: 'rgb(240,199,135)',
    paddingBottom: 30,
  },
  box2: {
    flex: 0.6,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // position:'relative',
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  mainImg: {
    flex: 0.8,
    justifyContent: 'center',
    // padding:
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    // padding:10,
  },
  food: {
    height: 276,
    width: 400,
  },
  mini: {
    // flex:0.1,
    marginLeft: 55,
    // marginRight:80,
    // borderRadius:20,
    // backgroundColor:'red',
    // marginBottom:
    justifyContent: 'space-evenly',
    position: 'absolute',
    flexDirection: 'row',

    // bottom:475,
    top: -20,
    height: 40,
    width: 300,
  },
  b1: {
    marginTop: 50,
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 12,
    // marginBottom:5
  },
  b2: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    // backgroundColor:'red'
  },
  b3: {
    flex: 0.2,
    flexDirection: 'column',
    marginTop: 20,
    // backgroundColor:'green',
  },
  b4: {
    flex: 0.3,
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 10,
    marginTop: 25,
    // backgroundColor:'red'
  },
  b5: {
    flex: 0.15,
    // backgroundColor:'gold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 10,
    marginTop: 20,
  },
  t1: {
    flex: 0.3,
    flexDirection: 'row',
  },
  minilogo: {
    height: 40,
    width: 40,
  },
  ingredients: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  ing: {
    height: 50,
    width: 50,
  },
  input: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    borderBottomWidth: 2,
    height: 40,
    // textAlign:''
    // justifyContent:'center'
  },
});

export default Details3;
