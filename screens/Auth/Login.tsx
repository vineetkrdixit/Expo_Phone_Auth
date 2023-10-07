import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppImages } from "../../assets";
import { Input } from "@ui-kitten/components";
import {
  PhoneAuthProvider,
  getAuth,
  signInWithCredential,
} from "firebase/auth";
;
import app from "../../firebaseConfig"
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

const Login = () => {
  const auth = getAuth(app);
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState("");
  const [Otp, setOtp] = React.useState(0);
  const handlePhoneNumber = (e) => {
    setPhoneNumber(`+91${e}`);
  };
  const handleOtp = (e) => {
    setOtp(e);
  };

  const handleRegister = async () => {
    try {
    //   Request a verification code via SMS
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier?.current
      );
      setVerificationId(verificationId)
      // You can also send the verification code via SMS or email
      // Send code via SMS or email using verificationId
    } catch (error) {
      console.error("Error sending verification code:", error);
    }
  };

  const handleVerifyCode = async (code) => {
    try {
      // Sign in with the verification code
      const credential = PhoneAuthProvider.credential(verificationId, code);
      console.log(credential,"credential")
      await signInWithCredential(auth, credential);

      // User is signed in
      console.log("User signed in:", auth.currentUser);
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  console.log(phoneNumber, "phoneNumber");
  return (
    <>
      <FirebaseRecaptchaVerifierModal
      ref={recaptchaVerifier}
      firebaseConfig={app.options}
    />
      <StatusBar style={"dark"} />
      <View style={{ flex: 1, backgroundColor: "#2d2e2e" }}>
        <ImageBackground
          source={AppImages.background}
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 50, height: 50 }}>
            <Text style={{ fontSize: 28, color: "#9643FF" }}>Chat App</Text>
          </View>
          <ImageBackground
            source={AppImages.Elipses}
            style={{
              flex: 1,
              position: "absolute",
              top: "40%",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <ImageBackground
              source={AppImages.AppIcon}
              style={{
                position: "absolute",
                left: "50%",
                transform: [{ translateX: -70 }],
                width: 150,
                height: 150,
                top: -70,
              }}
            ></ImageBackground>
          </ImageBackground>
        </ImageBackground>
        <View
          style={{
            position: "absolute",
            bottom: "20%",
            width: "100%",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#000",
              paddingVertical: 10,
              fontWeight: "400",
            }}
          >
            {!verificationId ? "Enter your Mobile Number" : "Enter OTP"}
          </Text>
          {!verificationId ? (
            <TextInput
              style={{
                paddingVertical: 5,
                fontSize: 25,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
              }}
              keyboardType="phone-pad"
              inlineImageLeft="search"
              maxLength={10}
              onChangeText={handlePhoneNumber}
            />
          ) : (
            <TextInput
              style={{
                paddingVertical: 5,
                fontSize: 25,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
              }}
              keyboardType="phone-pad"
              inlineImageLeft="search"
              maxLength={10}
              onChangeText={handleOtp}
            />
          )}
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: "#000",
              marginTop: 40,
            }}
            onTouchEnd={
              !verificationId ? handleRegister :() => handleVerifyCode(Otp)
            }
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                letterSpacing: 0.25,
                color: "white",
              }}
            >
              {!verificationId?"Register":"Submit Otp"}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Login;
