import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const Sequence = () => {
  const [animationScale, setAnimationScale] = useState(new Animated.Value(1));
  const [animationOpacity, setAnimationOpacity] = useState(new Animated.Value(0.4));

  const startAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(animationOpacity, { toValue: 1, duration: 700 }),
      Animated.delay(1500),
      Animated.timing(animationScale, { toValue: 2, duration: 300 })
    ]).start();
  }, []);

  const animatedStyles = {
    transform: [{ scale: animationScale }],
    opacity: animationOpacity
  };

  return <Box text="Sequence" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default Sequence;
