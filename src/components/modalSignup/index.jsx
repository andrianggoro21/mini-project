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
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUserSecret, FaUser } from "react-icons/fa";

function ModalRegister() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isUsers, setIsUsers] = useState(true);
  const onClose = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleRegister = (role) => {
    if (role === "admin") {
      setIsAdmin(true);
      setIsUsers(false);
    } else if (role === "users") {
      setIsAdmin(false);
      setIsUsers(true);
    }

    openModal();
  };

  return (
    <Box>
      <Button onClick={() => handleRegister("Signup")}>Register</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#060E03">
          <ModalHeader fontSize="md" textColor="white" textAlign="center">
            You want to Register as ?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody colorScheme="white" textAlign="center">
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Box w="40em" m={2}>
                <Button h="5em" background="#374431" variant="solid">
                  <FaUserSecret size="50px" />
                </Button>
                <Box m={2} color="white">
                  {isAdmin && <p>Anda adalah E.O</p>}
                </Box>
              </Box>
              <Box w="40em" m={2}>
                <Button h="5em" background="#374431">
                  <FaUser size={50} />
                </Button>
                <Box m={2} color="white">
                  {isUsers && <p>Anda adalah User.</p>}
                </Box>
              </Box>
            </Box>
          </ModalBody>
          {/* <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ModalRegister;
