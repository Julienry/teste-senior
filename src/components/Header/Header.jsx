import React, { useState, useEffect } from "react"
import { Box, TextField, Typography, Button, Grid } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useDispatch, useSelector } from "react-redux"

export default function Header(props) {
  //   const dataBuscada = useSelector(state)
  const [date, setDate] = useState("")

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          p: "30px",
          ml: "50px",
        }}
      >
        <Box
          sx={{
            alignItems: "end",
          }}
        >
          <Typography sx={{ p: "5px", color: "#434343" }}>
            <b>Data de referência: </b>
          </Typography>
        </Box>
        <Box>
          <TextField
            variant="outlined"
            type="date"
            size="small"
            value={date}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              boxShadow:
                "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            }}
            onChange={(ev) => {
              setDate(ev.target.value)
            }}
          />
        </Box>

        <Box sx={{ ml: "20px" }}>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: "5px" }}
            color="primary"
          >
            <SearchIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
