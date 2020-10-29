import gsap from 'gsap'

export const title = 'Timeline + defaults'
export const run = (targets, clear = false) => {
  console.log('step6', title)

  // You can store your gsap instance and start it later
  const tl = gsap
    .timeline({
      paused: true, // Do not auto play
      defaults: {
        duration: 1.5,
        ease: 'bounce',
      },
    })
    .to(targets, {
      x: 200,
      scale: 2,
    })
    .to(targets, {
      x: 0,
      scale: 1,
      ease: 'back.inOut(3)',
      clearProps: clear ? 'all' : '',
    })

  setTimeout(() => {
    // Play now!
    tl.play()
  }, 2000)
}
