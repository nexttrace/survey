/** @jsx jsx */
import Layout from "../components/layout"
import { jsx, Heading, Button, Box, Text, Link, Label, Radio, Input } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { useState } from 'react'

const FormStack = () => {

  return (
    <Layout>
      <Box>
        <iframe sx={{ 
          position: 'absolute', 
          top: 0,
          left: [0, 'auto', 'auto'],
          width: ['100%', '40em', "40em"],
          pt: ['50px', '70px', '70px'],
          px: ['5px', '0px', '0px'],
          margin: '0 auto',
          ml: ['0px', '-20px', '-20px'],
          height: '100%',
          border: 'none'
        }} src="https://nexttrace.formstack.com/forms/test_v0"></iframe>
      </Box>
    </Layout>
    )
}

export default FormStack