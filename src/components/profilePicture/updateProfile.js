// UserProfile.js
import { Box, Center, Text, Avatar, Button, Input } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useState, useRef } from "react";

const UserProfile = ({ user }) => {
  const [profileImage, setProfileImage] = useState(
    user ? user.profileImage : ""
  );
  const fileInputRef = useRef(null);

  const handleUploadImage = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    // Implement logic to handle the uploaded file here, e.g., upload it to a server
    const url = URL.createObjectURL(uploadedFile);
    setProfileImage(url);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleUploadImage,
    accept: "image/*",
    multiple: false,
  });

  return (
    <Box>
      <Center>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Avatar size="lg" 
		  name={user ? user.name : ""} 
		  src={profileImage}
		  onClick={() => fileInputRef.current.click()} />
        </div>
      </Center>
      <Text mt={4} textAlign="center">
        {user ? user.name : ""}
      </Text>
      <Input
        type="file"
        display="none"
        onChange={(e) => handleUploadImage(e.target.files)}
        ref={fileInputRef}
      />
    </Box>
  );
};

export default UserProfile;
