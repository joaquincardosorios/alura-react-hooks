import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarCiudad, validarDireccion, validarProvincia } from "./validaciones";

const DatosEntrega = ({updateStep}) => {
  const [address, setAddress] = useState({value:'', valid:null})
  const [city, setCity] = useState({value:'', valid:null})
  const [province, setProvince] = useState({value:'', valid:null})
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ (e) => {
        e.preventDefault()
        updateStep(3)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={address.valid === false}
        helperText={address.valid === false && 'Direccion no valida'}
        value={address.value}
        onChange={(e) =>{
          const value = e.target.value
          const valid = validarDireccion(value)
          setAddress({value, valid})
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={city.valid === false}
        helperText={city.valid === false && 'Ciudad no valida'}
        value={city.value}
        onChange={(e) =>{
          const value = e.target.value
          const valid = validarCiudad(value)
          setCity({value, valid})
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={province.valid === false}
        helperText={province.valid === false && 'Provincia no valida'}
        value={province.value}
        onChange={(e) =>{
          const value = e.target.value
          const valid = validarProvincia(value)
          setProvince({value, valid})
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
