export interface RadioButtonProps {
  active?: boolean;
  value: string | number;
  children: string;
  onPress: (value: string | number) => void;
}