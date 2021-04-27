import { Context } from '@nuxt/types'

const authMiddleware = ({ route, redirect, app: { $fire } }: Context) => {
  $fire.auth.onAuthStateChanged((user) => {
    console.log('onAuthStateChanged', $fire.auth.currentUser)
    if (!user) {
      return redirect(({ name: 'login', query: { redirect: route.name } }))
    }
  })
}

export default authMiddleware
