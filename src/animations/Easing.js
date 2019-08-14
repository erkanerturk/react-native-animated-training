import React, { useState, useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Dimensions, Easing, Animated } from 'react-native';

import Box from '../Box';

const EasingComp = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = useCallback(() => {
    Animated.timing(animation, {
      toValue: Dimensions.get('window').width - 300,
      duration: 1500,
      easing: Easing.bounce
    }).start();
  }, []);

  const animatedStyles = {
    transform: [{ translateX: animation }]
  };

  return <Box text="Easing" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default EasingComp;
