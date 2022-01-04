import React from 'react';
import { useSelector } from 'react-redux';
import { Image, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeImage from '../Assets/Images/home.png';
import AccountsImage from '../Assets/Images/accounts.png';
import GivingImage from '../Assets/Images/giving.png';
import PaymentImage from '../Assets/Images/payment.png';
import CardsImage from '../Assets/Images/cards.png';

import HomeScreen from '../Screens/Home';
import AccountsScreen from '../Screens/Accounts';
import GivingScreen from '../Screens/Giving';
import PaymentsScreen from '../Screens/Payments';
import CardsScreen from '../Screens/Cards';
import CheckingScreen from '../Screens/Checking';
import SavingScreen from '../Screens/Saving';
import SignInScreen from '../Screens/SignIn';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: theme.colors?.primary,
        },
        headerTitle: ({ children }) =>
          children === 'Home' ? <Text>LOGO</Text> : <Text>{children}</Text>,
        headerLeft: () => <Text>left</Text>,
        headerRight: () => <Text>right</Text>,
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          switch (route.name) {
            case 'Home':
              iconSource = HomeImage;
              break;
            case 'Accounts':
              iconSource = AccountsImage;
              break;
            case 'Giving':
              iconSource = GivingImage;
              break;
            case 'Payments':
              iconSource = PaymentImage;
              break;
            case 'Cards':
              iconSource = CardsImage;
              break;
          }
          return <Image style={{ tintColor: color }} source={iconSource} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: theme.colors?.grey0,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Giving" component={GivingScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
    </Tab.Navigator>
  );
};

// if (state.isLoading) {
//     // We haven't finished checking for the token yet
//     return <SplashScreen />;
//   }

//   return (
//     <Stack.Navigator>
//       {state.userToken == null ? (
//         // No token found, user isn't signed in
//         <Stack.Screen
//           name="SignIn"
//           component={SignInScreen}
//           options={{
//             title: 'Sign in',
//             // When logging out, a pop animation feels intuitive
//             // You can remove this if you want the default 'push' animation
//             animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//           }}
//         />
//       ) : (
//         // User is signed in
//         <Stack.Screen name="Home" component={HomeScreen} />
//       )}
//     </Stack.Navigator>
//   );

const Navigator = () => {
  const { userToken, isLoading } = useSelector(state => state.auth);

  // if (isLoading) {
  //   // We haven't finished checking for the token yet
  //   return <SplashScreen />;
  // }

  // isSignout - for different animation on sign out

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SignInScreen}
          />
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="HomeStack"
              component={HomeStack}
            />
            <Stack.Screen name="Checking" component={CheckingScreen} />
            <Stack.Screen name="Saving" component={SavingScreen} />
          </>
        )}
      </Stack.Navigator>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
