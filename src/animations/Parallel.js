import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const Parallel = () => {
  const [animationScale, setAnimationScale] = useState(new Animated.Value(1));
  const [animationOpacity, setAnimationOpacity] = useState(new Animated.Value(0.4));

  const startAnimation = useCallback(() => {
    Animated.parallel([
      Animated.timing(animationScale, { toValue: 2, duration: 300 }),
      Animated.timing(animationOpacity, { toValue: 1, duration: 700 })
    ]).start();
  }, []);

  const animatedStyles = {
    transform: [{ scale: animationScale }],
    opacity: animationOpacity
  };

  return <Box text="Parallel" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default Parallel;
