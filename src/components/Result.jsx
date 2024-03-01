export default function Result({ result }) {
  return (
    <section className="main__result">
      <h2 className="main__result-h2">
        <span className="main__result-number">{result.years}</span> years
      </h2>
      <h2 className="main__result-h2">
        <span className="main__result-number">{result.months}</span> months
      </h2>
      <h2 className="main__result-h2">
        <span className="main__result-number">{result.days}</span> days
      </h2>
    </section>
  );
}
