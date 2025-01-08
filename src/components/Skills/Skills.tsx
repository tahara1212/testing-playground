import React from 'react'

type SlillsProps = {
  skills: string[];
}

export const Skills = (props: SlillsProps) => {
  const { skills } = props
  return (
    <div>
      <p>Skills</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
