import { AppShell, Center, Container, Paper, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useViewportSize } from "@mantine/hooks";
import { DocumentData } from "firebase/firestore";
import { detectContentType } from "next/dist/server/image-optimizer";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimple } from "../../components/Sidebar";
import { TableScrollAreaBank } from "../../components/Tables/BankDetails";
import { auth } from "../../firebase";
import { getData } from "../../firebase/functions";
import styles from "../../styles/user/dashboard.module.scss";
import Router from "next/router";
import Link from 'next/link'
import Image from "next/image";
import qr from "../../public/assets/images/qr.jpeg"


export default function Bank() {
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if (!user) {
      return () => {
        Router.push('/auth/login')
      }
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Bank</title>
      </Head>
      <div className="userpage">
        <AppShell
          padding="md"
          navbar={<NavbarSimple />}
          header={<HeaderMegaMenu />}
        >
          <div className="idcard">
            <Paper withBorder shadow="md" p="" radius="md">

              <h2>Payment</h2>

              {/* <Image src={qr} style={{ height: "80%", width: "150px" }} /> */}

              <Link href=''><h3>Click Here to Pay</h3></Link>

            </Paper>
            <Paper withBorder shadow="md" pl={30} pr={30} pt={5} mt={30} radius="md">
              <Center><h2>Bank Details</h2></Center>
              <TableScrollAreaBank />
            </Paper>
          </div>
        </AppShell>
      </div>
    </div>
  );
}
