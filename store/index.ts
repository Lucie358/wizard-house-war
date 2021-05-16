import { MutationTree } from 'vuex'
import { Game, Year } from 'interfaces/game'
import { orderBy } from 'lodash'

export const state = () => ({
  game: undefined as Game | undefined,
  selectedYear: undefined as string | undefined
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_GAME: (s, game) => (s.game = game),
  SELECT_YEAR: (s, selectedYear) => (s.selectedYear = selectedYear)
}
export const getters = {
  selectedGameYearsSorted: (state: RootState) => {
    if (!state.game) { return [] }
    const years = Object.entries(state.game.years).map(([key, val]) => ({
      ...val as Year, id: key
    }))
    return orderBy(years, 'name')
  }
}
