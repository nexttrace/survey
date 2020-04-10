/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { jsx, Heading, Box, Text, Grid, Link, Button } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { useState } from "react"


const Index = () => {
  console.log('here')
  const [started, setStarted] = useState(false)

  const start = (e) => {
    setStarted(true)
  }

  return (
    <Layout>
      { (!started) &&
      <>
      <Heading as="h1" sx={{ my: [4, null, 5], fontSize: [6, null, 7] }}>
        Contact tracing survey
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [4, null, 5] }}>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Introduction
        </Heading>
        <Text>
          Thank you very much for participating in this survey. Because there is no
          vaccine or treatment for COVID-19 yet, the only way we can limit the
          outbreak is to try and prevent people with COVID-19 from giving it to
          other people. Our best way for doing that is to find people who are
          infected, even if they might not know it yet, and ask them to quarantine
          at home. This prevents them from coming into contact with other people and
          spreading COVID-19 onward. 
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Why we need your help
        </Heading>
        <Text>
        How do we find people who might be infected even if they haven’t developed
        symptoms? We need your help. In this survey we are going to ask you
        questions about other people who you have been in contact with during the
        period when you were infectious. We will also ask you for the phone
        numbers of these people (your contacts). Given the kinds of interactions
        you had with them, we may consider them to be exposed, which means they
        could also develop COVID-19. In that case, we will contact them and ask
        them to self-isolate for the next 14 days. We will also ask them to
        monitor their symptoms during that time. We will not tell them that we
        received their phone number from you. Additionally we will not store their
        phone number for longer than 14 days. </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Thank you
        </Heading>
        <Text>
        We understand that we are asking a lot for you to tell us where you have
        been, who you had contact with, and how to get in touch with those people.
        We ask this information because right now this is our best way to stop
        transmission. This also means that the quality and completeness of your
        answers impacts how well this works. We kindly ask that you be as accurate
        as possible with your answers. 
       </Text>
       <Button onClick={start} sx={{ mt: [4] }}>begin the survey</Button>
      </Box>
      </>
      }
      <Box sx={{ display: started ? 'inherit' : 'none' }}>
        <iframe sx={{ 
          position: 'absolute', 
          top: 0,
          width: ['100%', '40em', "40em"],
          paddingTop: '70px',
          margin: '0 auto',
          height: '100%',
          border: 'none'
        }} src="https://www.surveymonkey.com/r/XXRLJBG"></iframe>
      </Box>
    </Layout>
  )
}

export default Index
