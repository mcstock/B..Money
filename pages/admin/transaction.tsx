import {
  AppShell,
  Button,
  Center,
  NumberInput,
  Paper,
  Select,
  Space,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
} from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimpleAdmin } from "../../components/SidebarAdmin";
import { TableScrollAreaTransactionAdmin } from "../../components/Tables/TransactionTableAdmin";
import { auth, db } from "../../firebase";
import { getData, isAdmin } from "../../firebase/functions";
import styles from "../../styles/user/dashboard.module.scss";


export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();
  const router = useRouter()

  useEffect(() => {
    if (user) {
      if (!isAdmin(user)) {
        return () => {
          router.push("/auth/login");
        }
      };
    }
    else {
      router.push("/auth/login");
    }
  });

  async function addAmount(e) {
    e.preventDefault();

    const d = await getDoc(doc(db, "user_details", user.uid));
    addDoc(collection(db, "transaction_hist"), {
      userid: form.values.userid,
      amount: form.values.amount,
      from: d.data().userid,
      date: new Date(),
      type: form.values.type,
    }).then(() => {
      form.reset();
      console.log("Successfully added Transaction");
    });
  }

  const form = useForm({
    initialValues: {
      userid: "",
      amount: "",
      type: "",
    },

    validate: {},
  });

  return (
    <>
      <Head>
        <title>Transactions</title>
      </Head>
      <div className="userpage">
        <AppShell
          padding="md"
          navbar={<NavbarSimpleAdmin />}
          header={<HeaderMegaMenu />}
        >
          <div className="idcard">
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Title
                align="center"
                sx={(theme) => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontWeight: 700,
                })}
              >
                Add Transaction
              </Title>

              <NumberInput
                label="User Id"
                placeholder="User Id"
                {...form.getInputProps("userid")}
                mt="md"
                required
              />
              <NumberInput
                label="Amount"
                placeholder="Amount"
                {...form.getInputProps("amount")}
                mt="md"
                required
              />
              <Select
                label="Type"
                mt="md"
                placeholder="Type"
                data={[
                  { value: 'payin', label: 'Pay In' },
                  { value: 'payout', label: 'Pay Out' },
                ]}
                {...form.getInputProps("type")}
              />

              <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt="xl" type="submit" onClick={addAmount}>
                Update Details
              </Button>
            </Paper>
            <Space />
            <Paper withBorder shadow="md" p={5} mt={30} radius="md">
              <Center><h2>Transaction History</h2></Center>
              <TableScrollAreaTransactionAdmin />
            </Paper>
          </div>
        </AppShell>
      </div>
    </>
  );
}
