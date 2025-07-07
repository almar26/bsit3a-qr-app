export default function ({ $auth, redirect }) {
    if ($auth.loggedIn) {
      return redirect('/') // or your default home page
    }
  }
  