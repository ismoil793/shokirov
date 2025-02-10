import NextLink from 'next/link'
import Head from 'next/head'
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
  IoLogoLinkedin,
  IoLogoYoutube
} from 'react-icons/io5'
import Image from 'next/image'
import thumbPost1 from '../public/images/posts/2.jpg'
import thumbPost2 from '../public/images/posts/3.png'
import { useDevice } from '../lib/device'
import { getRandomAvatar } from '../lib/avatar-randomizer'
import { FaMediumM, FaTelegramPlane } from 'react-icons/fa'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { isMobileDevice } = useDevice()

  const metaTitle = "Ismoil Shokirov | Full-Stack Software Engineer"
  const metaDescription = "Full-Stack Software Engineer with 7+ years of experience and a Master’s degree in Computer Science. Passionate about building scalable, high-quality applications."
  const metaKeywords = "Ismoil Shokirov, Senior Software Engineer, full-stack, ReactJS, NextJS, NodeJS, Typescript, Javascript, Uzbekistan, USA"

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />

        <meta name="author" content="Ismoil Shokirov" />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:image" content={"https://shokirov.uz/images/avatars/ismoil-linkedin.jpg"} />
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content="shokirov.uz" />
        <meta property="og:url" content={"https://shokirov.uz"} />
      </Head>
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
            <p>Digital Craftsman (  Developer / Engineer )</p>
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
                unoptimized={true}
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a full-stack developer with a passion for building digital services.
            I have experience in launching products, from planning and designing all
            the way to solving real-life problems with code. Currently, I am
            working as a Software Engineer at &quot;Thread Magic Inc.&quot; in Houston, TX.
            I have Master&apos;s degree in CS from Maharishi International University
            and Bachelor&apos;s degree in CS from INHA University.
            When not online, I like traveling.
            {/* <NextLink href="/works/inkdrop" passHref scroll={false}> */}
            {/* <Link>Inkdrop</Link> */}
            {/* </NextLink> */} In my free time I like cooking and writing post blogs about
            programming and technology &quot;
            <NextLink href="https://medium.com/@ismoil.793" passHref>
              <Link target={!isMobileDevice ? '_blank' : ''}>Medium</Link>
            </NextLink>
            &quot;,
            &quot;
            <NextLink href="https://blog.shokirov.uz" passHref>
              <Link target={!isMobileDevice ? '_blank' : ''}>Ismoil logs</Link>
            </NextLink>
            &quot;
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button
                className={`theme-btn--${useColorModeValue('light', 'dark')} cta`}
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
            <BioYear marginRight="0.5em" fontSize="16px">0b11111001110</BioYear>
            Born in Tashkent, Uzbekistan.
          </BioSection>
          <BioSection>
            <BioYear>2018 to 2020</BioYear>
            Worked at Fintechlab UZ
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2021</BioYear>
            Worked at AVTECH Distribution
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2022</BioYear>
            Worked at Burberry (EPAM Systems)
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Software Engineer at Thread (not Threads)
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>
            <Link
              href="https://stackoverflow.com/users/12924484/ismoil-shokirov?tab=answers"
              target={!isMobileDevice ? '_blank' : ''}
            >
              StackOverflow Q&A
            </Link>
            ,{' '}
            <Link
              href="https://medium.com/@ismoil.793"
              target={!isMobileDevice ? '_blank' : ''}
            >
              Writing Blog posts
            </Link>
            ,{' '}
            <Link
                href="https://github.com/ismoil793"
                target={!isMobileDevice ? '_blank' : ''}
            >
              Coding
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
                  href="https://stackoverflow.com/users/12924484/ismoil-shokirov"
                  target={!isMobileDevice ? '_blank' : ''}
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
                href="https://medium.com/@ismoil.793"
                target={!isMobileDevice ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<FaMediumM />}
                >
                  Medium
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://t.me/qisqalog"
                target={!isMobileDevice ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<FaTelegramPlane />}
                >
                  Telegram channel
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/ismoil793"
                target={!isMobileDevice ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<IoLogoGithub />}
                >
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ismoil-shokirov/"
                target={!isMobileDevice ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<IoLogoLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/@ismoilshokirov"
                target={!isMobileDevice ? '_blank' : ''}
              >
                <Button
                  variant="ghost"
                  colorScheme="lightblue"
                  leftIcon={<IoLogoYoutube />}
                  marginBottom={5}
                >
                  YouTube
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
              href="https://stackoverflow.com/users/12924484/ismoil-shokirov?tab=answers"
              title="StackOverflow"
              thumbnail={thumbPost2}
              imgHeight="100%"
            >
              3000+ reputation and 7.7m+ people reached
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button
                className={`theme-btn--${useColorModeValue('light', 'dark')} cta`}
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
