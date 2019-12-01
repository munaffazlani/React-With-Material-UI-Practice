import React, {useState, useEffect} from 'react';
import Nav from "./components/navbar"
import Footer from "./components/footer"
import Content from "./components/content"
import {muscles, exercises} from "./store"

let sortedExercise =  exercises.reduce((exercises, exercise) => {
  let {muscles} = exercise;
    exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise]: exercises[muscles] = [exercise]
      return exercises
    }, {})

function App() {
  let [selectedMuscles, setSelectedMuscles] = useState("all")
  let [exercisesArray, setExercisesArray] = useState(Object.entries(sortedExercise))
  let [selectedCategory, setSelectedCategory] = useState("")
  let [selectedSubCategory, setSelctedSubCategory] = useState("")


  let muscleChangehandler = (category, indx) => {
    setSelectedMuscles(category)
    indx === 0 ? setSelectedCategory("") : setSelectedCategory(category)
    setSelctedSubCategory(exercisesArray[indx-1][1][0])
  }
  
  
  
  
  let subCategoryHandler = (x) => {
    setSelctedSubCategory(x)
  }
  
  return (
    <div>
      <Nav />   
      <Content exercises = {exercisesArray}
              selectedCategory = {selectedCategory}
              selectedSubCategory = {selectedSubCategory} handleSelect = {subCategoryHandler} />
      <Footer category = {selectedMuscles} 
              muscles = {muscles} 
              handleChange = {muscleChangehandler} />
    </div>
  )
        
      }

export default App;
