
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { Gruops } from '@screens/Groups';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Gruops />
    </ThemeProvider>
  );
}


