import toolbox from '@/assets/toolbox.png'
import candy from '@/assets/candy.png'

const getStartingState = () => {
  return {
    people: 50,
    debris: 30,
    unrest: 15,
    damage: 0,
    lost: false,
    won: false,
    inventory: [
      {
        label: 'Transparent Aluminium Repair Kit',
        name: 'kit',
        image: toolbox,
        quantity: 1
      },
      {
        label: 'Space Candy',
        name: 'candy',
        image: candy,
        quantity: 2
      }
    ]
  }
}

export default {
  getStartingState
}
