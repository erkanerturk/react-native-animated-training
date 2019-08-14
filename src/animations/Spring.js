import React, { useState, useCallback } from 'react';
import { Animated } from 'react-native';

import Box from '../Box';

const Spring = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = useCallback(() => {
    Animated.spring(animation, { toValue: 30, duration: 300 }).start();
  }, []);

  const animatedStyles = {
    bottom: animation,
    left: animation,
    right: animation
  };

  return <Box text="Spring" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default Spring;
