import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';

export default function NotificationSender() {
  return (
    <VStack
      space="md"
      className="h-full w-full justify-center items-center p-4"
    >
      <Text>Notifications are not supported on web yet...</Text>
    </VStack>
  );
}
