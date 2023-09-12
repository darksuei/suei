"use client"
import { Fragment, useState } from "react";

export default function Experience () {
    const [active, setActive] = useState(1);

    const experience = [
        {
          id: 1,
          company: "Oluadepe Farms Ltd.",
          title: "QA Tester Intern",
          range: "Jun 2023 - Present",
          url: "",
          btn: 1,
          description: [
            "Component Unit and E2E testing on an existing code base, ensured efficient code quality and maintainability.",
            "Promoted Test Driven Development (TDD) and wrote clear documentation for the code base and test cases.",
          ]
      },
        {
            id: 2,
            company: "Circle-Dodge Systems",
            title: "Back-end Developer",
            range: "Feb 2023 - Aug 2023",
            url: "https://circle-dodge.com",
            btn: 2,
            description: [
              "Worked in collaboration with a team to build and maintain the backend for a robust restaurant management system.",
              "Implemented SOLID development principles to ensure code quality and maintainability."
            ]
        },
      {
        id: 3,
        company: "Cybtracy",
        title: "Volunteer",
        range: "Jul 2023 - Present",
        url: "https://circle-dodge.com",
        btn: 3,
        description: [
          "Led a small team to build the official website of the organization",
          "Worked on the social media and marketing team to promote the organization's mission and vision of promoting digital literacy among kids in underserved communities."
        ]
      },
      {
        id: 4,
        company: "",
        title: "A2SV Hackathon Finalist",
        range: "Sep 2023",
        url: "",
        btn: 4,
        description: [
          "Led a team of 4 to develop a web application that aids students in exam preparation using Generative AI.",
          "Pitched the idea to a panel of judges and investors"
        ]
      },
      {
        id: 5,
        company: "Google Developer Student Community",
        title: "Core Team Member",
        range: "Aug 2023",
        url: "",
        btn: 5,
        description: [
          "Actively engaged the student community by hosting events and talk sessions",]
      },
      {
        id: 6,
        company: "alx_africa",
        title: "Software Engineering Trainee",
        range: "Jun 2023",
        url: "",
        btn: 6,
        description: [
          "Learnt the fundamentals of software development including low level programming, data structures and algorithms, and object oriented programming.",
          "Worked in teams to complete projects using Agile methodologies.",
        ]
      },
    ]

    return (
        <section className={`w-full h-screen flex flex-col gap-20 items-center justify-center`}>
          <h1 className="text-4xl font-bold text-center text-white flex flex-row gap-x-3 items-center">
            <span>My Experience</span>
            <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#8892b0" stroke-width="1.32" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
          </h1>
            <main className="w-9/12 flex flex-row justify-center items-center h-2/6 gap-x-10 text-primary">
              <div className="flex flex-col">
                {experience.map((item) => {
                  return (
                    <div className='flex flex-col gap-y-0 items-center justify-center'>
                        <button 
                        key={item.id}
                        onClick={() => {
                          setActive(item.id)
                          
                        }} 
                        className={`w-4 h-4 border border-primary mt-0 kite ${ active === item.id && 'bg-primary' }`}>
                      </button>
                      {item.id !== experience.length && <div className="w-0.5 h-8 bg-primary"></div>}
                    </div>
                  )
                })}
              </div>
              <div className="w-6/12">
                {experience.map((item) => {
                  return(
                    <div key={item.id} className={`border border-primary p-4 relative flex flex-col gap-y-3 ${active === item.id ? 'block' : 'hidden'}`}>
                      <h1 className="text-secondary text-xl font-semibold">{item.title}</h1>
                      <h3 className="text-sm">{item.company}</h3>
                      <p className="absolute right-4 top-5 text-xs">{item.range.toUpperCase()}</p>
                      <span className="flex flex-col gap-y-3 p-2">
                        { item.description.map((i) => {
                          return (
                            <p className="text-sm">{i}</p>
                          )
                        })}
                      </span>
                    </div>
                  )
                })}
              </div>
            </main>
        </section>
    )
}