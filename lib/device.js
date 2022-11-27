export const isMacintosh = () => window?.navigator?.platform?.indexOf('Mac') > -1
export const isWindows = () => window?.navigator?.platform?.indexOf('Win32') > -1

export const isMobileDevice = () => !isMacintosh() && !isWindows()
