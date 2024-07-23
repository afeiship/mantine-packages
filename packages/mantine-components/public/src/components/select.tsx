import React, { useEffect, useState } from 'react';
import { SelectExt } from '@/main';

export default () => {
  const [value, setValue] = useState(false);
  const data = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ];

  useEffect(() => {
    setTimeout(() => {
      setValue(true);
    }, 1000);
  }, []);

  console.log('value: ', value);

  return (
    <div className="relative mx-auto">
      <SelectExt
        data={data}
        value={value}
        onChange={(value) => {
          console.log('value: ', value);
          setValue(value);
          console.log('changed value: ', value);
        }}
      />
    </div>
  );
};
