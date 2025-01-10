import React, { useState } from 'react';

type SlillsProps = {
  skills: string[];
};

export const Skills = (props: SlillsProps) => {
  const { skills } = props;
  const [isLogin, setIsLogin] = useState(false);

  setTimeout(() => {
    setIsLogin(true);
  }, 1500);

  return (
    <div>
      <p>Skills</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLogin ? (
        <button onClick={() => setIsLogin(false)}>ログアウト</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>ログイン</button>
      )}
    </div>
  );
};
