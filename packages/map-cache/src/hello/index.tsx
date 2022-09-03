import React from 'react';
// Import scss modules
import scssClasses from './styles.module.scss';

export interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => (
  <div className={scssClasses.helloScss}>
    <p className={scssClasses.helloScss}>Hello, {name}</p>
  </div>
);

export default Hello;
