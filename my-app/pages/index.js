import Head from 'next/head'
import Header from './components/Header'
import CreateForm from './components/CreateForm'
import ReportTable from './components/ReportTable'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'

import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [reports, setreports] = useState([])
  const [loggedIn, setloggedIn] = useState(false)
  const data = require('../public/data')
  let baseURL = 'https://cookie-stands-reema-api.herokuapp.com/'

  function onCreate(e) {
    e.preventDefault()
    let result = JSON.stringify({
      "Location": e.target.location.value,
      "hourly_sales": [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    })
    setreports([...reports, { id: reports.length, result }])
  }

  const login = (e,) => {
    e.preventDefault()
    axios.post(baseURL + 'api/token/', {
      username: e.target.username.value,
      password: e.target.password.value
    }).then((res) => {
      setloggedIn(res.status == 200 ? true : false)
      console.log(loggedIn)
    }).catch(console.error)
  }

  if (loggedIn) {

    return (
      <div>
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
        <Header />
        <main>
          <CreateForm onCreate={onCreate} />
          <ReportTable hours={data.hours} reports={reports} />
        </main>
        <Footer />
      </div>
    )
  } else {
    return (
      <>
        <LoginForm login={login} />
      </>)
  }
}