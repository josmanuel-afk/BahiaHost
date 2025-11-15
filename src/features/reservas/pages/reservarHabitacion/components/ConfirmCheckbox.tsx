import { Checkbox, FormControlLabel, Typography } from '@mui/material'

const ConfirmCheckbox  = () => {
  return (
      <FormControlLabel
                control={<Checkbox required color="primary" />}
                label={
                  <Typography variant="body2" color="text.secondary">
                    Confirmo que mis datos son correctos y acepto los{" "}
                    <Typography
                      component="span"
                      color="primary.main"
                      fontWeight="medium"
                      sx={{ cursor: "pointer" }}
                    >
                      Términos y Condiciones
                    </Typography>
                    .
                  </Typography>
                }
              />
  )
}

export default ConfirmCheckbox 
