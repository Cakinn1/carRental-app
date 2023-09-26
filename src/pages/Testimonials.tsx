import React from 'react'
import AboutMainTitle from '../components/AboutComponents/AboutMainTitle'
import MainBlock from '../components/AboutComponents/MainBlock'
import HomeClientTestimonials from '../components/HomeComponents/HomeClientTestimonials'

export default function Testimonials() {
  return (
    <>
    <AboutMainTitle title='Testimonials' />

    <HomeClientTestimonials  isActive={true}/>
    <MainBlock isActive={true}/>
    </>
  )
}
