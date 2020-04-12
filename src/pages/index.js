/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { jsx, Heading, Box, Text, Grid, Link, Button } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { useState } from "react"


const Index = () => {

  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], mb: [3, null, 4], fontSize: [6, null, 7] }}>
        The NextTrace survey
      </Heading>
      <Heading as="h3" sx={{ fontSize: [4], lineHeight: "body", mb: [3, null, 4] }}>
        We are preventing the spread of COVID-19 by finding people who might
        be infected and getting them to test and stay at home. We need your help.
      </Heading>
      <GatsbyLink to='/survey'><Button sx={{ mt: [4] }}>begin the survey</Button></GatsbyLink>
      <Box sx={{ maxWidth: "40em", my: [4, null, 5] }}>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          What this is for
        </Heading>
        <Text>
          Because there is no vaccine or treatment for COVID-19 yet, the only way to limit the
          outbreak is to prevent the spread. Our best approach is to find people who are
          infected, even if they might not know it yet, and ask them to quarantine
          at home. This prevents them from coming into contact with other people and
          spreading COVID-19 onward. 
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Why we need you
        </Heading>
        <Text>
        How do we find people who might be infected? That's where you come in!
        In this survey we will ask you questions that will help us find people 
        who you have been in contact with during the period when you were infectious. 
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          What we will ask
        </Heading>
        We will ask you about your interactions,and for phone
        numbers of your contacts. Based on your interactions, 
        we may consider them to be exposed, which means they
        could also develop COVID-19. In that case, we will contact them and ask
        them to self-isolate for the next 14 days. We will also ask them to
        monitor their symptoms during that time. We will not tell them that we
        received their phone number from you. Additionally we will not store their
        phone number for longer than 14 days. </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Thank you!
        </Heading>
        <Text>
        We understand that we are asking a lot for you to tell us where you have
        been, who you had contact with, and how to get in touch with those people.
        We ask this information because right now this is our best way to stop
        transmission. This also means that the quality and completeness of your
        answers impacts how well this works. We kindly ask that you be as accurate
        as possible with your answers. 
       </Text>
       <GatsbyLink to='/survey'><Button sx={{ mt: [4] }}>begin the survey</Button></GatsbyLink>
      </Box>
    </Layout>
  )
}

export default Index
