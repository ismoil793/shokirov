import React, {useState, useEffect} from 'react'

export const isMacintosh = () => window?.navigator?.platform?.indexOf('Mac') > -1
export const isWindows = () => window?.navigator?.platform?.indexOf('Win32') > -1

const isMobileDevice = () => !isMacintosh() && !isWindows()

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      setIsMobile(isMobileDevice())
    }, [])

    return {isMobileDevice: isMobile}
}