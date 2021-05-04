import { MutationTree } from 'vuex'
import { Game } from 'interfaces/game'

export const state = () => ({
  game: undefined as Game | undefined,
  selectedYear: undefined as string | undefined
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_GAME: (s, game) => (s.game = game),
  SELECT_YEAR: (s, selectedYear) => (s.selectedYear = selectedYear)

}
