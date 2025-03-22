import { Control, FieldValues, Path } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface NameFieldsProps<T extends FieldValues> {
  control: Control<T>;
}

const NameFields = <T extends FieldValues>({ control }: NameFieldsProps<T>) => {
  const fields: Path<T>[] = ['firstName', 'lastName'] as Path<T>[];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
      {fields.map((name) => (
        <FormField
          key={name}
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{name === 'firstName' ? 'First Name' : 'Last Name'}</FormLabel>
              <FormControl>
                <Input placeholder={name === 'firstName' ? 'John' : 'Doe'} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};

export default NameFields;