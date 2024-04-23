import React, { useEffect } from 'react';
import { Selection } from '@/main';

export default () => {
  const [checked, setChecked] = React.useState(true);

  // simulate a server response
  useEffect(() => {
    setTimeout(() => {
      console.log('server response received');
      setChecked(false);
    }, 1000);
  }, []);

  return (
    <div className="relative border w-4/5 mx-auto mt-10">
      <Selection value={checked} onChange={setChecked} label="I agree to the terms and conditions" />
      <hr />
      <Selection
        selectionType="radio"
        value={checked}
        onChange={setChecked}
        label="I agree to the terms and conditions"
      />
      <pre className="p-5 bg-gray-100">{JSON.stringify({ checked }, null, 2)}</pre>
    </div>
  );
};
