import React, { useState, useCallback } from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback, Animated } from 'react-native';

import Box from '../Box';

const Timing = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const startAnimation = useCallback(() => {
    Animated.timing(animation, { toValue: 0, duration: 1000 }).start();
  }, []);

  return <Box text="Timing" startAnimation={startAnimation} animatedStyles={animatedStyles} />;
};

export default Timing;
