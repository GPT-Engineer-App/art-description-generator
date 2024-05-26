import { useState } from "react";
import { Container, VStack, Input, Textarea, Button, Text, Select, Image, Box, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [artistName, setArtistName] = useState("");
  const [artworkName, setArtworkName] = useState("");
  const [technique, setTechnique] = useState("");
  const [year, setYear] = useState("");
  const [size, setSize] = useState("");
  const [bio, setBio] = useState("");
  const [language, setLanguage] = useState("en");
  const [imageLink, setImageLink] = useState("");
  const [description, setDescription] = useState("");

  const generateDescription = () => {
    const desc = `
      <h2>${artworkName} by ${artistName}</h2>
      <p><strong>Technique:</strong> ${technique}</p>
      <p><strong>Year of Production:</strong> ${year}</p>
      <p><strong>Size:</strong> ${size}</p>
      <p><strong>About the Artist:</strong> ${bio}</p>
      <p><strong>Language:</strong> ${language}</p>
      ${imageLink && `<img src="${imageLink}" alt="${artworkName} by ${artistName}" />`}
    `;
    setDescription(desc);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <FormControl>
          <FormLabel>Artist Name</FormLabel>
          <Input value={artistName} onChange={(e) => setArtistName(e.target.value)} placeholder="Enter artist name" />
        </FormControl>
        <FormControl>
          <FormLabel>Artwork Name</FormLabel>
          <Input value={artworkName} onChange={(e) => setArtworkName(e.target.value)} placeholder="Enter artwork name" />
        </FormControl>
        <FormControl>
          <FormLabel>Painting Technique</FormLabel>
          <Input value={technique} onChange={(e) => setTechnique(e.target.value)} placeholder="Enter painting technique" />
        </FormControl>
        <FormControl>
          <FormLabel>Year of Production</FormLabel>
          <Input value={year} onChange={(e) => setYear(e.target.value)} placeholder="Enter year of production" />
        </FormControl>
        <FormControl>
          <FormLabel>Size of Painting</FormLabel>
          <Input value={size} onChange={(e) => setSize(e.target.value)} placeholder="Enter size of painting" />
        </FormControl>
        <FormControl>
          <FormLabel>Info about the Painter (Bio)</FormLabel>
          <Textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter bio" />
        </FormControl>
        <FormControl>
          <FormLabel>Language</FormLabel>
          <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Link to Image</FormLabel>
          <Input value={imageLink} onChange={(e) => setImageLink(e.target.value)} placeholder="Enter link to image" />
        </FormControl>
        <Button leftIcon={<FaRocket />} colorScheme="teal" onClick={generateDescription}>
          Generate Description
        </Button>
        {description && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text dangerouslySetInnerHTML={{ __html: description }} />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
