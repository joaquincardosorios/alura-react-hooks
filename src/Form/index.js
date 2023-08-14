import React, {useEffect, useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";


// Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import { validarApellidos, validarNombre, validarTelefono } from "./DatosPersonales/validaciones";
import { validarCiudad, validarDireccion, validarProvincia } from "./DatosEntrega/validaciones";


const Form = () => {
  const [step, setStep] = useState(0)
  const [pasos, setPasos] = useState({})

  useEffect( () => {
    console.log('useEffects')
  },[]) 

  useEffect( () => {
    console.log('Se actualizó el step')
  },[step]) 

  // step = 0 -> <DatosUsuario />
  // step = 1 -> <DatosPersonales />
  // step = 2 -> <DatosEntrega />
  // step = 3 => <Complete />

  const updateStep = (step) => {
    console.log(step)
    setStep(step)
  }

  const steps = {
    0:<DatosUsuario updateStep={updateStep} />, 
    1:<DatosPersonales updateStep={updateStep} />, 
    2:<DatosEntrega updateStep={updateStep} />, 
    3:<Complete />}

    const onSubmit = (e) => { 
      e.preventDefault()
      let newStep = step + 1
      setStep(newStep)
    }

    const handleChange = (element, position, currentStep, validator) => {
      const value = element.target.value
      const valid = validator(value)
    }

    const stepFlow = {
      0: {
        inputs: [
          {
            label: 'Correo electronico',
            type: 'email',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresar un correo valido',
            validator: validarEmail
          },
          {
            label: 'Contraseña',
            type: 'password',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresa una contraseña valida',
            validator: validarPassword
          }
        ],
        buttonText: 'Siguiente',
        onSubmit
      },
      1: {
        inputs: [
          {
            label: 'Nombre',
            type: 'text',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresa un nombre valido',
            validator: validarNombre
          },
          {
            label: 'Apellidos',
            type: 'text',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresa apellidos validos',
            validator: validarApellidos
          },
          {
            label: 'Telefono',
            type: 'number',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresa un telefono valido',
            validator: validarTelefono
          }
        ],
        buttonText: 'Siguiente',
        onSubmit
      },
      2: {
        inputs: [
          {
            label: 'Direccion',
            type: 'text',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresa una direccion valida',
            validator: validarDireccion
          },
          {
            label: 'Ciudad',
            type: 'text',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresa una ciudad valida',
            validator: validarCiudad
          },
          {
            label: 'Provincia',
            type: 'text',
            value: '',
            valid: null,
            onChange: handleChange,
            helperText: 'Ingresa una provincia valida',
            validator: validarProvincia
          }
        ],
        buttonText: 'Registrar',
        onSubmit
      }
    }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* { steps[step] } */}
        {<Step data={stepFlow[step]} step={step}/>}
      </FormSpace>
    </Box>
  );
};

export default Form;
