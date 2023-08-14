import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarApellidos, validarNombre, validarTelefono } from "./validaciones";


const DatosPersonales = ({updateStep}) => {
  const [name, setName] = useState({value:'',valid:null})
  const [lastname, setLastname] = useState({value:'',valid:null})
  const [phone, setPhone] = useState({value:'',valid:null})


  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ (e) => {
        e.preventDefault()
        updateStep(2)
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false}
        helperText={name.valid === false && 'Nombre no valido'}
        value={name.value}
        onChange={(e) => {
          const value = e.target.value
          const valid = validarNombre(value)
          setName({value, valid})
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={lastname.valid === false}
        helperText={lastname.valid === false && 'Apellido no valido'}
        value={lastname.value}
        onChange={(e) => {
          const value = e.target.value
          const valid = validarApellidos(value)
          setLastname({value, valid})
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        error={phone.valid === false}
        helperText={phone.valid === false && 'Telefono no valido'}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(e) => {
          const value = e.target.value
          const valid = validarTelefono(value)
          setPhone({value, valid})
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
