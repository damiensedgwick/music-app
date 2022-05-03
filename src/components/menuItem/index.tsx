import NextLink from "next/link";
import { LinkBox, LinkOverlay, ListIcon } from "@chakra-ui/layout";

export const MenuItem = ({ item }) => {
  return (
    <LinkBox>
      <NextLink href={item.route} passHref>
        <LinkOverlay>
          <ListIcon as={item.icon} marginRight="20px" color="white" />
          {item.name}
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};
