import {
  createStyles,
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
} from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.png";


const useStyles = createStyles((theme) => ({
  link: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: "white",
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[6]
          : theme.colors.dark[6],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : '#ef4123',
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    label: "Commodity Trading",
    link: "/services/commodity",
  },
  {
    label: "Currency Trading",
    link: "/services/currency",
  },
  {
    label: "Derivatives Trading",
    link: "/services/derivatives",
  },
  {
    label: "Equity Trading",
    link: "/services/equity",
  },
  {
    label: "Portfolio Management",
    link: "/services/portfolio",
  },
  {
    label: "Wealth Management",
    link: "/services/wealth",
  },
];

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton style={{ background: 'white' }} className={classes.subLink} key={item.label}>
      <Group noWrap align="flex-start">
        <div>
          <Text size="sm" weight={500}>
            <Link href={item.link}>{item.label}</Link>
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={10} style={{ background: '#ef4123' }}>
      <Group position="apart" sx={{ height: "100%" }}>
        <div id="logo" style={{ width: 70, height: 'auto' }} >
          <Link href="/"><Image src={Logo} /></Link>
        </div>
        <Group
          sx={{ height: "100%" }}
          spacing={0}
          className={classes.hiddenMobile}
          id="links"
        >
          <Link href="/">
            <span className={classes.link}>Home</span>
          </Link>
          <HoverCard
            width={600}
            position="bottom"
            radius="md"
            shadow="md"
            withinPortal
          >
            <HoverCard.Target>
              <a href="#" className={classes.link}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Services
                  </Box>
                  <IconChevronDown
                    size={16}
                    color={theme.fn.primaryColor()}
                  />
                </Center>
              </a>
            </HoverCard.Target>

            <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
              <Divider
                my="sm"
                mx="-md"
                color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
              />

              <SimpleGrid cols={2} spacing={0}>
                {links}
              </SimpleGrid>

              <div className={classes.dropdownFooter}></div>
            </HoverCard.Dropdown>
          </HoverCard>
          <Link href="/aboutus">
            <span className={classes.link}>About Us</span>
          </Link>
          <Link href="/contactus" className={classes.link}>
            <span className={classes.link}>Contact Us</span>
          </Link>
        </Group>

        <Burger
          color="white"
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.hiddenDesktop}
        />

        <Drawer
          style={{ color: '#ef4123' }}
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="BMoney"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md" style={{ backgroundColor: '#ef4123' }}>


            <Link href="/">
              <span className={classes.link} style={{ backgroundColor: '#ffffff1a', height: '10vh', border: '1px solid white' }} >Home</span>
            </Link>
            <UnstyledButton className={classes.link} style={{ backgroundColor: '#ffffff1a', height: '10vh', border: '1px solid white' }} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown size={16} color="white" />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <Link href="/aboutus" className={classes.link}>
              <span className={classes.link} style={{ backgroundColor: '#ffffff1a', height: '10vh', border: '1px solid white' }} >About Us</span>
            </Link>
            <Space />
            <Link href="/contactus" className={classes.link}>
              <span className={classes.link} style={{ backgroundColor: '#ffffff1a', height: '10vh', border: '1px solid white' }} >Contact Us</span>
            </Link>
          </ScrollArea>
        </Drawer>
      </Group>
    </Box>
  );
}
