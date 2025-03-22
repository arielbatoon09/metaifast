import { Check, X } from 'lucide-react';

const PasswordRequirements = ({ password }: { password: string }) => {
  const criteria = [
    { text: 'At least 6 characters', check: password.length >= 6 },
    { text: 'At least one uppercase letter', check: /[A-Z]/.test(password) },
    { text: 'At least one lowercase letter', check: /[a-z]/.test(password) },
    { text: 'At least one number', check: /[0-9]/.test(password) },
    { text: 'At least one special character', check: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <ul>
      {criteria.map((criterion, index) => (
        <li
          key={index}
          className={`flex items-center gap-1 ${criterion.check ? 'text-green-500' : 'text-gray-300'}`}
        >
          {criterion.check ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
          {criterion.text}
        </li>
      ))}
    </ul>
  );
};

export default PasswordRequirements;
