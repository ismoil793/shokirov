import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {

  const metaTitle = "Ismoil Shokirov | Full-Stack Software Engineer"
  const metaDescription = "Full-Stack Software Engineer with over 7 years of experience"
  const metaKeywords = "Ismoil Shokirov, Senior Software Engineer, full-stack, ReactJS, NextJS, NodeJS, Typescript, Javascript, Uzbekistan, USA"

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Ismoil Shokirov" />
        <meta name="keywords" content={metaKeywords} />

        <link rel="apple-touch-icon" href="/ismoil-apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ismoil793" />
        <meta name="twitter:creator" content="@ismoil793" />
        <meta
          name="twitter:image"
          content="https://shokirov.uz/images/avatars/ismoil-linkedin.jpg"
        />
        <meta property="og:site_name" content="Ismoil Shokirov" />
        <meta name="og:title" content={metaTitle} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://shokirov.uz/images/avatars/ismoil-linkedin.jpg"
        />
        <title>{metaTitle}</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
