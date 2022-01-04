import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { signIn } from '../../Redux/Auth';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignInScreen = () => {
  const dispatch = useDispatch();
  const { authError, isLoading } = useSelector(state => state.auth);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = ({ email, password }) =>
    dispatch(signIn({ email, password }));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Controller
          rules={{
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: EMAIL_REGEX,
              message: 'Not a valid email',
            },
          }}
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors?.email?.message}
              value={value}
              label="Email"
              placeholder="Your email address"
            />
          )}
        />
        <Controller
          rules={{
            required: { value: true, message: 'Password is required' },
          }}
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors?.password?.message}
              value={value}
              label="Password"
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
        />
        {!!authError && <Text>{authError}</Text>}
        <Button
          loading={isLoading}
          title="LOGIN"
          onPress={handleSubmit(onSubmit)}
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
