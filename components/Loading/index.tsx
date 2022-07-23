import React, { FunctionComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../../themes/Colors';
import { LoadingProps } from './interfaces';

// Loading when fetching, tell user to wait before data loaded.
const Loading: FunctionComponent<LoadingProps> = ({ show, style }) => {
  if (!show) {
    return null;
  }
  return <ActivityIndicator style={style} color={Colors.orange} size="large" />;
};

export default Loading;
