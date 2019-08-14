import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const AbsolutePosition = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = useCallback(() => {
    Animated.timing(animation, { toValue: 200, duration: 300 }).start();
  }, []);

  const animatedStyles = {
    top: animation
  };

  return (
    <Box text="AbsolutePosition" startAnimation={startAnimation} animatedStyles={animatedStyles} />
  );
};

export default AbsolutePosition;
