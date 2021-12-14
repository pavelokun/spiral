import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AccountsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>AccountsScreen</Text>
      <Button
        title="Checking"
        onPress={() => navigation.navigate('Checking')}
      />
      <Button title="Saving" onPress={() => navigation.navigate('Saving')} />
    </View>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({});
