import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoStackoverflow,
  IoLogoLinkedin
} from 'react-icons/io5'
import Image from 'next/image'
import thumbPost1 from '../public/images/posts/2.jpg'
import thumbPost2 from '../public/images/posts/3.jpg'
import { isMobileDevice } from '../lib/device'
import { getRandomAvatar } from '../lib/avatar-randomizer'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileDevice())
  }, [])

  console.log(isMobile)

  return (
    <Layout>
      <Container maxW="container.md">
        <Box
          borderRadius="lg"
          mt={10}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a Software Engineer based in USA!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ismoil Shokirov
            </Heading>
            <p>Digital Craftsman ( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src={getRandomAvatar()}
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Ismoil is a full-stack developer from Tashkent, Uzbekistan with a
            passion for building digital services/stuff he wants. He has a knack
            for all things launching products, from planning and designing all
            the way to solving real-life problems with code. When not online, he
            loves hanging out with his camera and traveling. Currently, he is
            studying Master&apos;s degree in Computer Science.
            {/* <NextLink href="/works/inkdrop" passHref scroll={false}> */}
            {/* <Link>Inkdrop</Link> */}
            {/* </NextLink> */} In his free time he posts blogs about
            programming and technology &quot;
            <NextLink href="https://blog.shokirov.uz" passHref>
              <Link target={!isMobile ? '_blank' : ''}>Ismoil logs</Link>
            </NextLink>
            &quot;
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button
                className={`theme-btn--${useColorModeValue('light', 'dark')}`}
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Tashkent, Uzbekistan.
          </BioSection>
          <BioSection>
            <BioYear>2017 to 2021</BioYear>
            Freelancer/Full-stack JavaScript developer
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2021</BioYear>
            Worked at AVTECH Distribution
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2022</BioYear>
            Worked at KAIS Logistics
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2022</BioYear>
            Worked at EPAM Systems (Burberry)
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>
            Mechanical keyboards, Swimming, Music,{' '}
            <Link
              href="https://stackoverflow.com/users/12924484/ismoil-shokirov?tab=answers"
              target={!isMobile ? '_blank' : ''}
            >
              StackOverflow Q&A
            </Link>
            ,{' '}
            <Link
              href="https://gallery.shokirov.uz/#portfolio"
              target={!isMobile ? '_blank' : ''}
            >
              Photography
            </Link>
            ,{' '}
            <Link
              href="https://blog.shokirov.uz"
              target={!isMobile ? '_blank' : ''}
            >
              Writing Blog posts
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/ismoil793"
                target={!isMobile ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<IoLogoGithub />}
                >
                  @ismoil793
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://stackoverflow.com/users/12924484/ismoil-shokirov"
                target={!isMobile ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<IoLogoStackoverflow />}
                >
                  StackOverflow
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ismoil-shokirov/"
                target={!isMobile ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<IoLogoLinkedin />}
                  marginBottom={5}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://blog.shokirov.uz/posts/what-is-use-strict-in-javascript"
              title="JavaScript"
              thumbnail={thumbPost1}
              imgHeight="100%"
            >
              Post about &apos;use strict&apos;
            </GridItem>
            <GridItem
              href="https://stackoverflow.com/a/67670615/12924484"
              title="StackOverflow"
              thumbnail={thumbPost2}
              imgHeight="100%"
            >
              Location is not defined error in React + Next js
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button
                className={`theme-btn--${useColorModeValue('light', 'dark')}`}
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
              >
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
