import gsap from 'gsap'

export const title = 'Callback + async'
export const run = async targets => {
  console.log('step12', title)

  await gsap
    .to(targets, {
      duration: 1.5,
      x: 300,
      scale: 2,
      ease: 'bounce',
      stagger: 0.125,
      onComplete() {
        console.log('complete')
      },
    })
    .then(() => {
      console.log('resolve')
    })

  console.log('async/await')
}
