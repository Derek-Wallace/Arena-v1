import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  units: [Melee = {movement: 4}, Ranged = {movement: 3}, Support = {movement: 5}],
  enemyUnits: [],
  activeUnit: {},
  availableSpots: [],
  selectedSpot: {},
  user: {},
  account: {}
})
