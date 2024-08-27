import React from 'react';
import MantineFormValidators from '../../src/main';
import styled from 'styled-components';
import { scanVite } from '@jswork/scan-modules';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default () => {
  const moduleFiles = import.meta.glob('./shared/rules/**/*.ts', { eager: true });
  const modules = scanVite(moduleFiles, { modules: '/rules/' }) as any;

  return (
    <Container>
      <MantineFormValidators modules={modules} />
    </Container>
  );
};
