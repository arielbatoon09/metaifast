import { Control, FieldValues, Path } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface InputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
}

const InputField = <T extends FieldValues>({ control, name, label, type = 'text', placeholder }: InputFieldProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input required type={type} placeholder={placeholder} {...field} />
        </FormControl>
      </FormItem>
    )}
  />
);

export default InputField;