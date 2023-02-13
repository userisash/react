import React from 'react';

const QuizTitle = ({ title }) => <h1>{title}</h1>;

const Q1Title = ({ title }) => <h2>{title}</h2>;
const Q1Input = () => <input type="range" />;
const Q1 = ({ title }) => (
  <>
    <Q1Title title={title} />
    <Q1Input />
  </>
);

const Q2Title = ({ title }) => <h2>{title}</h2>;
const Q2Input = () => <input type="text" />;
const Q2 = ({ title }) => (
  <>
    <Q2Title title={title} />
    <Q2Input />
  </>
);


const Quiz = () => (
  <>
    <QuizTitle title="Front End Quiz" />
    <Q1 title="How munch do you love front end?" />
    <Q2 title="What is your favorite subject in front end?" />
  </>
);

export default Quiz;
