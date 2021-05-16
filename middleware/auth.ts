import { Context } from '@nuxt/types'

const authMiddleware = ({ route, redirect, app: { $fire } }: Context) => {
  $fire.auth.onAuthStateChanged((user) => {
    if (!user) {
      return redirect(({ name: 'login', query: { redirect: route.name } }))
    }
  })
}

export default authMiddleware
