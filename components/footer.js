import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const Footer = () => {
  const { pathname } = useRouter()

  const shouldDisplayInspiration = useMemo(() => {
    return pathname !== '/'
  }, [pathname])

  const dateCopy = useMemo(() => <span>&copy; 2020-{new Date().getFullYear()} Ismoil Shokirov. All Rights Reserved.</span>, [])

  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {dateCopy}
      {shouldDisplayInspiration && (
        <div style={{ marginTop: 20 }}>
          Inspired by{' '}
          <a href="https://www.craftz.dog/" target="_blank" rel="noreferrer">
            Takuya Matsuyama
          </a>
        </div>
      )}
    </Box>
  )
}

export default Footer
