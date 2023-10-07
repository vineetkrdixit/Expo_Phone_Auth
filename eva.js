import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React from 'react';

const theme = {
  ...eva.light, // or dark theme if you prefer
  // Add custom theme settings here
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={theme}>
      {/* Your app content */}
    </ApplicationProvider>
  </>
);