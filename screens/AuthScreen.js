import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Input from "../components/Input";
import JobsListingScreen from "./JobsListingScreen";

const EMAIL = "test@test.com";
const PASSWORD = "test1234";

function AuthScreen(props) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [logIn, setLogIn] = useState();
  const [isInvalid, setIsInvalid] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  var authText = "Login to your account";
  var googleText = "Sign in with Google";
  var linkedInText = "Sign in with LinkedIn";
  var buttonText = "Login";
  var loginText = "Don't have an account?";
  var registerText = "Register";
  var input1 = "";
  var input2 = "";
  var input3 = "Password";

  if (isSignup) {
    googleText = "Sign up with Google";
    linkedInText = "Sign up with LinkedIn";
    authText = "Create your account";
    buttonText = "Sign Up";
    loginText = "Already have an account?";
    registerText = "Login";
    input1 = "First Name";
    input2 = "Last Name";
    input3 = "Create Password";
  }

  const inputFirstNameHandler = useCallback((inputValue, inputValidity) => {
    setbuttonDisabled(!inputValidity);
    setFirstName(inputValue);
  }, []);

  const inputLastNameHandler = useCallback((inputValue, inputValidity) => {
    setbuttonDisabled(!inputValidity);
    setLastName(inputValue);
  }, []);

  const inputEmailHandler = useCallback((inputValue, inputValidity) => {
    setbuttonDisabled(!inputValidity);
    setEmail(inputValue);
    setIsInvalid(false);
  }, []);

  const inputPswrdHandler = useCallback((inputValue, inputValidity) => {
    setbuttonDisabled(!inputValidity);
    setPassword(inputValue);
    setIsInvalid(false);
  }, []);

  const submitHandler = () => {
    if (email === EMAIL && password === PASSWORD) setLogIn(true);
    else setIsInvalid(true);
  };

  if (logIn) return <JobsListingScreen />;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ marginTop: 50 }}>
        <Image
          source={require("../assets/1112.png")}
          style={{
            flexDirection: "row",
            height: 50,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <View
          style={{
            ...styles.line,
            height: 10,
            opacity: 0.3,
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          padding: 10,
        }}
      >
        <View style={styles.authContainer}>
          <Text style={styles.authText}>{authText}</Text>
          {!isSignup && (
            <Text style={{ ...styles.authText, fontSize: 16 }}>
              Enter your email and password to continue.
            </Text>
          )}
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.thirdPartyAuthContainer}
          >
            <Image
              source={require("../assets/google.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="contain"
            />
            <Text style={styles.thirdPartyAuthText}>{googleText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.thirdPartyAuthContainer}
          >
            <Image
              source={require("../assets/linkedIn-in.png")}
              style={{ height: 34, width: 34 }}
              resizeMode="contain"
            />
            <Text style={styles.thirdPartyAuthText}>{linkedInText}</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <View style={styles.line} />
            <View>
              <Text
                style={{
                  width: 45,
                  fontSize: 16,
                  textAlign: "center",
                  fontFamily: "product-sans-light",
                }}
              >
                or
              </Text>
            </View>
            <View style={styles.line} />
          </View>
          {isInvalid && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Invalid email/password</Text>
            </View>
          )}
          {isSignup && (
            <View style={{ flex: 1, width: "100%" }}>
              <Input
                id="firstName"
                label={input1}
                keyboardType="default"
                required
                minLength={3}
                autoCapitalize="words"
                errorText="Please enter a valid name."
                onInputChange={inputFirstNameHandler}
              />
              <Input
                id="lastName"
                label={input2}
                keyboardType="default"
                required
                minLength={3}
                autoCapitalize="words"
                errorText="Please enter a valid name."
                onInputChange={inputLastNameHandler}
              />
            </View>
          )}
          <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={inputEmailHandler}
          />
          <Input
            id="password"
            label={input3}
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={inputPswrdHandler}
          />

          {!isSignup && (
            <TouchableOpacity
              style={{
                marginTop: 10,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={submitHandler}
            disabled={buttonDisabled}
            style={{
              ...styles.button,
              backgroundColor: buttonDisabled ? "#ccc" : "#21b4f0",
            }}
          >
            <Text
              style={{
                fontFamily: "product-sans-regular",
                fontSize: 15,
                color: buttonDisabled ? "#888" : "white",
                textAlign: "center",
              }}
            >
              {buttonText}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontFamily: "product-sans-regular" }}>
              {loginText}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsSignup((prevState) => !prevState);
              }}
            >
              <Text style={styles.forgotPassText}> {registerText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 1,
    borderRadius: 4,
    padding: 15,
    marginBottom: 50,
    marginHorizontal: 10,
  },
  authText: {
    fontFamily: "product-sans-light",
    textAlign: "center",
    fontSize: 32,
    margin: 10,
    marginBottom: 15,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: "product-sans-regular",
    fontSize: 15,
    color: "red",
  },
  thirdPartyAuthContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 3,
    padding: 10,
    borderRadius: 4,
    padding: 5,
    margin: 5,
  },
  thirdPartyAuthText: {
    fontFamily: "product-sans-regular",
    textAlign: "center",
    opacity: 0.5,
    fontSize: 18,
    margin: 8,
  },
  line: { flex: 1, height: 0.6, backgroundColor: "#ccc" },
  forgotPassText: {
    fontFamily: "product-sans-regular",
    color: "#21b4f0",
    fontSize: 15,
    textAlign: "right",
  },
  textInput: {
    backgroundColor: "white",
    marginVertical: 10,
    width: "100%",
  },
  button: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 20,

    borderRadius: 4,
    alignSelf: "center",
  },
});

export default AuthScreen;
