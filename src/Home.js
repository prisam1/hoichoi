import React from 'react'
import Banner from './Banner'
import Row from './Row'
import "./app.css"
import data from './data'
//import Trending from './Trendingdata'
export default function Home() {

  return (
    <>
    
    <div> <Banner/></div>
   
    {/* <img src={data["Trending"][0].link}/> */}
          
          
           <Row title={"Trending"} movie={data["Trending"]}/>
          <Row title={"Popular"} movie={data["Popular"]}/>
          <Row title={"Horror"} movie={data["Horror"]}/>
          <Row title={"Thriller"} movie={data["Thriller"]}/>
          <Row title={"Drama"} movie={data["Drama"]}/>
          <Row title={"Comedy"} movie={data["Comedy"]}/>
          <Row title={"MostWatched"} movie={data["MostWatched"]}/>
          <Row title={"WomenCentric"} movie={data["WomenCentric"]}/>
          <Row title={"Upcoming"} movie={data["Upcoming"]}/>
          <Row title={"Latest"} movie={data["Latest"]}/>
          <Row title={"MostReviewed"} movie={data["MostReviewed"]}/>

    
    
     
    
    </>
    
  )
}
