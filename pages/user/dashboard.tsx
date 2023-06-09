import { AppShell, Container, Group, Paper, Space } from "@mantine/core";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimple } from "../../components/Sidebar";
import { auth, db } from "../../firebase";
import styles from "../../styles/user/dashboard.module.scss";
import Router from "next/router";

async function getData(user: any) {
  const d = await getDoc(doc(db, "user_details", user.uid));
  return d.data();
}

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if (user) {
      getData(user).then((res) => {
        if (res) setData(res);
      });
      console.log(data);
    }
    if (!user) {
      return () => {
        Router.push('/auth/login')
      }
    }
  })

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="userpage">
        <AppShell
          padding="md"
          navbar={<NavbarSimple />}
          header={<HeaderMegaMenu />}
        >
          <div className={styles.container}>
            <div className={styles.main_cont}>
              {data && (
                <>
                  <div className="dashboard">
                    <div className="usercard">

                      <div className={styles.top_cont}>
                        <img src={data.profpic} id="userimg"></img>
                        <div className={styles.bottom_cont}>
                          <div className={styles.details} id="userdetails">Name : {data.name} </div>
                          <div className={styles.details} id="userdetails">Client Id : {data.userid}</div>
                          <div className={styles.details} id="userdetails">Mobile : {data.mobile}</div>
                          <div className={styles.details} id="userdetails">Email : {data.email}</div>
                          <div className={styles.details} id="userdetails">Aadhar : {data.aadhar}</div>
                          <div className={styles.details} id="userdetails">PAN : {data.pan}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </AppShell>
      </div>
    </div>
  );
}
