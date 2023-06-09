import {
  AppShell,
  Button,
  Group,
  NumberInput,
  Paper,
  Select,
  TextInput,
  Title,
} from "@mantine/core";
import Router from "next/router";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { arrayUnion, doc, DocumentData, getDoc, updateDoc } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimple } from "../../components/Sidebar";
import { auth, db } from "../../firebase";
import styles from "../../styles/user/dashboard.module.scss";


async function getData(user: any) {
  const d = await getDoc(doc(db, "user_details", user.uid));
  return d.data();
}

export default function AddBank() {

  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if (!user) {
      return () => {
        Router.push('/auth/login')
      }
    }
  })

  useEffect(() => {
    if (user) {
      getData(user).then((res) => {
        if (res) setData(res);
      });
      console.log(data);
    }
  }, [user]);

  const updateBankDetails = async (e) => {
    e.preventDefault()
    form.validate;
    if (user) {
      updateDoc(doc(db, 'user_details', user.uid), {
        bank_details: arrayUnion({
          bankname: form.values.bankname,
          accno: form.values.accno,
          acctype: form.values.acctype,
          ifsc: form.values.ifsc,
          branch: form.values.branch,

          nominee_name: form.values.nominee_name,
          nominee_relation: form.values.nominee_relation,
          nominee_dob: form.values.nominee_dob,
          nominee_contact: form.values.nominee_contact,
        })
      }).then(() => {
        form.reset();
        alert("Successfully added bank details");
      })
    } else {
      return <h2>User Not Found</h2>
    }

  }

  const form = useForm({
    initialValues: {
      bankname: "",
      accno: "",
      acctype: "",
      ifsc: "",
      branch: "",

      //nominee
      nominee_name: "",
      nominee_relation: "",
      nominee_dob: "",
      nominee_contact: "",
    },

    validate: {},
  });

  return (
    <div>
      <Head>
        <title>Add Bank</title>
      </Head>
      <div className="userpage">
        <AppShell
          padding="md"
          navbar={<NavbarSimple />}
          header={<HeaderMegaMenu />}
        >
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 700,
              })}
            >
              Add Bank Details
            </Title>
            <TextInput
              mt="md"
              placeholder="Bank Name"
              {...form.getInputProps("bankname")}
              required
            />
            <NumberInput
              placeholder="Enter Your Account Number"
              minLength={10}
              maxLength={20}
              {...form.getInputProps("accno")}
              mt="md"
              required
            />
            <NumberInput
              placeholder="Enter Your Contact Number"
              minLength={10}
              maxLength={10}
              {...form.getInputProps("mobile")}
              mt="md"
              required
            />
            <Select
              mt="md"
              placeholder="Select your Account Type"
              {...form.getInputProps("acctype")}
              data={[
                { value: "savings", label: "Savings" },
                { value: "current", label: "Current" },
              ]}
            />
            <TextInput
              mt="md"
              placeholder="IFSC Code"
              {...form.getInputProps("ifsc")}
              required
            />
            <TextInput
              mt="md"
              placeholder="Branch"
              {...form.getInputProps("branch")}
              required
            />
            <TextInput
              mt="md"
              placeholder="Nominee Name"
              {...form.getInputProps("nominee_name")}
            />
            <TextInput
              mt="md"
              placeholder="Nominee Relation"
              {...form.getInputProps("nominee_relation")}
            />
            <DatePicker
              placeholder="DOB"
              mt="md"
              {...form.getInputProps("nominee_dob")}
            />
            <NumberInput
              placeholder="Nominee Contact Number"
              minLength={10}
              maxLength={10}
              {...form.getInputProps("nominee_contact")}
              mt="md"
              required
            />
            <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt="xl" type="submit"
              onClick={updateBankDetails}
            >
              Update Details
            </Button>
          </Paper>
        </AppShell>
      </div>
    </div>
  );
}
