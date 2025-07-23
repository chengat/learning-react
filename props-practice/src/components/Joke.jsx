export default function Joke(props) {
  return (
    <>
      {props.setup && <p class="setup">Setup: {props.setup}</p>}
      <p class="punchline">Punchline: {props.punchline}</p>
      <hr></hr>
    </>
  );
}
