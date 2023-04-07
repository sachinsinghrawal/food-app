import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon, Header, Image} from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const DATA = [
  {id: '1', img: require('../imgs/a1.png'), title: 'Pizza'},
  {id: '2', img: require('../imgs/a2.png'), title: 'sushi'},
  {id: '3', img: require('../imgs/a3.png'), title: 'snacks'},
  {id: '4', img: require('../imgs/a4.png'), title: 'lunch'},
  {id: '5', img: require('../imgs/a5.png'), title: 'fastfood'},
  {id: '6', img: require('../imgs/a6.png'), title: 'desserts'},
  {id: '7', img: require('../imgs/pizza.png'), title: 'desserts'},
  {id: '8', img: require('../imgs/a7.png'), title: 'more'},
];
const INFO = [
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

class Home extends React.Component {
  renderItem = ({item}) => {
    return (
      <View
        style={{
          width: Dimensions.get('screen').width / 4.2,
          height: Dimensions.get('screen').height / 8,
          borderRadius: 15,
          marginVertical: 6,
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '70%',
            width: '75%',
            justifyContent: 'center',
            backgroundColor: '#fff',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 15,
            shadowColor: '#52006A',
            elevation: 5,
          }}>
          <View>
            <Image source={item.img} style={{height: 40, width: 40}}></Image>
          </View>
        </View>

        <View>
          <Text
            style={{
              alignSelf: 'center',
              color: 'black',
              fontWeight: '800',
              paddingTop: 5,
            }}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  renderItem2 = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          margin: 10,
          borderRadius: 10,
          height: Dimensions.get('screen').height / 3.5,
          width: Dimensions.get('screen').width / 2.8,
          padding: 5,
          shadowColor: 'black',
          elevation: 5,
        }}>
        <View style={{height: '50%'}}>
          <Image
            source={item.img}
            style={{height: '100%', width: '100%', borderRadius: 10}}></Image>
        </View>

        <View style={{height: '50%', padding: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: RFValue(11, 580),
              marginTop: '8%',
            }}>
            {item.title}
          </Text>
          <Text
            style={{color: 'red', fontSize: RFValue(12, 580), marginTop: '8%'}}>
            ₹250<Text style={{color: 'black'}}> / 400g</Text>
          </Text>
        </View>
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
          width: Dimensions.get('screen').width / 1.1,
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

  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={this.renderLeftComponent}
            rightComponent={this.renderRightComponent}
            containerStyle={{
              backgroundColor: '#fff',
              borderRadius: 20,
              paddingHorizontal: 15,
            }}
            elevated="100"
          />
        </View>

        <ScrollView
          style={
            {
              // backgroundColor:'silver'
            }
          }>

          {/*Swiper Flat List */}
          <View style={styles.container}>
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={2}
              showPagination
              paginationStyle={{marginBottom: -30}}
              paginationStyleItem={{height: 10, width: 10,shadowColor:'black',elevation:5}}>
              <View style={styles.child}>
                {/* <Text style={styles.text}>1</Text> */}
                <Image
                  source={require('../imgs/sf1.png')}
                  style={{
                    height: height * 0.27,
                    borderRadius: 15,
                    margin: 10,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>2</Text> */}
                <Image
                  source={require('../imgs/sf2.png')}
                  style={{
                    height: height * 0.27,
                    borderRadius: 15,
                    margin: 10,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>3</Text> */}
                <Image
                  source={require('../imgs/sf3.png')}
                  style={{
                    height: height * 0.27,
                    borderRadius: 15,
                    margin: 10,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>4</Text> */}
                <Image
                  source={require('../imgs/sf4.png')}
                  style={{
                    height: height * 0.27,
                    borderRadius: 15,
                    margin: 10,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>4</Text> */}
                <Image
                  source={require('../imgs/sf5.png')}
                  style={{
                    height: height * 0.27,
                    borderRadius: 20,
                    margin: 10,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
            </SwiperFlatList>
          </View>

          {/*search box*/}
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              flexDirection: 'row',
              marginTop: '12%',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: '#fff',
              borderRadius: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              shadowColor:'black',
              elevation:3
            }}>
            <TextInput placeholder="search restaurant, dish" />
            <Icon name="search" type="ionicon" />
          </View>

          {/*flatlist one*/}
          <View style={{alignItems:'center'}}>
            <FlatList
              style={{marginVertical: 10}}
              data={DATA}
              numColumns={4}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>

          {/*in between text*/}
          <View
            style={{
              width: Dimensions.get('screen').width / 1.06,
              alignSelf: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: RFValue(15, 580),
                color: 'black',
              }}>
              Popular
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Category')}
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'Alkatra-Bold',
                  fontSize: RFValue(15, 580),
                  color: 'black',
                }}>
                All
              </Text>
              <Icon name="arrow-forward-outline" type="ionicon" color="red" />
            </TouchableOpacity>
          </View>

          {/*items with description*/}
          <View style={{marginTop: 10, marginLeft: 8}}>
            <FlatList
              data={INFO}
              renderItem={this.renderItem2}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/*in between text*/}
          <View
            style={{
              width: Dimensions.get('screen').width / 1.06,
              alignSelf: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{fontWeight: '900', fontSize: 20, color: 'black'}}>
              New restaurant
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Restaurant')}
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'Alkatra-Bold',
                  fontSize: 20,
                  color: 'black',
                }}>
                All
              </Text>
              <Icon name="arrow-forward-outline" type="ionicon" color="red" />
            </TouchableOpacity>
          </View>

          {/*items with description*/}
          <View style={{marginTop: 10, marginLeft: 8, marginBottom: 130}}>
            <FlatList
              data={INFO}
              renderItem={this.renderItem3}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    // margin:'3%',
    // borderRadius:15,
    // borderWidth:2,
    // borderColor:'white',
    marginTop: 10,
    // overflow:'hidden'
  },
  child: {
    height: height * 0.3,
    width,
    justifyContent: 'center',
    // overflow:'hidden',
  },
  text: {
    fontSize: width * 0.2,
    textAlign: 'center',
  },
});

export default Home;
