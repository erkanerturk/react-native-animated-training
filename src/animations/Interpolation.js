import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const Interpolation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [animationRotate, setAnimationRotate] = useState(new Animated.Value(0));

  const startAnimation = useCallback(() => {
    Animated.timing(animation, { toValue: 1, duration: 300 }).start();
    Animated.timing(animationRotate, { toValue: 360, duration: 300 }).start();
  }, []);

  const interpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'green']
  });

  const rotateInterpolate = animationRotate.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  const animatedStyles = {
    backgroundColor: interpolate,
    transform: [{ rotate: rotateInterpolate }]
  };

  return (
    <Box text="Interpolation" startAnimation={startAnimation} animatedStyles={animatedStyles} />
  );
};

export default Interpolation;
