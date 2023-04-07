import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {CheckBox, Icon,} from 'react-native-elements';
// import {FontAwesomeIcon} from '@react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import {Header,material} from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import {Icon} from "react-native-elements"

const DATA = [
  {id: '1', name: 'Sushi', number: 13, image: require('../imgs/p1.png')},
  {id: '2', name: 'Pizza', number: 50, image: require('../imgs/p2.png')},
  {id: '3', name: 'Mixed Veg', number: 3, image: require('../imgs/p3.png')},
  {id: '4', name: 'Chinese', number: 18, image: require('../imgs/p4.png')},
  {id: '5', name: 'Chinese', number: 18, image: require('../imgs/p4.png')},
  {id: '6', name: 'Chinese', number: 18, image: require('../imgs/p4.png')},
  {id: '7', name: 'Chinese', number: 18, image: require('../imgs/p4.png')},
  {id: '8', name: 'Chinese', number: 18, image: require('../imgs/p4.png')},
  {id: '9', name: 'Mixed Veg', number: 3, image: require('../imgs/p3.png')},
  {id: '10', name: 'Mixed Veg', number: 3, image: require('../imgs/p3.png')},
  {id: '11', name: 'Mixed Veg', number: 3, image: require('../imgs/p3.png')},
  {id: '12', name: 'Mixed Veg', number: 3, image: require('../imgs/p3.png')},

];

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item}) => (
    // <View>
      <View style={styler.boxx}>
        <TouchableOpacity
          style={{flex: 1, width: '100%'}}
          onPress={() => this.props.navigation.navigate('details')}>
          <Image style={styler.food} source={item.image}></Image>
          <Text style={styler.label}>{item.name}</Text>
          <Text style={styler.label1}>{item.number} Dishes</Text>
        </TouchableOpacity>
      </View>
    // </View>
  );

  renderLeftComponent =()=>{
    return(
      <View style={{ width:Dimensions.get('window').width/1.4,marginLeft:6,}}>
            <Text style={{fontSize: RFValue(20,590), 
              fontFamily:"Alkatra-Regular",
              marginTop:-5,
              color: 'black'}}>
              We have
            </Text>
            <Text style={{
               fontSize:RFValue(26,590),             
               fontFamily:"Poppins-Bold", color: 'black',
               marginTop:-20,
                }}>
              Greate menu
            </Text>
      </View>
    )
  }

  renderRightComponent =()=>{
    return(
      <View style={styler.imgCon}>
            <Image
              style={styler.img1}
              source={require('../imgs/dp.png')}></Image>
          </View>
    )
  }

  render() {
    return (
      <View style={styler.outermost}>
       
          <Header
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#fff', '#fff'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}

            leftComponent={this.renderLeftComponent}
            rightComponent={this.renderRightComponent}
          />

         {/* <ScrollView> */}
          {/* <View style={styler.top1}>
          <View style={styler.h1}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
              {' '}
              We have{' '}
            </Text>
            <Text style={{fontSize: 30, fontWeight: '900', color: 'black'}}>
              {' '}
              Greate menu
            </Text>
          </View>
          <View style={styler.imgCon}>
            <Image
              style={styler.img1}
              source={require('../imgs/dp.png')}></Image>
          </View>
        </View> */}
         <ScrollView>
          <View style={styler.top2}>
            <View style={styler.search}>
              <TextInput
                placeholder="   search your fav food"
                style={styler.searchbox}>
                {/* <Image style={styler.img0} source={require('./imgs/apple.png')}></Image> */}
              </TextInput>
            </View>
            <View style={styler.filter}>
             {/* <Icon name="menu-outline" type="ionicon" size={45} style={{borderWidth:2,borderColor:'#000',borderRadius:15}} /> */}
             <Icon name="tune" type="materialIcon" size={35} />
            </View>
          </View>

          <View style={styler.top3}>
            <Text style={{fontSize: RFValue( 15, 580), fontWeight: '600', color: 'black'}}>
              Main Dishes
            </Text>
            <Text style={{fontSize: 20, fontWeight: '400', color: 'black',paddingHorizontal:10}}>             
              Desserts
            </Text>
            <Text style={{fontSize: 20, fontWeight: '400', color: 'black'}}>              
              Drinks
            </Text>
          </View>
          
<View style={{
  alignItems:'center',
  }}>
          <FlatList style={{paddingVertical:'2%'}}
            data={DATA}
            numColumns={2}
            renderItem={this.renderItem} 
            keyExtractor={item => item.id}
          />
          </View>

          {/* <View style={styler.top4}>
              <View style={styler.pop1}>
                <View style={styler.boxx}>
                  <TouchableOpacity style={{flex:1,width:'100%'}} onPress={()=>this.props.navigation.navigate('details')}>
                   <Image  style={styler.food} source={require('../imgs/p1.png')}></Image>
                   <Text style={styler.label}>Sushi</Text>
                   <Text style={styler.label}>13 Dishes</Text>
                  </TouchableOpacity>                  
                </View>
                <View style={styler.boxx}>
                  <TouchableOpacity style={{flex:1,width:'100%'}} onPress={()=>this.props.navigation.navigate('details2')}>
                   <Image style={styler.food}  source={require('../imgs/p2.png')}></Image>
                   <Text style={styler.label}>Pizza</Text>
                   <Text style={styler.label}>50 Dishes</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styler.pop1}>
                <View style={styler.boxx}>
                  <TouchableOpacity style={{flex:1,width:'100%'}} onPress={()=>this.props.navigation.navigate('details3')}>
                   <Image style={styler.food}  source={require('../imgs/p3.png')}></Image>
                   <Text style={styler.label}>Mixed Veg</Text>
                   <Text style={styler.label}>33 Dishes</Text>
                  </TouchableOpacity>
                </View>
                <View style={styler.boxx}>
                  <TouchableOpacity style={{flex:1,width:'100%'}} onPress={()=>this.props.navigation.navigate('details4')}>
                   <Image style={styler.food}  source={require('../imgs/p4.png')}></Image>
                   <Text style={styler.label}>Chinese</Text>
                   <Text style={styler.label}>18 Dishes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>  */}
        </ScrollView>
      </View>
    );
  }
}

const styler = StyleSheet.create({
  outermost: {
    flex: 1,
    // flexDirection:"row",
    backgroundColor:'#fff',
    // justifyContent:'center',
    // alignItems:'center'
  },
  top1: {
    // flex: 0.1,
    flexDirection: 'row',
    paddingLeft: 6,
    paddingTop: 10,
    // justifyContent:"space-between",
    // backgroundColor:'silver',
    // borderLeftWidth
  },
  top2: {
    // flex: 0.1,
    // height:'4%',
    marginTop:10,
    width:Dimensions.get('screen').width/1.1,
    flexDirection: 'row',
    alignSelf:'center',
    justifyContent:'space-between',
    // paddingLeft: 6,
    // backgroundColor:'silver',
  },
  top3: {
    // flex: 0.04,
    height:'3%',
    width:Dimensions.get('screen').width/1.1,
    alignSelf:'center',
    flexDirection: 'row',
    // backgroundColor:'green',
    alignItems:'center',
    // marginTop: 10,
    // marginBottom: 10,
    // paddingLeft: 6,
  },
  img1: {
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    borderRadius: 5,
    // borderColor:'black',
    marginRight: 5,
  },
  h1: {
    // backgroundColor:"gray",
    // flex: 0.5,
  },
  imgCon: {
    // backgroundColor:'yellow',
    // // flex: 0.5,
    width:Dimensions.get('window').width/5,
    alignSelf:"center",
    justifyContent: 'center',
  },
  search: {
    // flex: 0.8,
    width:'80%',
    // height:"100%",
    // backgroundColor:'red',
    justifyContent: 'center',
    // paddingLeft: 10,
  },
  filter: {
    // flex: 0.2,
    width:'15%',

    // backgroundColor:'orange',
    justifyContent: 'center',
  },
  searchbox: {
    height:45,
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    // borderColor:'black'
  },
  // img0:{
  //   height:20,
  //   width:20,
  //   alignSelf:"flex-end",
  // }
  // pop1: {
  //   flex: 0.5,
  //   flexDirection: 'row',
  //   // backgroundColor:'white',
  //   marginBottom: 20,
  //   justifyContent: 'space-between',
  // },
  boxx: {
    // flex: 0.48,
    width:Dimensions.get('screen').width/2.3,
    backgroundColor: 'rgb(237,237,237)',
    // margin:'1%',
    // marginLeft:'6.5%',
    backgroundColor:'rgb(255,199,146)',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 12,
    marginBottom:'5%',
    paddingTop:10,
    marginHorizontal:9,
    // margin:15,
    // shadowColor: 'black',
    // shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    // shadowRadius: 3,
    elevation: 10,
    shadowColor: 'black',
  },
  food: {
    // flex:0.6,
    height: 150,//230
    width: 123,//183
    backgroundColor: 'rgb(255,199,146)',
    borderRadius: 15,
    alignSelf:'center',
  },
  label1: {
    textAlign: 'center',
    color: 'black',
    fontSize: RFValue(13, 580),
    backgroundColor: 'rgb(237,237,237)',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    // borderRadius: 15,
  },
  label: {
    textAlign: 'center',
    color: 'black',
    fontSize:  RFValue(15, 580),
    backgroundColor: 'rgb(237,237,237)',
    // borderBottomRightRadius:10,
    // borderBottomLeftRadius:10,
    // borderRadius: 15,
  },
});

export default Menu;
