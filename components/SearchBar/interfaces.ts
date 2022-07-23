export interface SearchBarProps {
  onChangeText: (text: string) => void;
  onPressSort: (sortBy: string) => void;
}

export interface RadioData {
  value: string;
  caption: string;
}
