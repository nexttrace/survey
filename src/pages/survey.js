/** @jsx jsx */
import Layout from "../components/layout"
import { jsx, Heading, Button, Box, Text, Link, Label, Radio, Input } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { Formik } from 'formik'
import { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Survey = () => {
  const [date, setDate] = useState(new Date())
  const [residence, setResidence] = useState(false)

  const handleChange = (date) => {
    setDate(date)
  }

  const handleRadio = (radio) => {
    setResidence(radio.target.value)
  }

  const submit= () => {
    setTimeout(() => {
      alert(JSON.stringify({date: date, residence: residence}, null, 2))
    }, 400)
  }

  return (
    <Layout>
      <Box sx={{ maxWidth: "40em", my: [4] }}>
        <Heading as="h3" sx={{ fontSize: [4], lineHeight: "body", mt: [3, null, 4], mb: [2, null, 3] }}>
          Determining the period when you were infectious
        </Heading>
        <Text sx={{ mb:[2] }}>
          To find people who you may have transmitted the infection to, we need to
          determine the period of time that you were infectious. For most people,
          they are infectious 5 days before they start to feel symptoms.
        </Text>
        <Box sx={{mt: [3], mb: [2], backgroundColor: "secondary", width: "10px", height: "10px", borderRadius: "10px"}}></Box>
        <Text sx={{ mb:[2] }}>
          Please enter the first day you started to feel symptoms.
        </Text>
        <DatePicker sx={{variant: 'forms.input'}} selected={date} onChange={handleChange} />
        <Text sx={{ mb:[2] }}>
          For the questions that follow, we will be asking you about your 
          activities and people you have had contact with between{' '}
          <span sx={{variant: 'text.input'}}>{date.toDateString()}</span>{' '}
          and <span sx={{variant: 'text.input'}}>{(new Date()).toDateString()}</span>
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], lineHeight: "body", mt: [3, null, 4], mb: [2, null, 3] }}>
          Contacts within your home or residence
        </Heading>
        <Text sx={{ mb:[2] }}>
          We will now ask you about the people you live with, 
          and anyone who may have come to your home
          between{' '}<span sx={{variant: 'text.input'}}>{date.toDateString()}</span>{' '}
          and <span sx={{variant: 'text.input'}}>{(new Date()).toDateString()}</span>
        </Text>
        <Box sx={{mt: [3], mb: [2], backgroundColor: "secondary", width: "10px", height: "10px", borderRadius: "10px"}}></Box>
        <Text sx={{ mb:[2] }}>
          Do you reside in an institution or group setting? Examples of these
          types of settings include long term care facilities (referred to as
          nursing homes), groups homes, correctional facilities, or a military
          base?
        </Text>
        <Box sx={{ display: 'inline-block', mb: [3] }}>
          <Label>
          <Radio name='yes' value='yes' onChange={handleRadio} checked={(residence==='yes')}/>
            Yes
          </Label>
          <Label>
            <Radio name='no' value='no' onChange={handleRadio} checked={(residence==='no')}/>
            No
          </Label>
        </Box>
        { (residence === 'no') && 
          <Box>
            <Box sx={{mt: [3], mb: [2], backgroundColor: "secondary", width: "10px", height: "10px", borderRadius: "10px"}}></Box>
            <Text sx={{ mb: [2] }}>
              During your infectious period, did anyone come into your home?
              Possible examples could be relatives, friends, neighbors, contractors,
              superintendents, home health aides, or first responders. Please list
              all of them. Do not include delivery personnel unless you came within 6 feet of them.
            </Text>
            <Box>
              <Input placeholder='name'></Input>
              <Input placeholder='phone' sx={{maxWidth: '200px'}}></Input>
            </Box>
            <Box>
              <Input placeholder='name'></Input>
              <Input placeholder='phone' sx={{maxWidth: '200px'}}></Input>
            </Box>
          </Box>
        }
        { (residence === 'yes') && 
          <Box>
            <Box sx={{mt: [3], mb: [2], backgroundColor: "secondary", width: "10px", height: "10px", borderRadius: "10px"}}></Box>
            <Text>
              Please provide the name of the institution.
            </Text>
            <Input></Input>
          </Box>
        }
      </Box>
      <Button onClick={submit}>Submit</Button>
    </Layout>
  )
}

export default Survey
