import {
  AppShell,
  Button,
  Center,
  NumberInput,
  Paper,
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
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimple } from "../../components/Sidebar";
import { TableScrollAreaTransaction } from "../../components/Tables/TransactionTable";
import { auth, db } from "../../firebase";
import { getData } from "../../firebase/functions";
import styles from "../../styles/user/dashboard.module.scss";
import Cash from "./cash";
import Router from "next/router";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if (!user) {
      return () => {
        Router.push('/auth/login')
      }
    }
  })

  return (
    <><Head>
      <title>Bank</title>
    </Head>
      <div className="userpage">
        <AppShell
          padding="md"
          navbar={<NavbarSimple />}
          header={<HeaderMegaMenu />}
        >
          <div className="idcard">
            <Cash />

            <Paper withBorder shadow="md" p={5} mt={30} radius="md">
              <Center><h2>Transaction History</h2></Center>
              <TableScrollAreaTransaction />
            </Paper>
          </div>
        </AppShell>
      </div>
    </>
  );
}