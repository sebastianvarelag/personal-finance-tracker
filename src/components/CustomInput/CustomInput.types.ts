export interface CustomInputProps {
  label?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}