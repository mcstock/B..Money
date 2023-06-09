import {
  AppShell,
  Button,
  Container,
  FileInput,
  NumberInput,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconAt,
  IconLock,
  IconPhone,
  IconUpload,
  IconUser,
  IconWriting,
} from "@tabler/icons";
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
        <title>Profile</title>
      </Head>
      <div className="userpage">
        <AppShell
          padding="md"
          navbar={<NavbarSimple />}
          header={<HeaderMegaMenu />}
        >
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Profile
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Here is your profile Details{" "}
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            {data && (
              <>
                <TextInput
                  label="Name"
                  icon={<IconUser size={14} />}
                  value={data.name}
                  color="white"
                />
                <TextInput
                  label="Email"
                  icon={<IconAt size={14} />}
                  mt="md"

                  value={data.email}
                  color="white"
                />
                <TextInput
                  label="Mobile No"
                  minLength={10}
                  maxLength={10}
                  icon={<IconPhone size={14} />}
                  mt="md"
                  value={data.mobile}
                  color="white"
                />
                <TextInput
                  label="Aadhar Number"
                  minLength={12}
                  maxLength={12}
                  icon={<IconPhone size={14} />}
                  mt="md"
                  value={data.aadhar}
                  color="white"
                />
                <TextInput
                  label="PAN"
                  icon={<IconWriting size={14} />}
                  mt="md"
                  value={data.pan}
                  color="white"
                />
              </>
            )}
          </Paper>
        </AppShell>
      </div>
    </div>
  );
}