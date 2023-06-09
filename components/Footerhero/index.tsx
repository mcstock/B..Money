import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import Image from 'next/image';
import Logo from '../../public/assets/images/logo.png';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    borderTop: `1px solid ${theme.colorScheme === 'light' ? theme.colors.dark[5] : theme.colors.gray[0]
      }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0]
      }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const data = [
  {
    title: "Service",
    links: [
      {
        label: "Commodity Trading",
        link: "/",
      },
      {
        label: "Currency Trading",
        link: "/",
      },
      {
        label: "Derivatives Trading",
        link: "/",
      },
      {
        label: "Equity Trading",
        link: "/",
      },
      {
        label: "Portfolio Management",
        link: "/",
      },
      {
        label: "Wealth Management",
        link: "/",
      }
    ]
  },

]

export function FooterLinks() {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        style={{ color: 'white' }}
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text style={{ fontWeight: '900', fontFamily: 'sans-serif', fontSize: 20, color: 'white' }}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer} style={{ backgroundColor: '#ef4123' }}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={Logo} />
          <Text size="xs" color="white" className={classes.description}>
            A full fledged solution for Trading, Mutual Funds and Transaction Profile Management.

          </Text>
        </div>
        <div className={classes.groups} id='footergroup'>{groups}
          <span id='buttons2'>
            <Link href='/auth/login'>
              <div id="signinb2"><p id='signint2'>Sign in</p></div>
            </Link>
            <Link href='/auth/signup'>
              <div id="signupb2"><p id='signupt2'>Sign Up</p></div>
            </Link>
          </span>
        </div>
      </Container>
      <Container className={classes.afterFooter} >

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter color='white' size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube color='white' size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram color='white' size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Link href='/admin/adminlogin'><p style={{ color: 'white' }}>BMoney</p></Link>
      </Container>
    </footer>
  );
}