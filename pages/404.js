import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading align="center" as="h1">
        Not found
      </Heading>
      <Text align="center">
        The page you&apos;re looking for was not found.
      </Text>
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button
            className={`theme-btn--${useColorModeValue('light', 'dark')}`}
            colorScheme="blue"
          >
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
