import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import DataTable from "./DataTable"

const BASE_URL = ""

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "44px 0",
    "& p": {
      margin: "12px 0 24px",
    },
  },
  table: {
    display: "flex",
    alignItems: "center",
    width: "40%",
  },
}))

export default function Home(props) {
  const classes = useStyles()
  const [articles, setArticle] = useState(null)
  const [authorName, setAuthorName] = useState("")
  const handleChange = (e) => {
    setAuthorName(e.target.value)
  }

  const fetchData = async () => {
    const response = await fetch(`&{BASE_URL}/${authorName}/`)

    setArticle(response.data)
    setArticle([
      {
        id: 1,
        title: "Harry Potter ",
        upvotes: 23,
        date: 12 / 2 / 2016,
      },
      {
        id: 2,
        title: "The Half Blood Prince Review",
        upvotes: 2,
        date: 12 / 2 / 2016,
      },
      {
        id: 3,
        title: "Harry Potter and the Half Blood Prince Review",
        upvotes: 63,
        date: 12 / 2 / 2016,
      },
    ])
  }

  return (
    <div>
      <div className='App'>
        <input
          className='textField'
          placeholder='Author Name'
          type='text'
          onChange={(e) => handleChange(e)}
        />

        <div>
          <button
            className='fetch-button'
            onClick={fetchData}
            disabled={!authorName}
          >
            Fetch Data
          </button>
        </div>
        <div className={classes.table}>
          {articles && <DataTable articles={articles} />}
        </div>
      </div>
    </div>
  )
}
