import React from 'react';
import Menu from './components/menu';
import Select from './components/select';
import TextInput from './components/text-input'

export default () => {
  return (
    <div className="relative debug-red my-10 p-2 border w-4/5 mx-auto">
      <Menu />
      <hr />
      <Select />
      <hr/>
      <TextInput />
    </div>
  );
};
