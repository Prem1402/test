import * as React from "react"
import { DataGrid } from "@material-ui/data-grid"

const columns = [
  { field: "id", headerName: "article ID", width: 170 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "upvotes", headerName: "Upvotes", width: 130 },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 90,
  },
]

// const rows = [
//   { id: 1, title: "Snow", upvotes: "Jon", date: 35 },
//   { id: 2, title: "Lannister", upvotes: "Cersei", date: 42 },
//   { id: 3, title: "Lannister", upvotes: "Jaime", date: 45 },
//   { id: 4, title: "Stark", upvotes: "Arya", date: 16 },
//   { id: 5, title: "Targaryen", upvotes: "Daenerys", date: null },
//   { id: 6, title: "Melisandre", upvotes: null, date: 150 },
//   { id: 7, title: "Clifford", upvotes: "Ferrara", date: 44 },
//   { id: 8, title: "Frances", upvotes: "Rossini", date: 36 },
//   { id: 9, title: "Roxie", upvotes: "Harvey", date: 65 },
// ]

export default function DataTable({ articles }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={articles} columns={columns} pageSize={5} />
    </div>
  )
}
