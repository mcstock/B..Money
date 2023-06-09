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


export const MOCKDATA = [
  {
    description:
      "Trade on MCX & NCDEX – With B-Money, you can trade in commodities listed in both the major exchanges in India i.e. MCX & NCDEX. We are registered with both these exchanges.",
  },
  {
    description:
      "Physical delivery & Derivatives Market – At B-Money, we facilitate our clients to trade in several commodities. Commodities are bought & sold for immediate delivery in spot market while financial assets based on commodities are traded in derivatives market.",
  },
  {
    description:
      "Trade across Commodities – B-Money aids you to trade in all commodities listed in MCX & NCDEX. In MCX & NCDEX, B-Money offers an option to trade in Bullions, Metals, Energy & Agro Commodities.",
  },
  {
    description:
      "Research Report Calls – The Research Bureau of B-Money investigates numerous commodities daily for you to trade in commodities, prudently. These reports are even available on Whatsapp to our subscribers.",
  },
  {
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tailTrade on MCX & NCDEX – With B-Money, you can trade in commodities listed in both the major exchanges in India i.e. MCX & NCDEX. We are registered with both these exchanges.",
  },
  {
    description:
      "Physical delivery & Derivatives Market – At B-Money, we facilitate our clients to trade in several commodities. Commodities are bought & sold for immediate delivery in spot market while financial assets based on commodities are traded in derivatives market.",
  },
  {
    description:
      "Trade across Commodities – B-Money aids you to trade in all commodities listed in MCX & NCDEX. In MCX & NCDEX, B-Money offers an option to trade in Bullions, Metals, Energy & Agro Commodities.",
  },
  {
    description:
      "Research Report Calls – The Research Bureau of B-Money investigates numerous commodities daily for you to trade in commodities, prudently. These reports are even available on Whatsapp to our subscribers.",
  },
];

interface FeatureProps {
  description: React.ReactNode;
}

export function Feature({ description }: FeatureProps) {
  return (
    <div>
      <Text size="md" color="dimmed" style={{ lineHeight: 1.6, color: "white" }}>
        <b>{description}</b>
      </Text>
    </div>
  );
}


const useStyles = createStyles((theme) => ({
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
    background: 'white',
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },
}));

export function FeaturesGrid(title1) {
  const { classes, theme } = useStyles();
  const features = MOCKDATA.map((feature) => (
    <Card key="test" shadow="md" radius="md" className={classes.card} p="xl">
      <Text size="sm" color="dark" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={2} spacing="xl" mt={50} breakpoints={[{ maxWidth: 980, cols: 2, spacing: "xl" },
      { maxWidth: 755, cols: 1, spacing: "xl" },]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}