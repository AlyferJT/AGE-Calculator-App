import { useState } from "react";

import arrowImg from "../assets/images/icon-arrow.svg";
import Input from "./Input";

const objectDefault = {
  day: "",
  month: "",
  year: "",
};

function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

export default function UserInput({ setResult, handleResult }) {
  const [error, setError] = useState(objectDefault);
  const [userInput, setUserInput] = useState(objectDefault);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevInput) => {
      const newInput = {
        ...prevInput,
        [name]: value,
      };
      return newInput;
    });
    setError(objectDefault);
    setResult();
  }

  function handleClick() {
    const day = parseInt(userInput.day);
    const month = parseInt(userInput.month);
    const year = parseInt(userInput.year);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      setError((prevErr) => {
        const newErr = {
          ...prevErr,
          day: isNaN(day) && "This field is required",
          month: isNaN(month) && "This field is required",
          year: isNaN(year) && "This field is required",
        };
        return newErr;
      });
      setResult();
      return;
    }

    const isValidDate = isDateValid(`${month}/${day}/${year}`);
    if (!isValidDate) {
      if (year > new Date().getFullYear()) {
        setError((prevErr) => {
          const newErr = {
            ...prevErr,
            year: "Must be a valid year",
          };
          return newErr;
        });
      }

      if (isDateValid(`4/${day}/${year}`)) {
        setError((prevErr) => {
          const newErr = {
            ...prevErr,
            month: "Must be a valid month",
          };
          return newErr;
        });
      }

      if (isDateValid(`${month}/10/${year}`)) {
        setError((prevErr) => {
          const newErr = {
            ...prevErr,
            day: "Must be a valid day",
          };
          return newErr;
        });
      }
      setResult();
    } else {
      if (new Date() < new Date(`${year}-${month}-${day}`)) {
        setError({
          day: "Must be a valid date",
          month: "hide",
          year: "hide",
        });
        setResult();
      } else {
        handleResult(day, month, year);
      }
    }
  }
  return (
    <form className="main__form">
      <div className="main__form__inputs">
        <Input
          placeholder="DD"
          labelText="day"
          error={error.day}
          onChange={handleChange}
        />
        <Input
          placeholder="MM"
          labelText="month"
          error={error.month}
          onChange={handleChange}
        />
        <Input
          placeholder="YYYY"
          labelText="year"
          error={error.year}
          onChange={handleChange}
        />
      </div>
      <div className="main__form__imgBox">
        <img
          onClick={handleClick}
          className="main__form__imgBox-img"
          src={arrowImg}
          alt="arrow button image"
        />
      </div>
    </form>
  );
}
