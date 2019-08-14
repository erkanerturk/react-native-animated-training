import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const Scale = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const startAnimation = useCallback(() => {
    Animated.timing(animation, { toValue: 3, duration: 300 }).start();
  }, []);

  const animatedStyles = {
    transform: [
      {
        scale: animation
      }
    ]
  };

  return <Box text="Scale" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default Scale;
