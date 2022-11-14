import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const Footer = () => {
  const { pathname } = useRouter()

  const shouldDisplayInspiration = useMemo(() => {
    return pathname === '/'
  }, [pathname])

  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Ismoil Shokirov. All Rights Reserved.
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
