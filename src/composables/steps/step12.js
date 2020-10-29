import gsap from 'gsap'

export const title = 'Stagger'
export const run = targets => {
  console.log('step12', title)

  gsap.to(targets, {
    duration: 1.5,
    x: 300,
    scale: 2,
    ease: 'bounce',
    stagger: 0.25, // Stagger made easy!
  })
}
