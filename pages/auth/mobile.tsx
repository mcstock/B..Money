import { useState } from "react";
import { RecaptchaVerifier, PhoneAuthProvider, signInWithCredential, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignUpWithPhone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const appVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: "normal",
        badge: "bottomright",
      }, auth);
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      const userCredential = await signInWithCredential(auth, credential);
      console.log("User created successfully", userCredential);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div id="recaptcha-container"></div>
      <button onClick={handleSignUp}>Sign Up</button>
      {verificationId && (
        <div>
          <label>Verification Code</label>
          <input
            type="tel"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button onClick={handleVerifyCode}>Verify Code</button>
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}
