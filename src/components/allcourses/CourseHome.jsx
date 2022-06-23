import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Our Services' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
