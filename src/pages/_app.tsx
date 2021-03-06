import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import 'reset-css';
import { theme } from 'styles/theme';
import { Layout } from 'components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
