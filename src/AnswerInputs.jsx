function AnswerInputs({
  index,
  answer,
  score,
  setScore,
  formData,
  setFormData,
  isSubmitted,
}) {
  function handleChange(event) {
    const { name, value, dataset, id, checked } = event.target;
    console.log(formData);

    if (dataset.answer === 'true' && checked) {
      setScore(score + 1);
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: {
          answerItem: value,
          data: dataset.answer,
        },
      };
    });
  }
  function highlightAnswers(answerValue, index) {
    if (
      isSubmitted &&
      formData[index]?.answerItem === answerValue &&
      formData[index]?.data === 'true'
    ) {
      return 'right-answer';
    }
    if (
      isSubmitted &&
      formData[index]?.answerItem === answerValue &&
      formData[index]?.data === 'false'
    ) {
      return 'wrong-answer';
    }
  }
  return (
    <>
      <div className="answer-item">
        <input
          type="radio"
          id={answer[0].answerText}
          name={index}
          value={answer[0].answerText}
          onChange={handleChange}
          data-answer={answer[0].isCorrect}
          data-submit={isSubmitted}
        />
        <label
          htmlFor={answer[0].answerText}
          className={highlightAnswers(answer[0].answerText, index)}
        >
          {answer[0].answerText}
        </label>
      </div>
      <div className="answer-item">
        <input
          type="radio"
          id={answer[1].answerText}
          name={index}
          value={answer[1].answerText}
          onChange={handleChange}
          data-answer={answer[1].isCorrect}
        />
        <label
          htmlFor={answer[1].answerText}
          className={highlightAnswers(answer[1].answerText, index)}
        >
          {answer[1].answerText}
        </label>
      </div>
      <div className="answer-item">
        <input
          type="radio"
          id={answer[2].answerText}
          name={index}
          value={answer[2].answerText}
          onChange={handleChange}
          data-answer={answer[2].isCorrect}
        />
        <label
          htmlFor={answer[2].answerText}
          className={highlightAnswers(answer[2].answerText, index)}
        >
          {answer[2].answerText}
        </label>
      </div>
      <div className="answer-item">
        <input
          type="radio"
          id={answer[3].answerText}
          name={index}
          value={answer[3].answerText}
          onChange={handleChange}
          data-answer={answer[3].isCorrect}
        />
        <label
          htmlFor={answer[3].answerText}
          className={highlightAnswers(answer[3].answerText, index)}
        >
          {answer[3].answerText}
        </label>
      </div>
    </>
  );
}

export default AnswerInputs;