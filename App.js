// // In App.js in a new project
import {CheckBox, Icon,Header,material, Image} from 'react-native-elements';
import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './pages/Login';
import Details from './pages/details';
import Details2 from './pages/details2';
import Details3 from './pages/details3';
import Details4 from './pages/details4';
import { Component } from 'react';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Category from './pages/Category.js';
// import Demo from './pages/Demo'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class TabNav extends Component{
  render()
  {
    return(
      <Tab.Navigator  screenOptions={({route}) => ({
        tabBarStyle: { backgroundColor: 'silver' },
        headerShown: false,
        
        tabBarIcon: ({focused, color, tintColor}) => {
          let iconName;
          if (route.name == 'Home') {
            return (
              <Icon name='home' type='ionicon' color={focused ? "#fa7051" : "#ababab"}/>
            );
          } else if (route.name == 'Restaurant') {
            return (
              <Icon name="restaurant" type='ionicon' color={focused ? "#fa7051" : "#ababab"} />
            );
          } else if (route.name == 'Orders') {
            return (
              <Icon name='lock-closed' type="ionicon" color={focused ? "#fa7051" : "#ababab"}  />
            );
          } else if (route.name == 'Profile') {
            return (
              <Icon name='person' type="ionicon" color={focused ? "#fa7051" : "#ababab"}/>
            );
          }
          return (
            <Icon name={iconName} color={color} type="ionicon" size={22} />
          );
        },
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Restaurant" component={Restaurant} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>

    );
  }
}

class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator  
          // initialRouteName={'restaurant'} 
          screenOptions={{headerShown:false}} >
          <Stack.Screen name="Login"    component={Login} />
          {/* <Stack.Screen name='Restaurant' component={Restaurant}/> */}
          <Stack.Screen name="toHome"     component={TabNav} />
          <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
 
}

export default App;



// export default function App() {
//   return (
    
//       <NavigationContainer>
//         <Tab.Navigator  screenOptions={({route}) => ({
//           initialRouteName:'menu3' ,
//           tabBarStyle: { backgroundColor: 'silver' },
//           headerShown: false,
          
//           tabBarIcon: ({focused, color, tintColor}) => {
//             let iconName;
//             if (route.name == 'Home') {
//               return (
//                 <Icon name='home' type='ionicon' color={focused ? "#fa7051" : "#ababab"}/>
//               );
//             } else if (route.name == 'menu') {
//               return (
//                 <Icon name="restaurant" type='ionicon' color={focused ? "#fa7051" : "#ababab"} />
//               );
//             } else if (route.name == 'menu2') {
//               return (
//                 <Icon name='lock-closed' type="ionicon" color={focused ? "#fa7051" : "#ababab"}  />
//               );
//             } else if (route.name == 'Profile') {
//               return (
//                 <Icon name='person' type="ionicon" color={focused ? "#fa7051" : "#ababab"}/>
//               );
//             }
//             return (
//               <Icon name={iconName} color={color} type="ionicon" size={22} />
//             );
//           },
//         })}>
//           <Tab.Screen name="Home" component={Log} />
//           <Tab.Screen name="menu" component={Menu} />
//           <Tab.Screen name="menu2" component={Task} />
//           <Tab.Screen name="menu3" component={Category} />
//         </Tab.Navigator>

//       </NavigationContainer>
   
//   );
// }
