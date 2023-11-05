import {
  Modal,
  Button,
  Box,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUserSecret, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function ModalLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUsers, setIsUsers] = useState(false);

  const onClose = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleLogin = (role) => {
    if (role === 2) {
      setIsAdmin(true);
      setIsUsers(false);
    } else if (role === 1) {
      setIsAdmin(false);
      setIsUsers(true);
    }

    openModal();
    localStorage.setItem("roleId", role);
    console.log(`Clicked with value: ${role}`);
  };

  return (
    <Box>
      <Button
      fontWeight="bold"
        variant="solid"
        bgColor="#3C891C"
        size={"sm"}
        w="120px"
        h="40px"
        onClick={() => handleLogin("login")}
      >
        Log In
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#060E03">
          <ModalHeader fontSize="md" textColor="white" textAlign="center">
            You want to Login as ?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody colorScheme="white" textAlign="center">
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Box w="40em" m={2}>
                <Link to="/login">
                  <Button
                    h="5em"
                    background="#374431"
                    variant="solid"
                    onClick={() => {
                      handleLogin(2);
                      onClose();
                    }}
                  >
                    <FaUserSecret size={50} />
                  </Button>
                  <Box m={2} color="white">
                    {isAdmin}
                    <Text fontWeight="semibold">Anda adalah E.O</Text>
                  </Box>
                </Link>
              </Box>
              <Box w="40em" m={2}>
                <Link to="/login">
                  <Button
                    h="5em"
                    background="#374431"
                    onClick={() => {
                      handleLogin(1);
                      onClose();
                    }}
                  >
                    <FaUser size={50} />
                  </Button>
                  <Box m={2} color="white">
                    {isUsers}
                    <Text fontWeight="semibold">Anda adalah User.</Text>
                  </Box>
                </Link>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ModalLogin;
