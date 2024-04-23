import React from 'react';
import { SegmentedControl } from '@/main';

export default () => {
  return (
    <div className="relative border w-4/5 mx-auto mt-10">
      <SegmentedControl
        defaultValue="Angular"
        items={['React', 'Angular', 'Vue']}
        onChange={(e) => {
          console.log('e.target.value: ', e);
        }}
      />
    </div>
  );
};
