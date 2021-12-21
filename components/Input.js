import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Input = React.forwardRef((props, ref) => {
  const [inputState, setInputState] = useState({
    value: props.initialValue ? props.initialValue : "",
    isValid: false,
    touched: false,
  });
  const [showError, setShowError] = useState(false);

  const { onInputChange } = props;

  const textChangeHandler = (text) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }

    setInputState({
      value: text,
      isValid: isValid,
      touched: true,
    });
    if (isValid) setShowError(false);
    else if (!isValid) setShowError(true);
  };

  const lostFocusHandler = (text) => {
    if (
      (inputState.touched && (inputState.value === "" || !inputState.value)) ||
      !inputState.isValid
    )
      setShowError(true);
    else setShowError(false);
  };

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange]);

  return (
    <View>
      <TextInput
        {...props}
        style={styles.input}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
        initialValue=""
        mode="outlined"
        outlineColor="#ccc"
        activeOutlineColor="#21b4f0"
        error={showError}
        isValid={inputState.isValid}
        ref={ref}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: "product-sans-regular",
    fontSize: 14,
    color: "red",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 10,
    width: "100%",
  },
});

export default Input;
