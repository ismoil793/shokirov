import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoMailOutline } from 'react-icons/io5'
import { useDevice } from '../lib/device'
import { FaTelegramPlane } from 'react-icons/fa'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        borderRadius={5}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  const { isMobileDevice } = useDevice()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          fontSize={18}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="https://gallery.shokirov.uz/#portfolio" path={path}>
            Gallery
          </LinkItem>
          <LinkItem
            href="mailto:ismoil.shokirov.dev@gmail.com"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            // onClick={() => {
            //   const msg = prompt("Ask me anything, include your email at the end")
            //   axios.post(`https://lavugxtv4onok72t7r53vapeki0hfxgo.lambda-url.us-east-1.on.aws?text=${msg}`)
            // }}
          >
            <IoMailOutline />
            Contact
          </LinkItem>
          <LinkItem
            target={!isMobileDevice ? '_blank' : ''}
            href="https://github.com/ismoil793"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
          </LinkItem>
          {/* <LinkItem
            target={!isMobileDevice ? '_blank' : ''}
            href="https://www.linkedin.com/in/ismoil-shokirov"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoLinkedin />
          </LinkItem> */}
          <LinkItem
            target={!isMobileDevice ? '_blank' : ''}
            href="https://t.me/qisqalog"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FaTelegramPlane />
          </LinkItem>

        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://gallery.shokirov.uz/#portfolio"
                >
                  Gallery
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="mailto:ismoil.shokirov.dev@gmail.com"
                >
                  <IoMail />
                  <span style={{ marginLeft: 5 }}>Contact me</span>
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/ismoil793"
                >
                  <IoLogoGithub />
                  <span style={{ marginLeft: 5 }}>GitHub</span>
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://www.linkedin.com/in/ismoil-shokirov"
                >
                  <IoLogoLinkedin />
                  <span style={{ marginLeft: 5 }}>LinkedIn</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
