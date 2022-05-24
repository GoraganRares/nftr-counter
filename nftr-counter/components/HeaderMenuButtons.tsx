import { useRouter } from 'next/router';
import { Box, Button, Image } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from '../components/ActionButton';
import { SocialMediaIcons } from '../components/SocialMediaIcons';
import { LoginModalButton } from '../components/LoginModalButton';

interface ActionButtonProps {
  onClick: () => void;
  isFullWidth?: boolean;
  disabled?: boolean;
}

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/mint');
  }, [router]);

  return (
    <Box
    position='absolute'
    cursor='pointer'
    bottom='80px'
    >
      {/* {enabled.includes('about') && (
        <Button
          variant="link"
          color="elvenTools.white"
          _focus={{ outline: 'none' }}
          mr={2}
          onClick={handleAboutClick}
        >
          About
        </Button>
      )} */}
      {/* <SocialMediaIcons /> */}
      
      {enabled.includes('auth') && (
        <ActionButton onClick={handleMintClick}>
          {/* {enabled.includes('auth')  */}
        </ActionButton>
      )}
      {/* {enabled.includes('auth') && <LoginModalButton />} */}
    </Box>
  );
};
