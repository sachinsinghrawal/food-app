import React,{Component} from "react";
import { Text,View,Dimensions, ScrollView, FlatList,TouchableOpacity} from "react-native";
import { Header,Icon,Image } from "react-native-elements";
import {RFValue} from 'react-native-responsive-fontsize';

const DATA=[
    {id:1,title:'All'},
    {id:2,title:'Popular'},
    {id:3,title:'others'},
    {id:4,title:'Fastfood'},
    {id:5,title:'Fast Delivery'},
];


const LIST = [
    {
      id: '1',
      img: require('../imgs/res1.png'),
      color:'gold',
      title: 'Le Manoir',
      subTitle:'French cuisine',
      price: '₹250/400g',
    },
    {
      id: '2',
      img: require('../imgs/res2.png'),
      color:'green',
      title: 'Mario cheff',
      subTitle:'Italian cuisine',
      price: '₹250/400g',
    },
    {
      id: '3',
      img: require('../imgs/res3.png'),
      title: 'Ramen Delicious',
      color:'lightgreen',
      subTitle:'Japenese cuisine',
      price: '₹250/400g',
    },
    {
      id: '4',
      img: require('../imgs/res4.png'),
      color:'orange',
      title: 'Starbucks Coffee',
      subTitle:'Mixed cuisine',
      price: '₹250/400g',
    },
    {
      id: '5',
      img: require('../imgs/res5.png'),
      color:'silver',
      title: "McDonald's",
      subTitle:'French cuisine',
      price: '₹250/400g',
    },
    {
      id: '6',
      img: require('../imgs/res6.png'),
      color:'red',
      title: 'Ramen Delicious',
      subTitle:'Japenese cuisine',
      price: '₹250/400g',
    },
    {
      id: '7',
      img: require('../imgs/res3.png'),
      color:'skyblue',
      title: 'Mario cheff',
      subTitle:'Italian cuisine',
      price: '₹250/400g',
    },
    {
      id: '8',
      img: require('../imgs/res1.png'),
      color:'gold',
      title: 'Le Manoir',
      subTitle:'French cuisine',
      price: '₹250/400g',
    },
  ];

class Restaurant extends Component{


    renderList=({item})=>{
        return (
            <View style={{marginHorizontal:5,marginVertical:20,paddingVertical:5,paddingHorizontal:15,backgroundColor:'#fff',borderRadius:10,shadowColor:'black',elevation:5,height:Dimensions.get('screen').height/20,justifyContent:'center'}}>
                <Text style={{fontSize:RFValue(12,580),fontWeight:'900'}}>{item.title}</Text>
            </View>
        )
    }

    renderLeftComponent = () => {
        return (
          <View style={{width: Dimensions.get('window').width / 2}}>
            <Text
              style={{
                fontFamily: 'Alkatra-Bold',
                fontSize: RFValue(20, 580),
                color: 'black',
              }}>
              Foodster
            </Text>
          </View>
        );
      };
    
      renderRightComponent = () => {
        return (
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('window').width / 2,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Icon name="location" type="ionicon" color="red" />
            <Text
              style={{
                fontFamily: 'Alkatra-Bold',
                fontSize: RFValue(20, 580),
                color: 'black',
                marginHorizontal: 5,
              }}>
              London
            </Text>
            <Icon name="search-outline" type="ionicon" color="black" />
          </View>
        );
      };

      renderItem3 = ({item}) => {
        return (
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 15,
              flexDirection: 'row',
              width: Dimensions.get('screen').width / 1.06,
              margin: 10,
              height: Dimensions.get('window').height / 7,
              padding: 5,
              shadowColor: 'black',
              elevation: 5,alignSelf:'center'
            }}>
            <View style={{width: '70%', justifyContent: 'space-between',marginVertical:15,}}>
              <View style={{paddingLeft:10}}>
               <Text
                style={{
                  color: 'black',
                  fontSize: RFValue(13, 580),
                  paddingRight: 6,
                }}>
                {item.title}
               </Text>
               <Text>{item.subTitle}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start',alignItems:'center',paddingLeft:8}}>
                <Icon name="time-outline" type="ionicon" color="red" />
                <Text style={{color: 'black', fontSize: RFValue(12, 580),paddingRight:5}}>
                  {' '}
                  45-60 min
                </Text>
                <Icon name='star' color="orange" type="ionicon"/>
                <Text style={{
                  color: 'black',
                  fontSize: RFValue(15, 580),
                  paddingRight: 6,paddingLeft:5
                }} >5</Text>
              </View>
             </View>
            <View style={{width: '30%',padding: -5,borderColor:'white',borderWidth:2,borderRadius:15,backgroundColor:item.color}}>
              <Image
                source={item.img}
                style={{width: '100%', height: '100%', borderRadius: 10}}></Image>
            </View>
          </View>
        );
      };

    

    render(){
        return(
            <View>
               <View>
                <Header
                    leftComponent={this.renderLeftComponent}
                    rightComponent={this.renderRightComponent}
                    containerStyle={{
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    paddingHorizontal: 15,
                    shadowColor:10,
                    elevation:7
                    }}
                    // elevated='1'
                />
               </View>
               <ScrollView>
                 <View>
                   <FlatList
                   data={DATA}
                   renderItem={this.renderList}
                   keyExtractor={item => item.id}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   />
                 </View>

                 {/* inbetween Text */}

                 <View
                  style={{
                  width: Dimensions.get('screen').width / 1.1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                //   marginTop: 0,
                  height: Dimensions.get('window').height / 12,
                  alignSelf: 'center',
                  alignItems: 'center',
                  marginTop:-10
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: RFValue(20, 580),
                      color: 'black',
                    }}>
                    Restaurants
                  </Text>
                </View>
    
                <View
                  style={{
                    // flexDirection: 'row',
                    width: '30%',
                    height: '60%',
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    paddingVertical:5,
                    shadowColor:'black',
                    elevation:5,
                  }}>
                   <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',
                }} >
                    <Icon name='funnel-outline' type="ionicon" size={26}/>
                    <Text style={{
                      fontWeight: '400',
                      fontSize: RFValue(15, 580),
                      color: 'black',paddingHorizontal:5,alignSelf:'center'
                    }}>Filter</Text>                   
                   </TouchableOpacity>
                </View>
              </View>

                {/* flatlist */}
               <View>
                  <FlatList
                    style={{marginTop:0,marginBottom:130}}
                    data={LIST}
                    key={'#'}
                    keyExtractor={item => '#' + item.id}
                    numColumns={1}
                    renderItem={this.renderItem3}
                    // keyExtractor={item => item.id}
                  />
               </View>
                 
               </ScrollView>
            </View>
        );
    }
}


export default Restaurant;