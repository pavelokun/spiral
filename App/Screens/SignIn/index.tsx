import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/Auth';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Input
          label="Email"
          placeholder="Your email address"
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button
          title="LOGIN"
          onPress={() => dispatch(signIn({ email, password }))}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 30,
  },
});
