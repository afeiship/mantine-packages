import React, { useEffect } from 'react';
import { CheckboxGroup } from '@/main';

const values = [1, 2, 3];

export default () => {
  const items = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' },
  ];

  const [checked, setChecked] = React.useState([1, 2]);

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
