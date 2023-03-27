import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons/lib/esm/iconBase';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            color='gray.500'
            as={iconMap[platform.slug]}
            key={platform.id}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
