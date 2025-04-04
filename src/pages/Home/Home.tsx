import React from 'react';

import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Tag,
  Image,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { PageMeta } from '@/features/ui/components/PageMeta/PageMeta';

import logo from './assets/images/logo.svg';

export const HomePage: React.FC = () => {
  const { t } = useTranslation('PageHome');
  const title: string = t('Produkt Finanzierung');
  const description: string = t(
    'Hier wird die Finanzierung der Produkte von EcoSphereNetwork transparent dargestellt.'
  );
  return (
    <>
      <style>
        {`
          .App-logo {
            height: 20vmin;
            pointer-events: none;
          }
          
          @media (prefers-reduced-motion: no-preference) {
            .App-logo {
              animation: App-logo-spin infinite 20s linear;
            }
          }
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
      `}
      </style>
      <PageMeta title={title} description={description} url="" />
      <Container maxW="3xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 2, md: 4 }}
          py={{ base: 10, md: 16 }}
        >
          <Image src={logo} className="App-logo" />
          <Heading
            fontWeight={600}
            fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
            lineHeight="110%"
            textAlign="center"
          >
            {t('Transparente Finanzierung von EcoSphereNetwork Produkten')}
            <br />
            <Text as="span" color="blue.400">
              {title}
            </Text>
          </Heading>
          <Text>{description}</Text>
          <Text>
            <Tag size="lg" colorScheme="orange">
              {t('Edit {{path}} and save to reload.', {
                path: 'src/pages/Home/Home.tsx',
                interpolation: { escapeValue: false },
              })}
            </Tag>
          </Text>
          <Stack
            direction="column"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
          >
            <Button
              as={Link}
              href="https://reactjs.org"
              rel="noopener noreferrer"
              isExternal
              variant="ghost"
              size="xs"
              rightIcon={<FaExternalLinkAlt />}
            >
              {t('Produktübersicht')}
            </Button>
            <Button
              as={Link}
              href="https://github.com/huseyindeniz/vite-react-dapp-template"
              rel="noopener noreferrer"
              isExternal
              variant="ghost"
              size="xs"
              rightIcon={<FaExternalLinkAlt />}
            >
              {t('Werde Investor')}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
