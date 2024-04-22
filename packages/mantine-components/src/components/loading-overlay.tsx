import React from 'react';
import {
  LoadingOverlay as LoadingOverlayComponent,
  factory,
  LoadingOverlayProps
} from '@mantine/core';

interface LoadingOverlayExtendProps extends LoadingOverlayProps {
  customCentered?: boolean;
}

function LoadingOverlay(props: LoadingOverlayExtendProps) {
  const { customCentered = false, ...rest } = props;
  const Ins = factory((_props, ref) => (
    <LoadingOverlayComponent data-custom-centered={customCentered} ref={ref} {...rest} />
  ));
  return <Ins />;
}

LoadingOverlay.displayName = '@jswork/mantine-components/LoadingOverlay';

export default LoadingOverlay;
