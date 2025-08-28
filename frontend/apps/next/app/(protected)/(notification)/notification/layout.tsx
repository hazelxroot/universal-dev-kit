'use client';
import React from 'react';
import { Box } from '@app-launch-kit/components/primitives/box';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Sidebar } from '@app-launch-kit/modules/dashboard/components/Sidebar';
import { SidebarIconsList } from '@app-launch-kit/modules/dashboard/constants/dashboard';
import Header from '@app-launch-kit/modules/landing-page/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VStack className="h-screen w-screen bg-background-0">
      <Header />
      <HStack className="flex-1 w-full">
        <Box className="hidden md:flex h-full">
          <Sidebar sideBarIcons={SidebarIconsList} currentPathName={'/'} />
        </Box>
        {children}
      </HStack>
    </VStack>
  );
};
export default Layout;
