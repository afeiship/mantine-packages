import React, { useEffect } from 'react';
import { RadioGroup } from '@/main';

const items = [
  { value: 'basketball', label: 'Basketball' },
  { value: 'football', label: 'Football' },
  { value: 'volleyball', label: 'Volleyball' },
  { value: 'tennis', label: 'Tennis' },
  { value: 'table-tennis', label: 'Table Tennis' }
];

export default () => {
  const [value, setValue] = React.useState('basketball');

  // simulate a server response
  useEffect(() => {
    setTimeout(() => {
      setValue('tennis');
    }, 1000);
  }, []);

  return (
    <div className="relative border w-4/5 mx-auto mt-10">
      <RadioGroup items={items} value={value} onChange={setValue} label="Select your favorite sport" />
      <pre className="p-5 bg-gray-100">{JSON.stringify({ value }, null, 2)}</pre>
    </div>
  );
};
