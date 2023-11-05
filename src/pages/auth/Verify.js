import { Stack, Typography } from '@mui/material';
import React from 'react'
import VerifyForm from '../../sections/auth/VerifyForm';

const Verify = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography>
            Please Verify OTP
        </Typography>
        <Stack direction={"row"} spacing={0.5} >
            <Typography variant='body2' >
                Send to email
            </Typography>
        </Stack>
        {/* Verify Form */}
        <VerifyForm/>
    </Stack>
  )
}

export default Verify;