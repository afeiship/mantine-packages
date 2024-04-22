import React, { useEffect } from 'react';
import { CheckboxGroup } from '@/main';

const values = ['a', 'b', 'c'];

export default () => {
  const items = [
    { value: 'a', label: 'Option 1' },
    { value: 'b', label: 'Option 2' },
    { value: 'c', label: 'Option 3' },
    { value: 'd', label: 'Option 4' },
    { value: 'e', label: 'Option 5' }
  ];

  const [checked, setChecked] = React.useState(['a', 'b']);

  // simulate a server response
  useEffect(() => {
    setTimeout(() => {
      console.log('server response received');
      setChecked(values);
    }, 1000);
  }, []);

  return (
    <div className="relative border w-4/5 mx-auto mt-10">
      <CheckboxGroup items={items} value={checked} onChange={setChecked} label="I agree to the terms and conditions" />
      <pre className="p-5 bg-gray-100">{JSON.stringify({ checked }, null, 2)}</pre>
    </div>
  );
};
