import ExpoLightModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/ExpoLogo/Light';
import TailwindLightModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/TailwindLogo/Light';
import NativewindLightModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/NativewindLogo/Light';
import gluestackLightModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/gluestackLogo/Light';
import SupabaseLightModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/SupabaseLogo/Light';
import FirebaseLightModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/FirebaseLogo/Light';
import ExpressLightModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/ExpressLogo/Light';
import ExpoDarkModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/ExpoLogo/Dark';
import TailwindDarkModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/TailwindLogo/Dark';
import NativewindDarkModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/NativewindLogo/Dark';
import gluestackDarkModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/gluestackLogo/Dark';
import SupabaseDarkModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/SupabaseLogo/Dark';
import FirebaseDarkModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/FirebaseLogo/Dark';
import ExpressDarkModeIcon from '@app-launch-kit/modules/landing-page/assets/icons/ExpressLogo/Dark';
import HomeIconDark from '@app-launch-kit/modules/landing-page/assets/icons/Home/Dark';
import HomeIconLight from '@app-launch-kit/modules/landing-page/assets/icons/Home/Light';
import PricingIconDark from '@app-launch-kit/modules/landing-page/assets/icons/Pricing/Dark';
import PricingIconLight from '@app-launch-kit/modules/landing-page/assets/icons/Pricing/Light';
import ProfileIconDark from '@app-launch-kit/modules/landing-page/assets/icons/Profile/Dark';
import ProfileIconLight from '@app-launch-kit/modules/landing-page/assets/icons/Profile/Light';
import EditProfileIconDark from '@app-launch-kit/modules/landing-page/assets/icons/EditProfile/Dark';
import EditProfileIconLight from '@app-launch-kit/modules/landing-page/assets/icons/EditProfile/Light';

import config from '@app-launch-kit/config';
const { routes } = config;

const HeroIconsData = [
  {
    lightMode: ExpoLightModeIcon,
    darkMode: ExpoDarkModeIcon,
    name: 'Expo',
  },
  {
    lightMode: TailwindLightModeIcon,
    darkMode: TailwindDarkModeIcon,
    name: 'Tailwind',
  },
  {
    lightMode: NativewindLightModeIcon,
    darkMode: NativewindDarkModeIcon,
    name: 'Nativewind',
  },
  {
    lightMode: gluestackLightModeIcon,
    darkMode: gluestackDarkModeIcon,
    name: 'gluestack-ui',
  },
  {
    lightMode: SupabaseLightModeIcon,
    darkMode: SupabaseDarkModeIcon,
    name: 'Supabase',
  },
  {
    lightMode: FirebaseLightModeIcon,
    darkMode: FirebaseDarkModeIcon,
    name: 'Firebase',
  },
  {
    lightMode: ExpressLightModeIcon,
    darkMode: ExpressDarkModeIcon,
    name: 'Express',
  },
];

interface RouteCardData {
  lightIcon: React.ComponentType<any>;
  darkIcon: React.ComponentType<any>;
  heading: string;
  subtext: string;
  routeLink: string;
}

export const RouteCardsData: RouteCardData[] = [
  {
    lightIcon: HomeIconLight,
    darkIcon: HomeIconDark,
    heading: 'Home',
    subtext: 'Dashboard for easy navigation to all your pages.',
    routeLink: routes.dashboard.path,
  },
  {
    lightIcon: PricingIconLight,
    darkIcon: PricingIconDark,
    heading: 'Notifications',
    subtext: 'Send notifications to your users.',
    routeLink: routes.notification.path,
  },
  {
    lightIcon: ProfileIconLight,
    darkIcon: ProfileIconDark,
    heading: 'Profile',
    subtext: 'View all your settings and general information here.',
    routeLink: routes.profile.path,
  },
  {
    lightIcon: EditProfileIconLight,
    darkIcon: EditProfileIconDark,
    heading: 'Edit Profile',
    subtext: 'Customise your profile to show the unique you.',
    routeLink: routes.editProfile.path,
  },
];
export default HeroIconsData;
