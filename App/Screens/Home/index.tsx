import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AccountsScreen from '../Accounts';
import CardsScreen from '../Cards';
import GivingScreen from '../Giving';
import PaymentsScreen from '../Payments';

const HomeStack = createNativeStackNavigator();
// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Checking"
        onPress={() => navigation.navigate('Checking')}
      />
      <Button title="Saving" onPress={() => navigation.navigate('Saving')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
