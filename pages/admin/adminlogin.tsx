import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { auth, db } from "../../firebase";
import { isAdmin } from "../../firebase/functions";


export default function AdminLogin() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user && isAdmin(user)) router.push("/admin/portfolio");
    if (user && !isAdmin(user)) router.push('/auth/login');
  });

  const form = useForm({
    initialValues: {
      userid: "",
      password: "",
    },

    validate: {
      userid: (value: string) =>
        value.length != 6 ? "ClientId must have 6 characters" : null,
    },
  });
  //Login function
  const loginWithUserIdandPassword = async () => {
    const useridl = parseInt(form.values.userid);
    const password = form.values.password;
    let email;
    const q = query(
      collection(db, "admin_details"),
      where("userid", "==", useridl)
    );
    const d = await getDocs(q);
    if (d.empty) {
      alert("Wrong Client ID");
    } else {
      d.forEach((docSnap) => {
        email = docSnap.data().email;

        signInWithEmailAndPassword(auth, email, password)
          .then((cred) => {
            console.log("Successfully Logged In");
            router.push("/admin/portfolio");
          })
          .catch((err) => {
            alert("Wrong Password");
          });
      });
    }
  };
  function loginFunction(e: any) {
    e.preventDefault();
    form.validate();
    loginWithUserIdandPassword();
  }

  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <HeaderMegaMenu />
      <div className="authpage">
        <Container size={420}>
          <Title
            align="center"
            color="white"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 1200,
            })}
          >
            Admin Login
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="AdminId"
              placeholder="000000"
              required
              {...form.getInputProps("userid")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps("password")}
            />
            <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt="xl" onClick={loginFunction}>
              Log in
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}
