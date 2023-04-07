import {CheckBox, Icon, Header, material, Image} from 'react-native-elements';
import React,{Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const DATA = [
  {
    id: '1',
    img: require('../imgs/a.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
  {
    id: '2',
    img: require('../imgs/b.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
  {
    id: '3',
    img: require('../imgs/c.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
  {
    id: '4',
    img: require('../imgs/d.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
  {
    id: '5',
    img: require('../imgs/a.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
  {
    id: '6',
    img: require('../imgs/c.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
  {
    id: '7',
    img: require('../imgs/d.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
  {
    id: '8',
    img: require('../imgs/b.png'),
    title: 'Food item means a raw, cooked, or processed edible sub- stance',
    price: '₹250/400g',
  },
];

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {active: true};
      }
    
      renderLeftComponent = () => {
        return (
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-back-outline" type="ionicon" size={30} />
            </TouchableOpacity>
          </View>
        );
      };
    
      renderRightComponent = () => {
        return (
          <View>
            <Icon name="search" type="ionicon" size={30} />
          </View>
        );
      };
    
      renderCenterComponent = () => {
        return (
          <View>
            {/* <Icon name='search' type='ionicon'/> */}
            <Text style={{fontSize: RFValue(18, 580), fontWeight: '700'}}>
              {' '}
               Categories
            </Text>
          </View>
        );
      };
    
    
      renderItem3 = ({item}) => {
        return (
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              flexDirection: 'row',
              width: Dimensions.get('screen').width / 1.06,
              margin: 10,
              height: Dimensions.get('window').height / 7,
              padding: 5,
              shadowColor: 'black',
              elevation: 5,
            }}>
            <View style={{width: '60%', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: RFValue(13, 580),
                  paddingRight: 6,
                }}>
                {item.title}
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Icon name="time-outline" type="ionicon" color="red" />
                <Text style={{color: 'black', fontSize: RFValue(12, 580)}}>
                  {' '}
                  45-60 min
                </Text>
              </View>
            </View>
            <View style={{width: '40%', padding: -5}}>
              <Image
                source={item.img}
                style={{width: '100%', height: '100%', borderRadius: 10}}></Image>
            </View>
          </View>
        );
      };
    
      renderItem2 = ({item}) => {
        return (
        <View style={{width:Dimensions.get('screen').width /2.07,height: Dimensions.get('screen').height /3,alignItems:'center',marginBottom:20,}}>
          <View
            style={{
              backgroundColor: 'rgb(229, 228, 226)',
              marginBottom:80,
              borderRadius: 10,
              height:'100%',
              width:'90%',
              // padding: 5,
              
            }}>
            <View style={{height: '60%',borderRadius:10,backgroundColor:'white',padding:5,shadowColor: 'black',
              elevation: 5,}}>
              <Image
                source={item.img}
                style={{height: '100%', width: '100%', borderRadius: 10}}></Image>
            </View>
    
            <View style={{height: '40%', padding: 5,borderRadius:20,padding:5,backgroundColor:'white',shadowColor: 'black',
              elevation: 5,}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: RFValue(11, 580),
                  marginTop: '2%',
                }}>
                {item.title}
              </Text>
              <Text
                style={{color: 'red', fontSize: RFValue(12, 580), marginTop: '5%'}}>
                ₹250<Text style={{color: 'black'}}> / 400g</Text>
              </Text>
            </View>
          </View>
        </View>
        );
      };
    
      render() {
        return (
          <View style={{flex: 1, backgroundColor: 'rgb(229, 228, 226)'}}>
            {/* header */}
            <Header
              leftComponent={this.renderLeftComponent}
              centerComponent={this.renderCenterComponent}
              rightComponent={this.renderRightComponent}
              containerStyle={{
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 15,
              }}
              elevated="100"
            />
    
            <ScrollView>
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  height: Dimensions.get('window').height / 12,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: '900',
                      fontSize: RFValue(20, 580),
                      color: 'black',
                    }}>
                    Popular
                  </Text>
                </View>
    
                <View
                  style={{
                    flexDirection: 'row',
                    width: '35%',
                    height: '60%',
                    backgroundColor: 'white',
                    borderRadius: 30,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({active: true});
                    }}
                    style={{
                      backgroundColor: this.state.active ? 'orange' : 'white',
                      width: '50%',
                      justifyContent: 'center',
                      borderTopLeftRadius: 30,
                      borderBottomLeftRadius: 30,
                      paddingLeft: 10,
                    }}>
                    <Icon name="grid-outline" type="ionicon" size={30} />
                  </TouchableOpacity>
    
                  <TouchableOpacity
                    style={{
                      backgroundColor: !this.state.active ? 'orange' : 'white',
                      width: '50%',
                      justifyContent: 'center',
                      borderBottomRightRadius: 30,
                      borderTopRightRadius: 30,
                      paddingRight: 10,
                    }}
                    onPress={() => {
                      this.setState({active: false});
                    }}>
                    <Icon name="list-outline" type="ionicon" size={40} />
                  </TouchableOpacity>
                </View>
              </View>
    
              {!this.state.active ? (
                <View>
                  <FlatList
                    style={{marginVertical: 10}}
                    data={DATA}
                    key={'#'}
                    keyExtractor={item => '#' + item.id}
                    numColumns={1}
                    renderItem={this.renderItem3}
                    // keyExtractor={item => item.id}
                  />
                </View>
              ) : (
                <View style={{paddingHorizontal:5}}>
                  <FlatList
                    style={{marginVertical:5}}
                    key={'_'}
                    keyExtractor={item => '_' + item.id}
                    data={DATA}
                    numColumns={2}
                    renderItem={this.renderItem2}
                    // keyExtractor={item => item.id}
                  />
                </View>
              )}
    
              {/* {
                        (this.state.list)?(<View >
                            <FlatList  style={{marginVertical:10,}}
                                data={DATA}
                                key={'#'}
                                keyExtractor={item => "#" + item.id}
                                numColumns={1}
                                renderItem={this.renderItem3} 
                                // keyExtractor={item => item.id}
                            />
                            </View>):(<View >
                                <FlatList  style={{marginVertical:10,}}
                                    key={'_'}
                                    keyExtractor={item => "_" + item.id}
                                    data={DATA}
                                    numColumns={2}
                                    renderItem={this.renderItem2} 
                                    // keyExtractor={item => item.id}
                                />
                           </View>)
                     } */}
            </ScrollView>
          </View>
        );
      }
}

export default Category;
