import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  Divider,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import { MenuItem } from "components/menuItem";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favourites",
    icon: MdFavorite,
    route: "/",
  },
];

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

export const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      paddingX="5px"
      bg="black"
      color="gray"
    >
      <Box height="100%" paddingY="20px">
        <Box width="120px" paddingX="20px" marginBottom="20px">
          <NextImage src="/logo.svg" width={120} height={60} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((item) => (
              <ListItem key={item.name} paddingX="20px" fontSize="16px">
                <MenuItem item={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem key={item.name} paddingX="20px" fontSize="16px">
                <MenuItem item={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider marginY="20px" color="gray.800" />
        <Box
          height="60%"
          paddingY="20px"
          overflowY="auto"
          sx={{
            "scrollbar-width": "none",
          }}
        >
          <List spacing={2}>
            {playlist.map((item) => (
              <ListItem key={item} paddingX="20px">
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{item}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
