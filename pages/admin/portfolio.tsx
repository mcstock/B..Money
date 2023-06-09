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
import {useRouter} from "next/router";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimpleAdmin } from "../../components/SidebarAdmin";
import { TableScrollAreaPdf } from "../../components/Tables/PdfTable";
import { auth, db, storage } from "../../firebase";
import styles from "../../styles/user/dashboard.module.scss";
import { TableScrollAreaPdfAdmin } from "../../components/Tables/TableScrollAreaPdfAdmin";
import { isAdmin } from "../../firebase/functions";

export default function Reports() {
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if(user){
    if(!isAdmin(user)){
      return()=>{
      router.push("/auth/login");}
    };}
    else{
      router.push("/auth/login");
    }
  });

  return (
    <div>
      <Head>
        <title>Portfolios</title>
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
            Table Details
            <TableScrollAreaPdfAdmin />
          </Title>
        </Paper>
        </div>
      </AppShell>
      </div>
    </div>
  );
}
