import React, { useEffect, useState } from 'react';
import { DateInputExt } from '@/main';

export default () => {
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setValue('2024-07-21');
    }, 2000);
  }, []);

  return (
    <div className="relative mx-auto">
      <DateInputExt
        label="Date input"
        value={value}
        valueFormat="datetime"
        onChange={(val) => {
          console.log('current value: ', val);
          setValue(val);
        }}
      />
    </div>
  );
};
