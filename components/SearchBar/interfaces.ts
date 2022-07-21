import { GestureResponderEvent } from 'react-native';

export interface SearchBarProps {
  onChangeText: (text: string) => void;
  onPressSort: (event: GestureResponderEvent) => void;
}
