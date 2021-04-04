import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxW={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  );
}
