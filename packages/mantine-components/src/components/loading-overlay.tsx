import {
  LoadingOverlay as LoadingOverlayComponent,
  LoadingOverlayProps,
  MantineProvider
} from '@mantine/core';
import React from 'react';

interface LoadingOverlayExtendProps extends LoadingOverlayProps {
  customCentered?: boolean;
}

function LoadingOverlay(props: LoadingOverlayExtendProps) {
  const { customCentered = false, ...rest } = props;
  return (
    <MantineProvider>
      <LoadingOverlayComponent data-custom-centered={customCentered} {...rest} />
    </MantineProvider>
  );
}

export default LoadingOverlay;
