import React, { FunctionComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../../themes/Colors';

interface LoadingProps {
  show: boolean;
  style?: object;
}

const Loading: FunctionComponent<LoadingProps> = ({ show, style }) => {
  if (!show) {
    return null;
  }
  return <ActivityIndicator style={style} color={Colors.orange} size="large" />;
};

export default Loading;
