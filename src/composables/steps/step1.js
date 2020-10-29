import gsap from 'gsap'

export const title = 'DOM element'
export const run = (targets, clear = false) => {
  console.log('step1', title, clear)

  gsap.to(targets, {
    duration: 1.5, // Seconds
    opacity: 0.5,
    x: 200,
    scale: 2,
    clearProps: 'opacity', // Reset inline styles
  })
}
