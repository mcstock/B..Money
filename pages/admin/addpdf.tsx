import {
  AppShell,
  Button,
  FileInput,
  NumberInput,
  Paper,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { assignRef } from "@mantine/hooks";
import { IconUpload } from "@tabler/icons";
import { FirebaseError } from "firebase/app";
import Router from "next/router";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { url } from "inspector";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderMegaMenu from "../../components/Header";
import { NavbarSimpleAdmin } from "../../components/SidebarAdmin";
import { auth, db, storage } from "../../firebase";
import { getData } from "../../firebase/functions";
import styles from "../../styles/user/dashboard.module.scss";
import { isAdmin } from "../../firebase/functions";


export default function AddPdf() {
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if (user) {
      if (!isAdmin(user)) {
        return () => {
          Router.push("/auth/login");
        }
      };
    }
    else {
      Router.push("/auth/login");
    }
  });

  async function addPDF(e) {
    e.preventDefault();

    const pdffileRef = ref(storage, `pdfFiles/${form.values.pdffile.name}`)
    const uploadPdf = await uploadBytes(pdffileRef, form.values.pdffile)

    const pdfdownurl = await getDownloadURL(pdffileRef);
    addDoc(collection(db, 'pdf_details'), {
      to: form.values.userid,
      down_url: pdfdownurl,
      date: form.values.date,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        form.reset();
        alert("Added Successfully");
      })
      .catch((err) => alert(err))
  }

  const form = useForm({
    initialValues: {
      userid: "",
      date: "",
      pdffile: null,
    },

    validate: {},
  });
  return (
    <div>
      <Head>
        <title>Add PDF</title>
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
                Add PDF
              </Title>

              <NumberInput
                label="Client Id"
                placeholder="Enter Client Id"
                {...form.getInputProps("userid")}
                mt="md"
                required
              />
              <DatePicker
                label="Date"
                placeholder="Date"
                mt="md"
                required
                {...form.getInputProps("date")}
              />
              <FileInput
                mt="md"
                label="PDF Report File"
                placeholder="Upload Your PDF file"
                {...form.getInputProps("pdffile")}
                required
                icon={<IconUpload size={14} />}
              />

              <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt="xl" type="submit" onClick={addPDF}>
                Update Details
              </Button>
            </Paper>
          </div>
        </AppShell>
      </div>
    </div>
  );
}
