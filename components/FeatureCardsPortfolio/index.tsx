import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie, IconActivity, IconBrandGoogleAnalytics, IconInfoCircle } from '@tabler/icons';

const mockdata = [
  {
    title: 'Finely Crafted Investment Philosophy for varied set of investors',
    description:
      'Finely Crafted Investment Philosophy for varied set of investors',
    icon: IconBrandGoogleAnalytics,
  },
  {
    title: 'Exhaustive In – house Research Desk',
    description:
      '',
    icon: IconUser,
  },
  {
    title: 'Devoted Relationship Manager for a Client',
    description:
      'Amidst Commodity Trading in MCX & NCDEX, it is crucial to seek advisory from experts regarding the commodities you are trading in. We have a dedicated team of experts for each commodity trading opportunity making your commodity trade an expert process.',
    icon: IconInfoCircle,
  },

];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',
    color: "#074a11",
    textDecoration: "Underline",

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCardsPortfolio() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      {/* <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text> */}
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        Why Portfolio Management with B-Money Traders ?
      </Title>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        <b>Earn Safely and Easily</b>
      </Text>

      <SimpleGrid cols={2} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}