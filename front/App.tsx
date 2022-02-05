import React from 'react';

import { ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Auth/Login';
import Register from "./src/screens/Auth/Register";

export default function App() {
  return (
    <NativeRouter>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
            <Link to="/login" underlayColor="#fff">
              <Login />
            </Link>
            {/*<Link to="/register" underlayColor="#fff">*/}
            {/*  <Register />*/}
            {/*</Link>*/}
          {/*<Route exact path="/" component={Login} />*/}
          {/*<Route path="/register" component={Register} />*/}


        </Layout>
      </ApplicationProvider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
