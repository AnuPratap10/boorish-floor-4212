import React, { useContext } from "react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Container,
  Checkbox,
  VStack,
  Heading,
  HStack,
  Text,
  Box,
  // FormErrorMessage,
} from "@chakra-ui/react";

import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import style from "./Style.Module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormText from "./FormText";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = ({ onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Email or Username required")
          .min(6, "Username is to sort")
          .max(18, "Username is to long"),
        password: Yup.string()
          .required("Password required")
          .min(8, "Length is to sort"),
      })}
      onSubmit={(values, action) => {
        // alert(JSON.stringify(values, null, 2));
        console.log(action);
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((res) => {
            auth.handleLogin(res.token);

            if (res.token) {
              alert("Logged in");
              console.log("sahi ja raha hai");
            } else {
              console.log("galat ho rah ahai");
            }

            setOpen(false);
          })
          .catch((error) => {
            alert("Login Failed try again");
            console.log("Server Error");
            setOpen(false);
          });
        action.resetForm();
      }}
    >
      {(formik) => (
        <>
          <Button variant="link" colorScheme="white" onClick={onOpen}>
            {auth.state.isAuth ? `Anu Pratap` : "Login"}
            {/* {auth.state.isAuth ? `Token ${auth.state.token}` : "Login"} */}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />

            <ModalContent
              rounded="none"
              className={style.modalhead}
              marginTop="6.5rem"
            >
              <Container maxW="82%">
                <VStack
                  spacing={4}
                  align="flex-start"
                  w="full"
                  as="form"
                  onSubmit={formik.handleSubmit}
                >
                  <VStack align={["flex - start", "center"]} w="full">
                    <Heading
                      fontSize="28px"
                      lineHeight="42px"
                      fontWeight="400"
                      fontFamily="lato"
                      mt="2rem"
                    >
                      <img style={{ width: "60px", display: "inline", marginLeft: "30%" }} src="https://account.leadiq.com/common/img/logo-stripe.529f0a03.png" alt="" />
                      <br />
                      <img style={{ width: "200px", marginTop: "20px" }} src="https://account.leadiq.com/common/img/google-sign-in-2x.56f00e35.png" alt="" />
                    </Heading>
                  </VStack>
                  {/* Input Field */}
                  <FormText name="username" placeholder="Enter your email" />
                  <FormText
                    name="password"
                    placeholder="Enter Your Password"
                    type="password"
                  />

                  <VStack align={["flex - start", "center"]} w="full">



                  </VStack>
                  <Button
                    type="submit"
                    w="full"
                    backgroundColor="#3cc6dc"
                    _hover={{
                      backgroundColor: "#2f9bac",
                    }}
                  >
                    Login
                  </Button>
                  <VStack align={["flex - start", "center"]} w="full">

                  </VStack>

                  <HStack
                    w="100%"
                    justifyContent="center"
                    paddingBottom="2.5rem"
                  >
                    <Button size="xs" variant="link" color="#3cc6dc">
                      I forgot my password
                    </Button>

                    <Button size="xs" variant="link" color="#3cc6dc">
                      <img style={{ width: "15px", marginRight: "10px" }} src="https://account.leadiq.com/common/img/lock-solid.fcbf0e55.svg" alt="" />
                      Sign in with SOS
                    </Button>
                  </HStack>
                </VStack>
              </Container>
            </ModalContent>
          </Modal>
        </>
      )}
    </Formik>
  );
};

export default Login;
