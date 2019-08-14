import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, Animated } from 'react-native';

const Box = ({ startAnimation, animatedStyles, text }) => {
  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.myBox, animatedStyles]}>
        <Text>{text}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  myBox: {
    width: 200,
    height: 200,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Box;
