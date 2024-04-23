import React, { useEffect } from 'react';
import { Selection } from '@/main';

export default () => {
  const [value, setValue] = React.useState(true);

  // simulate a server response
  useEffect(() => {
    setTimeout(() => {
      console.log('server response received');
      setValue(false);
    }, 1000);
  }, []);

  return (
    <div className="relative border w-4/5 mx-auto mt-10">
      <Selection value={value} onChange={setValue} label="I agree to the terms and conditions" />
      <hr />
      <Selection selectionType="radio" value={value} onChange={setValue} label="I agree to the terms and conditions" />
      <hr />
      <Selection selectionType="switch" value={value} onChange={setValue} label="I agree to the terms and conditions" />
      <pre className="p-5 bg-gray-100">{JSON.stringify({ value }, null, 2)}</pre>
    </div>
  );
};
