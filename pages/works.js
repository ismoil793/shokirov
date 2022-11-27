import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBurberry from '../public/images/projects/burberry.jpg'
import thumbBrandsotre from '../public/images/projects/brandstore.jpg'
import thumbEletron from '../public/images/projects/shop-eletron.jpg'
import thumbTieAprons from '../public/images/projects/tieaprons.jpg'
import thumbEpam from '../public/images/projects/epam.jpg'
import thumbAvtech from '../public/images/projects/avtech.jpg'
import thumbFintech from '../public/images/projects/fintechlab.jpg'
import thumbW2korea from '../public/images/projects/w2korea.jpg'
import thumbPrinterShop from '../public/images/projects/printershop.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="https://us.burberry.com/"
            title="Burberry"
            thumbnail={thumbBurberry}
          >
            Burberry is a british high-end luxury fashion house headquartered in
            London, England
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="https://www.epam.com/"
            title="EPAM"
            thumbnail={thumbEpam}
          >
            EPAM Systems is an American company that specializes in service
            development and digital platform engineering
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="https://client.customerservice.uz/"
            title="AVTECH Distribution"
            thumbnail={thumbAvtech}
          >
            AVTECH is one of the largest distributors of IT equipment, solutions
            and services in Uzbekistan
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="https://brandstore.uz/"
            title="BRANDSTORE"
            thumbnail={thumbBrandsotre}
          >
            Brandsotre is an e-commerce website focused in selling electronic
            devices
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="https://fintechlab.uz/en/"
            thumbnail={thumbFintech}
            title="Fintech Lab"
          >
            Fintech Lab is a web studio based in Tashkent, Uzbekistan
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="https://tieaprons.com/"
            thumbnail={thumbTieAprons}
            title="Tie Aprons"
          >
            TieAprons is a social media application for people who love cooking
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/*<Section delay={0.2}>*/}
      {/*  <Divider my={6} />*/}

      {/*  <Heading as="h3" fontSize={20} mb={4}>*/}
      {/*    Collaborations*/}
      {/*  </Heading>*/}
      {/*</Section>*/}

      {/*<SimpleGrid columns={[1, 1, 2]} gap={6}>*/}
      {/*  <Section delay={0.3}>*/}
      {/*    <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">*/}
      {/*      A website of the elite app development and contracting agency based*/}
      {/*      in Austria*/}
      {/*    </WorkGridItem>*/}
      {/*  </Section>*/}
      {/*  <Section delay={0.3}>*/}
      {/*    <WorkGridItem*/}
      {/*      id="modetokyo"*/}
      {/*      thumbnail={thumbModeTokyo}*/}
      {/*      title="mode.tokyo"*/}
      {/*    >*/}
      {/*      The mode magazine for understanding to personally enjoy Japan*/}
      {/*    </WorkGridItem>*/}
      {/*  </Section>*/}
      {/*  <Section delay={0.3}>*/}
      {/*    <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">*/}
      {/*      A VR Creative tools for fashion brands*/}
      {/*    </WorkGridItem>*/}
      {/*  </Section>*/}
      {/*</SimpleGrid>*/}

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="https://w2korea.github.io/"
            title="w2korea"
            thumbnail={thumbW2korea}
          >
            Welcome to Korea is a project for students in Uzbekistan who would
            like to learn about korean culture, places, traditions and
            universities
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="https://eletron.uz/"
            title="Eletron"
            thumbnail={thumbEletron}
          >
            Eletron offers electrical appliances as lighting, diesel generators,
            uninterruptible power supplies, automation, as well as integration
            and implementation services.
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem
            id="https://printershop.uz/"
            thumbnail={thumbPrinterShop}
            title="Printershop"
          >
            Commercial website to sell officially refurbished Canon printers.
            Mainly focuses on Business-to-Business sector
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
