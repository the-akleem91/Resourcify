import React , {useState} from 'react';
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Button,
  Divider,
  HStack,
  Grid,
  Heading,
  Link,
  Text,
  Input
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { BsFillCircleFill} from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import axios from 'axios';

const Profile = () => {

    const [userDetails, setUserDetails] = useState(null);
    const [avatar, setAvatar] = useState('/path_to_your_image.jpg');
    const inputFileRef = useRef(null);
    let d= useParams().id;
    console.log("id : ",d);
    const username= d;
    console.log(userDetails);

    const fetchUserDetails = async (username) => {
        try {
            console.log("hello, are you here");
            const response = await axios.get(`http://localhost:3000/auth/user/${username}`);
            if (response.status === 200) {
                const userDetails = response.data;
                console.log('User details fetched successfully:', userDetails);
                // Set the user details in the state
                setUserDetails(userDetails);
            } else {
                console.error('Failed to fetch user details:', response.data.message);
                setError(response.data.message); // Set the error message from the response
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                setError(error.response.data.message);
            }
        }
    };

    useEffect(() => {
        fetchUserDetails(username);
    }, [username]);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        console.log('Selected file:', file);
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setAvatar(e.target.result);
            uploadAvatar(file); // Call function to upload image to backend
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please select a valid image file.');
        }
      };
    
      const uploadAvatar = async (file) => {
        const formData = new FormData();
        formData.append('avatar', file);
        formData.append('username', 'your_username'); // Replace 'your_username' with the actual username
        console.log('Form data:', formData);
    
        try {
          const response = await axios.post('http://localhost:5000/users/upload-avatar', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          // Assuming the response contains the updated avatar URL
          if (response.data && response.data.avatarUrl) {
            setAvatar(response.data.avatarUrl);
          }
          console.log('Avatar uploaded successfully:', response.data);
        } catch (error) {
          console.error('Error uploading avatar:', error);
        }
      };

  return (
    <Box bg="gray.100" color="black" minH="100vh" p={8}>
      <Flex direction="column" align="center" maxW="1000px" mx="auto">
        <Input
          type="file"
          ref={inputFileRef}
          display="none"
          onChange={handleAvatarChange}
        />
        <Avatar
          size="2xl"
          src={avatar}
          name="Jayant Joshi"
          cursor="pointer"
          onClick={() => inputFileRef.current.click()}
        />
        {userDetails.map(user=> (
        <HStack>
          <Heading mt={4}>Jayant Joshi</Heading>
          <Text>@ {user.username}· he/him</Text>
          <Text mt={2} textAlign="center">
            1st-year undergrad at Dr B R Ambedkar NIT Jalandhar. 5-star Python coder.
            Adaptable and collaborative, merging academic rigor with coding proficiency.
          </Text>
          <HStack mt={4}>
            <Icon as={FaGithub} boxSize={6} />
            <Text>1 follower · 1 following</Text>
          </HStack>
        </HStack>
        ))};
        <Button mt={4} colorScheme="teal" variant="outline">
          Edit profile
        </Button>
        <Divider my={8} />
        <Heading size="lg" textAlign="center" mb={4}>
          Pinned
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {[
            { title: 'login', description: 'JavaScript', color: 'yellow.500', url: '#' },
            { title: 'AMS-with-TimeTable', description: 'JavaScript', color: 'yellow.500', url: '#' },
            { title: 'portfolio', description: 'CSS', color: 'purple.500', url: '#' },
            { title: 'Resourcify', description: 'JavaScript', color: 'yellow.500', url: '#' },
            { title: 'meshery', description: 'JavaScript', color: 'yellow.500', url: '#' },
          ].map((repo, index) => (
            <Box
              key={index}
              p={4}
              bg="gray.300"
              borderRadius="md"
              boxShadow="md"
            >
              <Link href={repo.url} isExternal>
                <Heading size="md">{repo.title}</Heading>
                <HStack mt={2}>
                  <Icon as={BsFillCircleFill} color={repo.color} boxSize={2} />
                  <Text>{repo.description}</Text>
                </HStack>
              </Link>
            </Box>
          ))}
        </Grid>
        <Box mt={8} textAlign="center">
          <Heading size="md">117 contributions in the last year</Heading>
          <Box mt={4} bg="gray.800" p={4} borderRadius="md" w="full">
            <Text>Contribution graph would be here.</Text>
          </Box>
        </Box>
        
      </Flex>
    </Box>
  );
};

export default Profile;
