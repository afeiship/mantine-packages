import React, { useEffect, useState } from 'react';
import { DateInputExt } from '@/main';

export default () => {
  const [value, setValue] = useState<any>('2022-01-24');

  useEffect(() => {
    setTimeout(() => {
      setValue('2024-07-24');
    }, 2000);
  }, []);

  return (
    <div className="relative mx-auto">
      <DateInputExt
        label="Date input"
        value={value}
        onChange={(val) => {
          console.log('value: ', value);
          setValue(val);
        }}
      />
    </div>
  );
};
