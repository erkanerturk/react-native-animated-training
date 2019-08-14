import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const MultiField = () => {
  const [animationWidth, setAnimationWidth] = useState(new Animated.Value(200));
  const [animationHeight, setAnimationHeight] = useState(new Animated.Value(200));

  const startAnimation = useCallback(() => {
    Animated.timing(animationWidth, { toValue: 350, duration: 300 }).start();
    Animated.timing(animationHeight, { toValue: 400, duration: 700 }).start();
  }, []);

  const animatedStyles = {
    width: animationWidth,
    height: animationHeight
  };

  return <Box text="MultiField" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default MultiField;
