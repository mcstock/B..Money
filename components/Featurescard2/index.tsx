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
    title: 'Precise Research Work',
    description:
      'Our Commodity Trading Insight is backed by our in-depth & dedicated research teams performing thorough research to reap the fruits from the Commodity Markets. They make sure that your commodity trading is supported by apt research and no unnecessary risk threatens your potential profit.',
    icon: IconBrandGoogleAnalytics,
  },
  {
    title: 'Insightful Analysis Team',
    description:
      'With some of the best analytical brains analysing the best commodities for you to trade in MCX & NCDEX, our commodity trading, arbitrage desk & hedging solutions recommendations are purely based on top-notch analysis backed by our team’s thorough research.',
    icon: IconUser,
  },
  {
    title: 'Seek Expert Advisory',
    description:
      'Amidst Commodity Trading in MCX & NCDEX, it is crucial to seek advisory from experts regarding the commodities you are trading in. We have a dedicated team of experts for each commodity trading opportunity making your commodity trade an expert process.',
    icon: IconInfoCircle,
  },
  {
    title: 'Ground-breaking Tools',
    description:
      'Our Commodity Trading Insight is backed by our in-depth & dedicated research teams performing thorough research to reap the fruits from the Commodity Markets. They make sure that your commodity trading is supported by apt research and no unnecessary risk threatens your potential profit.',
    icon: IconActivity,
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
      backgroundColor: "#ef4123",
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCards(title1) {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon size={50} stroke={2} color="#ef4123" />
      <Text size="lg" weight={500} color="#ef4123" className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="black" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} color="#ef4123" align="center" mt="sm">
        {title1.title1}
      </Title>
      <Group position="center">
        <Badge style={{ background: 'black', border: '1px solid black', color: 'white' }} variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <SimpleGrid cols={2} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}