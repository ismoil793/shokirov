const AVATARS = [
  //'/images/avatars/kirov-rounded.jpg',
  //'/images/avatars/ismoil-burberry-small.jpg',
  //'/images/avatars/ismoil-uzb.jpg',
  // '/images/avatars/ismoil-dubai.jpg',
  //'/images/avatars/safari.jpg',
  //'/images/avatars/safari-2.jpg',
  //'/images/avatars/tash-tower.jpg',
  //'/images/avatars/houston.jpg',
  '/images/avatars/ismoil-linkedin.jpg',
]

export const getRandomAvatar = () => {
  const randomIdx = Math.round(Math.random() * (AVATARS.length - 1))
  return AVATARS[randomIdx]
}
