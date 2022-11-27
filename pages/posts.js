import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
import thumbPost1 from '../public/images/posts/4.jpg'
import thumbPost2 from '../public/images/posts/5.jpg'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="What is 'use strict' in Javascript and its importance"
            thumbnail={thumbPost1}
            href="https://blog.shokirov.uz/posts/what-is-use-strict-in-javascript"
            imgProps={{
              width: 260,
              height: 146
            }}
          />
          <GridItem
            title="Dynamically get window width and height in ReactJS"
            thumbnail={thumbPortfolio}
            href="https://blog.shokirov.uz/posts/react-hoook-useDeviceSize"
          />
          <GridItem
            title="Fix location is not defined error in Next JS"
            thumbnail={thumbHowToUseInkdrop}
            href="https://stackoverflow.com/questions/65819812/location-is-not-defined-error-in-react-next-js/67670615#67670615"
            imgProps={{
              width: 260,
              height: 146
            }}
          />
          <GridItem
            title="Create a dark/light theme in ReactJS"
            thumbnail={thumbPost2}
            href="https://blog.shokirov.uz/posts/react-dark-theme"
            imgProps={{
              width: 260,
              height: 146
            }}
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/*<GridItem*/}
          {/*  title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"*/}
          {/*  thumbnail={thumb500PaidUsers}*/}
          {/*  href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"*/}
          {/*/>*/}
          <GridItem
            title="Check out more posts"
            thumbnail={thumbFinancialGoal}
            href="https://blog.shokirov.uz/"
          />
        </SimpleGrid>
      </Section>

      {/*<Section delay={0.5}>*/}
      {/*  <SimpleGrid columns={[1, 2, 2]} gap={6}>*/}
      {/*    <GridItem*/}
      {/*      title="How to Price Yourself as a Freelance Developer"*/}
      {/*      thumbnail={thumbHowToPriceYourself}*/}
      {/*      href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"*/}
      {/*    />*/}
      {/*    <GridItem*/}
      {/*      title="I made my React Native app 50x faster"*/}
      {/*      thumbnail={thumb50xFaster}*/}
      {/*      href="https://www.youtube.com/watch?v=vj723NlrIQc"*/}
      {/*    />*/}
      {/*  </SimpleGrid>*/}
      {/*</Section>*/}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
