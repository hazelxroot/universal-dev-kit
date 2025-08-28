import React from 'react';
import { Slot } from 'expo-router';
import Header from '@app-launch-kit/modules/landing-page/components/Header';
import { VStack } from '@app-launch-kit/components/primitives/vstack';

const Layout = () => {
  return (
    <VStack className="h-screen w-screen bg-background-0">
      <Header />
      <Slot />
    </VStack>
  );
};

export default Layout;
