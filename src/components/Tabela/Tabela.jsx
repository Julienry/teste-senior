import React, { useState, useEffect } from "react"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TableFooter,
  Divider,
  TableHead,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import { TableHeaderStyle, TableBodyStyle } from "./styles"
import { useDispatch, useSelector } from "react-redux"

export default function Tabela(props) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  function createData(row1, row2, row3, row4, row5, row6, row7) {
    return { row1, row2, row3, row4, row5, row6, row7 }
  }

  const tabelas_rows = [
    createData("rows1", "rows2", "rows3", "rows4", "rows5", "rows6", "rows7"),
    createData("rows1", "rows2", "rows3", "rows4", "rows5", "rows6", "rows7"),
    createData("rows1", "rows2", "rows3", "rows4", "rows5", "rows6", "rows7"),
  ]

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        my: "60px",
        mx: "150px",
      }}
    >
      <Typography
        sx={{ alignSelf: "center", mb: "15px" }}
        variant="h4"
        color="primary"
      >
        <b>Tabela</b>
      </Typography>
      <TableContainer
        sx={{
          borderRadius: "10px",
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={TableHeaderStyle}>
              <TableCell align="left">COLUNA 1</TableCell>
              <TableCell align="left">COLUNA 2</TableCell>
              <TableCell align="left">COLUNA 3</TableCell>
              <TableCell align="left">COLUNA 4</TableCell>
              <TableCell align="left">COLUNA 5</TableCell>
              <TableCell align="left">COLUNA 6</TableCell>
              <TableCell align="left">COLUNA 7</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tabelas_rows.map((row) => {
              return (
                <TableRow sx={{ backgroundColor: "#fff" }} hover>
                  <TableCell align="left">
                    <b>{row.row1}</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>{row.row2}</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>{row.row3}</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>{row.row4}</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>{row.row5}</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>{row.row6}</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>{row.row7}</b>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
