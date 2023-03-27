const AVATARS = [
  '/images/avatars/kirov-rounded.jpg',
  '/images/avatars/ismoil-burberry-small.jpg',
  '/images/avatars/ismoil-uzb.jpg',
  '/images/avatars/ismoil-dubai.jpg'
]

export const getRandomAvatar = () => {
  const randomIdx = Math.round(Math.random() * (AVATARS.length - 1))
  return AVATARS[randomIdx]
}
