import React from 'react';
import {
  SegmentedControl as SenseSegmentedControlComponent,
  SegmentedControlProps,
  SegmentedControlItem
} from '@mantine/core';

interface SegmentedControlExtendProps extends Omit<SegmentedControlProps, 'data'> {
  items: string[] | SegmentedControlItem[];
}

const SegmentedControl = (props: SegmentedControlExtendProps) => {
  const { items, ...rest } = props;
  console.log('latest ctrl component.');
  return <SenseSegmentedControlComponent data={items} {...rest} />;
};

export default SegmentedControl;
