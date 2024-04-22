import React from 'react';
import { LoadingOverlay } from '@/main';

export default () => {
  return (
    <div
      className="relative p-5 border w-4/5 mx-auto mt-10 bg-gray-500 rounded-md hover:bg-gray-200"
      style={{ height: 2000 }}>
      <LoadingOverlay className="debug-red" customCentered visible={true} />
      <div className="content">
        <p>道可道，非常道；名可名，非常名。</p>
        <p>无名，天地之始，有名，万物之母。</p>
        <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
        <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
      </div>
    </div>
  );
};
