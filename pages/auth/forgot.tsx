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
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
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

  //Reset Pass
  async function resetPass() {
    const useridl = parseInt(form.values.userid);
    let email;

    const q = query(
      collection(db, "user_details"),
      where("userid", "==", useridl)
    );
    const d = await getDocs(q);
    d.forEach((docSnap) => {
      console.log(docSnap.data());
      email = docSnap.data().email;
    });

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("reset email sent successfully, Check in your spam folder if not found");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const form = useForm({
    initialValues: {
      userid: "",
    },

    validate: {
      userid: (value: string) =>
        value.length != 6 ? "ClientId must have 6 characters" : null,
    },
  });

  return (
    <>
      <Head>
        <title>Forgot Password</title>
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
            Reset Password
          </Title>
          <Text color="white" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor<"a">
              href="signup"
              size="sm"
              style={{ color: "#EF4123" }}
              onClick={(event) => event.preventDefault()}
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

            <Group position="apart" mt="md"></Group>
            <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt="xl" onClick={resetPass}>
              Sent Reset Link
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}
