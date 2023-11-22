import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProfileCard = () => {
  return (
    <>
      <Center paddingY={1}>
        <Box
          maxW={"350px"}
          w={"full"}
          boxShadow={"2xl"}
          bg={"white"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            mb={4}
            src={
              "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/357710445_3125878341053480_5214693532527175189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=SorudGOR2d8AX_TN5qC&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBu5ZvTre0iesS63iTaUxl2dTU6wzT263kEuCoXYw2juw&oe=64FE7BF9"
            }
          />
          <Heading>Liucuxiu</Heading>
          <Text>@liucuxiu</Text>
          <Text>Software Engineer</Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge px={2} py={1} fontWeight={"400"}>
              #art
            </Badge>
            <Badge px={2} py={1} fontWeight={"400"}>
              #art
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default ProfileCard;
