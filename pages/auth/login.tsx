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

export default function Login() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) router.push("/user/dashboard");
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
  const loginWithUserIdandPassword = async () => {
    const useridl = parseInt(form.values.userid);
    const password = form.values.password;
    let email;

    const q = query(
      collection(db, "user_details"),
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
            router.push("/user/dashboard");
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
        <title>Login</title>
      </Head>
      <HeaderMegaMenu />
      <div className="authpage">
        <Container size={420}>
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Welcome back!
          </Title>
          <Text color="white" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor<"a">
              href="signup"
              size="sm"
              style={{ color: "#EF4123" }}
              onClick={(event) => router.push('/auth/signup')}
            >
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="ClientId"
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
            <Group position="apart" mt="md">
              <Anchor<"a">
                style={{ textDecoration: "none", color: "red" }}
                onClick={(event) => router.push('/auth/forgot')}
                href="#"
                size="sm"
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt="xl" onClick={loginFunction}>
              Log in
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}




































