import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@ui-kitten/components";

const Register = ({}) => {
    return (
        <View style={authStyles.authForm}>
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Email" />
            <Button
                appearance="outline"
                children="Register"
                onPress={() => alert("ALERT")}
            />
        </View>
    );
};

export const authStyles = StyleSheet.create({
    authForm: {
        flex: 1,
        height: "100",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
});

export default Register;
