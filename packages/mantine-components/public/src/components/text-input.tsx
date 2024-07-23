import React, { useEffect, useState } from 'react';
import { TextInputExt } from '@/main';

export default () => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setValue('John');
    }, 2000);
  }, []);

  return (
    <div className="relative mx-auto">
      <TextInputExt
        placeholder="Enter your name"
        value={value}
        onChange={(e) => {
          console.log('changed value: ', value);
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
