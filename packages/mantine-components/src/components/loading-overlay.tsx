import { LoadingOverlay as LoadingOverlayComponent, LoadingOverlayProps } from '@mantine/core';
import React from 'react';

interface LoadingOverlayExtendProps extends LoadingOverlayProps {
  customCentered?: boolean;
}

function LoadingOverlay(props: LoadingOverlayExtendProps) {
  const { customCentered = false, ...rest } = props;
  return <LoadingOverlayComponent data-custom-centered={customCentered} {...rest} />;
}

export default LoadingOverlay;
