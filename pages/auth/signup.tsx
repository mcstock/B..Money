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
  NumberInput,
  FileInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconAt,
  IconLock,
  IconPhone,
  IconUpload,
  IconUser,
  IconWriting,
} from "@tabler/icons";
import { RecaptchaVerifier, PhoneAuthProvider, signInWithCredential, createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderMegaMenu from "../../components/Header";
import { auth, db, storage } from "../../firebase";



export default function Signup() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter()
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      pan: "",
      aadhar: "",
      password: "",
      confirmPassword: "",
      aadharfront: null,
      aadharback: null,
      panpic: null,
      profpic: null,

    },

    validate: {
      name: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,

    },
  });
  function checkFileExtension(filename: string) {
    let extension = filename.split('.').pop();
    return extension;
  };
  async function registerUser() {
    form.validate()
    let CurrentUserId: number;
    const UserId = await getDoc(doc(db, "util_variables", "UserId"));
    const data = UserId.data()

    if (data) CurrentUserId = data.CurrentId;


    const aadharFrontFileExtension = checkFileExtension(form.values.aadharfront.name);
    const aadharBackFileExtension = checkFileExtension(form.values.aadharback.name);
    const panPicFileExtension = checkFileExtension(form.values.panpic.name);
    const profPicFileExtension = checkFileExtension(form.values.profpic.name);

    const aadharFrontStorageRef = ref(storage, `Users/${CurrentUserId}/aadharfront.${aadharFrontFileExtension}`);
    const aadharBackStorageRef = ref(storage, `Users/${CurrentUserId}/aadharback.${aadharBackFileExtension}`);
    const profPicStorageRef = ref(storage, `Users/${CurrentUserId}/profpic.${profPicFileExtension}`);
    const panPicStorageRef = ref(storage, `Users/${CurrentUserId}/panpic.${panPicFileExtension}`);

    const handleVerify = async () => {
      // Continue with user registration using the userCredential object
      const email = form.values.email;
      const pass = form.values.password;
      createUserWithEmailAndPassword(auth, email, pass)
        .then(async (cred) => {
          const user = cred.user;
          console.log(CurrentUserId);

          setDoc(doc(db, "user_details", user.uid), {
            name: form.values.name,
            email: form.values.email,
            mobile: phoneNumber,
            pan: form.values.pan,
            aadhar: form.values.aadhar,
            userid: CurrentUserId,
            admin: false,
            created_at: serverTimestamp(),
            updated_at: serverTimestamp(),
          });

          await updateDoc(doc(db, "util_variables", "UserId"), {
            CurrentId: CurrentUserId + 1,
          });

          // Upload user profile pictures to Firebase Storage
          const aadharFrontFileExtension = checkFileExtension(form.values.aadharfront.name);
          const aadharBackFileExtension = checkFileExtension(form.values.aadharback.name);
          const panPicFileExtension = checkFileExtension(form.values.panpic.name);
          const profPicFileExtension = checkFileExtension(form.values.profpic.name);

          const aadharFrontStorageRef = ref(storage, `Users/${CurrentUserId}/aadharfront.${aadharFrontFileExtension}`);
          const aadharBackStorageRef = ref(storage, `Users/${CurrentUserId}/aadharback.${aadharBackFileExtension}`);
          const profPicStorageRef = ref(storage, `Users/${CurrentUserId}/profpic.${profPicFileExtension}`);
          const panPicStorageRef = ref(storage, `Users/${CurrentUserId}/panpic.${panPicFileExtension}`);

          await uploadBytes(aadharFrontStorageRef, form.values.aadharfront);
          await uploadBytes(aadharBackStorageRef, form.values.aadharback);
          await uploadBytes(profPicStorageRef, form.values.profpic);
          await uploadBytes(panPicStorageRef, form.values.panpic);

          const aadharFrontUrl = await getDownloadURL(aadharFrontStorageRef);
          const aadharBackUrl = await getDownloadURL(aadharBackStorageRef);
          const profPicUrl = await getDownloadURL(profPicStorageRef);
          const panPicUrl = await getDownloadURL(panPicStorageRef);

          await updateDoc(doc(db, "user_details", user.uid), {
            aadharfront: aadharFrontUrl,
            aadharback: aadharBackUrl,
            panpic: panPicUrl,
            profpic: profPicUrl,
          });

          // Navigate to dashboard or user profile page
          router.push('../user/dashboard')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          router.reload();
        }
        );
    }
    handleVerify();
  };

  const handleSignUp = async () => {
    try {
      const appVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: "normal",
        badge: "bottomright",
      }, auth);
      const phone = '+91 ' + phoneNumber
      console.log(phone);
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setError(null);
    } catch (error) {
      console.log(error);
      router.reload();
    }
  };

  const handleVerifyCode = async (e: any) => {
    e.preventDefault();
    try {
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      const userCredential = await signInWithCredential(auth, credential);
      console.log("User created successfully", userCredential);
      setError(null);
      registerUser()
    }
    catch (error) {
      console.log(error);
      alert('enter correct otp')
      router.reload();
    }
  };

  const handleVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setVerificationCode(String(value));
  };

  return (
    <>
      <Head>
        <title>Register</title>
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
            Create a New Account !
          </Title>
          <Text color="white" size="sm" align="center" mt={5}>
            Be a part of B-Money Family{" "}
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit(() => form.validate())} >
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
                icon={<IconUser size={14} />}
                required
              />
              <TextInput
                label="Email"
                placeholder="you@email.com"
                {...form.getInputProps("email")}
                icon={<IconAt size={14} />}
                mt="md"
                required
              />
              <NumberInput
                label="Mobile No"
                placeholder="Enter Your Contact Number"
                minLength={10}
                maxLength={10}
                onChange={(value: number) => setPhoneNumber(String(value))}
                icon={<IconPhone size={14} />}
                mt="md"
                required
              />
              <NumberInput
                label="Aadhar Number"
                placeholder="Enter Your Aadhar Number"
                minLength={12}
                maxLength={12}
                {...form.getInputProps("aadhar")}
                icon={<IconPhone size={14} />}
                mt="md"
                required
              />
              <TextInput
                label="PAN"
                placeholder="Enter Your PAN"
                {...form.getInputProps("pan")}
                icon={<IconWriting size={14} />}
                mt="md"
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                minLength={6}
                {...form.getInputProps("password")}
                icon={<IconLock size={14} />}
                required
                mt="md"
              />
              <PasswordInput

                label="Confirm Password"
                placeholder="Confirm Your password"
                minLength={6}
                icon={<IconLock size={14} />}
                {...form.getInputProps("confirmPassword")}
                required
                mt="md"
              />
              <FileInput
                mt="md"
                label="Aadhar Front Photo"
                placeholder="Upload your Aadhar Front"
                {...form.getInputProps("aadharfront")}
                icon={<IconUpload size={14} />}
                required
              />
              <FileInput
                mt="md"
                label="Aadhar Back Photo"
                placeholder="Upload your Aadhar Back"
                {...form.getInputProps("aadharback")}
                icon={<IconUpload size={14} />}
                required
              />
              <FileInput
                mt="md"
                label="PAN Card"
                placeholder="Upload your PAN"
                {...form.getInputProps("panpic")}
                icon={<IconUpload size={14} />}
                required
              />
              <FileInput
                mt="md"
                label="User Photo"
                placeholder="Upload your User Photo"
                {...form.getInputProps("profpic")}
                icon={<IconUpload size={14} />}
                required
              />
              {!verificationId && (<div id="recaptcha-container"></div>)}
              {!verificationId && (<Button fullWidth mt="xl" type="submit"
                style={{ backgroundColor: "#EF4123" }}
                onClick={handleSignUp}
              >
                Send OTP
              </Button>)}
              {verificationId && (
                <div>
                  <TextInput
                    label="OTP"
                    placeholder="Enter Your OTP"
                    onChange={handleVerificationCodeChange}
                    value={verificationCode}
                    required
                    mt="md"
                  />
                  <Button style={{ backgroundColor: "#EF4123" }} fullWidth mt="xl" type="submit" onClick={handleVerifyCode}>Register</Button>
                </div>
              )}
            </form>
          </Paper>
        </Container>
      </div>
    </>
  );
}
