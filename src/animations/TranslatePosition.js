import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const TranslatePosition = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = useCallback(() => {
    Animated.timing(animation, { toValue: 250, duration: 300 }).start();
  }, []);

  const animatedStyles = {
    transform: [
      {
        translateY: animation
      }
    ]
  };

  return (
    <Box text="TranslatePosition" startAnimation={startAnimation} animatedStyles={animatedStyles} />
  );
};

export default TranslatePosition;
