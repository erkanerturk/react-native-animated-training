import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const Stagger = () => {
  const [animationScale, setAnimationScale] = useState(new Animated.Value(1));
  const [animationOpacity, setAnimationOpacity] = useState(new Animated.Value(0.4));

  const startAnimation = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(animationOpacity, { toValue: 1, duration: 500 }),
          Animated.timing(animationScale, { toValue: 1.5, duration: 700 })
        ]),
        Animated.parallel([
          Animated.timing(animationOpacity, { toValue: 0.4, duration: 500 }),
          Animated.timing(animationScale, { toValue: 1, duration: 700 })
        ])
      ]),
      {
        iterations: 3
      }
    ).start();
  }, []);

  const animatedStyles = {
    transform: [{ scale: animationScale }],
    opacity: animationOpacity
  };

  return <Box text="Loop" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default Stagger;
