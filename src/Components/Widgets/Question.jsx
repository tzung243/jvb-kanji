import { Radio } from "@material-tailwind/react";
import React from "react";

export function Question({ question, label }) {
  return (
    <form
      className="kanji__question__container"
      onChange={(event) => {
        console.log(event.target.value);
      }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <p className="kanji__topic__question">
        <i className="kanji__topic__question__label">{label}</i>
        {question.topic}
      </p>
      <Radio label={`A. ${question.a}`} name="answer" ripple value={"A"} />
      <Radio label={`B. ${question.b}`} name="answer" ripple value={"B"} />
      <Radio label={`C. ${question.c}`} name="answer" ripple value={"C"} />
      <Radio label={`D. ${question.d}`} name="answer" ripple value={"D"} />
    </form>
  );
}
