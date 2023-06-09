import { AppShell, Button, Group, NumberInput, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { addDoc, collection, doc, DocumentData, getDoc } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimple } from "../../components/Sidebar";
import { auth, db } from "../../firebase";
import { getData } from "../../firebase/functions";
import styles from "../../styles/user/dashboard.module.scss";
import Router, { useRouter } from "next/router";

export default function Cash() {
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();
  const router = useRouter()
  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  });

  async function payout(e) {
    e.preventDefault();

    const d = await getDoc(doc(db, "user_details", user.uid));
    addDoc(collection(db, "transaction_hist"), {
      amount: formpayout.values.amount,
      userid: d.data().userid,
      type: formpayout.values.type,
      date: formpayout.values.date,
    }).then(() => {
      formpayout.reset();
      alert("Successfully Pay Out");
    });
  }
  async function payin(e) {
    e.preventDefault();

    const d = await getDoc(doc(db, "user_details", user.uid));
    addDoc(collection(db, "transaction_hist"), {
      amount: formpayin.values.amount,
      userid: d.data().userid,
      type: formpayin.values.type,
      date: formpayin.values.date,
    }).then(() => {
      formpayin.reset();
      alert("Successfully Pay In");
    });
  }
  const formpayout = useForm({
    initialValues: {
      amount: "",
      type: "payout",
      date: new Date(),
    },

    validate: {},
  });
  const formpayin = useForm({
    initialValues: {
      amount: "",
      type: "payin",
      date: new Date(),
    },

    validate: {},
  });
  return (
    <div className="cash">

      <Paper withBorder shadow="md" p="" radius="md" m="xl">
        <h2>Pay In</h2>
        <NumberInput
          {...formpayin.getInputProps("amount")}
          placeholder="Amount"
          label="Enter Amount for Pay In"
          withAsterisk
        />

        <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt={10} onClick={payin}>
          Pay In
        </Button>
      </Paper>
      <Paper withBorder shadow="md" p="" radius="md" m="xl">
        <h2>Pay Out</h2>
        <NumberInput
          {...formpayout.getInputProps("amount")}
          placeholder="Amount"
          label="Enter Amount for Pay Out"
          withAsterisk
        />
        <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt={10} onClick={payout}>
          Pay Out
        </Button>
      </Paper>
    </div>
  );
}
