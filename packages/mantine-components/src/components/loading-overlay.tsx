import React from 'react';
import {
  LoadingOverlay as LoadingOverlayComponent,
  LoadingOverlayProps,
  MantineProvider,
  MantineTheme
} from '@mantine/core';

interface LoadingOverlayExtendProps extends LoadingOverlayProps {
  customCentered?: boolean;
  theme?: MantineTheme;
}

function LoadingOverlay(props: LoadingOverlayExtendProps) {
  const { theme, customCentered, ...rest } = props;
  return (
    <MantineProvider theme={theme}>
      <LoadingOverlayComponent data-custom-centered={customCentered} {...rest} />
    </MantineProvider>
  );
}

LoadingOverlay.defaultProps = {
  customCentered: false
};

export default LoadingOverlay;
