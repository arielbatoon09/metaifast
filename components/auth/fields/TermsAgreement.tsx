import Link from 'next/link';
import { Control, FieldValues, Path } from 'react-hook-form';
import { FormField, FormItem, FormControl } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

interface TermsAgreementProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

const TermsAgreement = <T extends FieldValues>({ control, name }: TermsAgreementProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex items-center">
        <FormControl>
          <Checkbox
            checked={!!field.value}
            onCheckedChange={(checked) => field.onChange(checked === true)}
          />
        </FormControl>

        {/* Ensure the Checkbox is Sent */}
        <input type="hidden" name={name} value={field.value ? 'true' : 'false'} />

        <span className="block text-sm text-gray-700">
          I agree to the{' '}
          <Link className="font-medium text-gray-700" href="/">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link className="font-medium text-gray-700" href="/">
            Privacy Policy
          </Link>
        </span>
      </FormItem>
    )}
  />
);

export default TermsAgreement;
