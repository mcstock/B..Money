import { useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import {
  IconSwitchHorizontal,
  IconLogout,
  IconDashboard,
  IconUser,
  IconCashBanknote,
  IconCash,
  IconFiles,
  IconFileText,
  IconReport,
  IconFile,
} from '@tabler/icons';
import { useRouter } from 'next/router';
import { logOut } from '../../firebase/functions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'light' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: 'black',

        [`& .${icon}`]: {
          color: 'black',
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: 'black' }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: 'black' }).color,
        },
      },
    },
  };
});

const data = [
  { link: '/user/dashboard', label: 'Dashboard', icon: IconDashboard },
  { link: '/user/profile', label: 'Profile', icon: IconUser },
  { link: '/user/bank', label: 'Bank Details', icon: IconCashBanknote },
  { link: '/user/addbank', label: 'Add Bank Details', icon: IconCash },
  { link: '/user/payment', label: 'Payment', icon: IconFileText },
  { link: '/user/portfolio', label: 'Portfolio', icon: IconReport },
];

export function NavbarSimple() {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  const [user, loading, error] = useAuthState(auth);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, `${router.pathname == item.link}: ${item.label === active}`)}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        router.push(item.link)
      }}
    >
      <div className='sidebaricon'><item.icon style={{ color: 'white' }} className={classes.linkIcon} stroke={1.5} /></div>
      <span style={{ color: 'white' }}>{item.label}</span>
    </a>
  ));

  return (
    <div className='sidebar'>
      <div>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={
          (e) => {
            e.preventDefault();
            logOut(user.uid);
            router.push('/auth/login')
          }
        }>
          <div className='logouticon'><IconLogout style={{ color: 'white' }} className='sidebaricon' stroke={1.5} /></div>
          <span style={{ color: 'white' }}>Logout</span>
        </a>
      </div>
    </div>
  );
}
