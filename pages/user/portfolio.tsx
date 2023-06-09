import {
  AppShell,
  Button,
  FileInput,
  NumberInput,
  Paper,
  TextInput,
  Title,
} from "@mantine/core";

import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimple } from "../../components/Sidebar";
import { TableScrollAreaPdf } from "../../components/Tables/PdfTable";
import { auth, db, storage } from "../../firebase";
import { getData } from "../../firebase/functions";
import styles from "../../styles/user/dashboard.module.scss";
import Router from "next/router";
import { TableScrollAreaPdfAdmin } from "../../components/Tables/TableScrollAreaPdfAdmin";

export default function Reports() {
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
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="userpage">
        <AppShell
          padding="md"
          navbar={<NavbarSimple />}
          header={<HeaderMegaMenu />}
        >
          <div style={{ width: '70vw', textAlign: 'center', paddingLeft: '5vw' }}>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Title
                align="center"
                sx={(theme) => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontWeight: 700,
                })}
              >
                Table Details
                <TableScrollAreaPdf />
              </Title>
            </Paper>
          </div>
        </AppShell>
      </div>
    </div>
  );
}
