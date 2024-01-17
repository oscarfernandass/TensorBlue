// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from './back.png';
import Home from './Home';
import Profile from './Profile';
import Report from './Report';
import Notification from './Notification';
import home from './home.png';
import profile from './profile.png';
import report from './report.png';
import notification from './notification.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={onPress} style={{ marginLeft: 10, paddingRight: 10 }}>
              <Image source={AntDesign} style={{height:20,width:20}}/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            // Don't forget to return the JSX here
            <TouchableOpacity style={{ marginRight: 10, backgroundColor: 'lightgrey', borderRadius: 50, padding: 10 }}>
              <Image source={notification} style={{ height: 25, width: 25 }} />
            </TouchableOpacity>
          ),
        }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: [
          {
            position: 'relative',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 16,
            height: '10%',
            marginTop: '-30%',
            bottom: '3%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ],
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? '#978cd0' : 'transparent', borderRadius: 50, padding: 10 }}>
              <Image
                source={focused ? home : home}
                style={{ width: size, height: size, tintColor: focused ? 'white' : 'black' }}
              />
            </View>
          ),
          tabBarShowLabel: false,
        })}
      />

      <Tab.Screen
        name="report"
        component={Report}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? '#978cd0' : 'transparent', borderRadius: 50, padding: 10 }}>
              <Image
                source={focused ? report : report}
                style={{ width: size, height: size, tintColor: focused ? 'white' : 'black' }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? '#978cd0' : 'transparent', borderRadius: 50, padding: 8 }}>
              <Image
                source={focused ? profile : profile}
                style={{ width: 30, height: 30, tintColor: focused ? 'white' : 'black' }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
