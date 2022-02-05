import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@ui-kitten/components";
import {authStyles} from "./Register";

const Login = ({}) => {
  return (
    <View style={authStyles.authForm}>
      <Input placeholder="Username" />
      <Input placeholder="Email" />
      <Button
        appearance="outline"
        children="Login"
        onPress={() => alert("ALERT")}
      />
    </View>
  );
};



export default Login;
