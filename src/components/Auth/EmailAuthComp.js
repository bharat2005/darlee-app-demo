import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, HelperText, TextInput } from "react-native-paper";
import { useAuth } from "../../contexts/AuthContextProvider";
import { router, useFocusEffect } from "expo-router";
import { useRef } from "react";
import MyColors from "../../constants/MyColors";

const EmailAuthComp = ({ origin }) => {
  const navigationRef = useRef(false);
  const { emailRegister, emailLogin } = useAuth();

  useFocusEffect(
    useCallback(() => {
      navigationRef.current = false;
    })
  );

  const validation = Yup.object({
    email: Yup.string()
      .required("Email is Required*")
      .email("Should be a valid email address"),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Passowrd should be atlest 6 letters long"),
  });

  const handleFormik = async (values) => {
    if (origin === "login") {
      await emailLogin(values?.email, values?.password);
    } else {
      await emailRegister(values?.email, values?.password);
    }
  };
  return (
    <View style={{ paddingHorizontal: 18 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validation}
        onSubmit={handleFormik}
        validateOnMount
      >
        {({
          handleBlur,
          handleChange,
          handleReset,
          handleSubmit,
          touched,
          errors,
          values,
          isSubmitting,
          isValid,
        }) => (
          <View
            style={{ backgroundColor: "white", padding: 24, borderRadius: 12 }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Outfit-Bold",
                color: "rgb(34, 34, 34)",
              }}
            >
              {origin === "login" ? "Login" : "Register"}
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 34,
                fontFamily: "Outfit-Light",
                color: "rgb(87, 87, 87)",
              }}
            >
              Please enter your email and password to{" "}
              {origin === "login" ? "login" : "register"}
            </Text>

            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  lineHeight: 34,
                  fontFamily: "Outfit-Light",
                  color: "rgb(87, 87, 87)",
                }}
              >
                Email Address <Text style={{ color: "red" }}>Required*</Text>
              </Text>

              <TextInput
                    theme={{colors:{primary:MyColors.PRIMARY}}}
              style={{backgroundColor:(!!errors.email && touched.email === true) ? ' rgba(255, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'}}
                placeholder="Enter email address"
                mode="outlined"
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                value={values.email}
                error={!!errors.email && touched.email === true}
              />
              <HelperText
                style={{ color: "red" }}
                visible={!!errors.email && touched.email === true}
              >
                {errors?.email}
              </HelperText>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  lineHeight: 34,
                  fontFamily: "Outfit-Light",
                  color: "rgb(87, 87, 87)",
                }}
              >
                Password <Text style={{ color: "red" }}>
                  Required*
                </Text>
              </Text>

              <TextInput
                secureTextEntry
                theme={{colors:{primary:MyColors.PRIMARY}}}
                style={{backgroundColor:(!!errors.password && touched.password === true) ? ' rgba(255, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'}}
                placeholder="enter password"
                mode="outlined"
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                value={values.password}
                error={!!errors.password && touched.password === true}
              />
              <HelperText
                style={{ color: "red" }}
                visible={!!errors.password && touched.password === true}
              >
                {errors?.password}
              </HelperText>
            </View>

            <Button
            
              mode="contained"
              labelStyle={{
                fontSize: 14,
                fontWeight: "400",
                fontFamily: "Outfit-Light",
                color: (isSubmitting || !isValid) ? 'gray' : "white",
              }}
              loading={isSubmitting}
              disabled={isSubmitting || !isValid}
              onPress={handleSubmit}
              theme={{ roundness: 2 }}
              style={{ backgroundColor: (isSubmitting || !isValid) ? 'lightgray' : MyColors.DARK_GREY , marginTop: 24}}
            >
              {origin === "login" ? "Login" : "Register"}
            </Button>

            {origin === "login" && (
              <Button
                mode="text"
                labelStyle={{
                  fontSize: 14,
                  fontWeight: "400",
                  lineHeight: 34,
                  fontFamily: "Outfit-Light",
                  color: "rgb(87, 87, 87)",
                }}
                onPress={() => {
                  if (navigationRef.current) return;
                  navigationRef.current = true;
                  router.push("/forgetPass");
                }}
              >
                <Text style={{ textAlign: "center" }}>Forget Password?</Text>
              </Button>
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EmailAuthComp;
