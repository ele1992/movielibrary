import "./MovieDisplay.css";
export default function MovieDisplay({ props }) {
  return (
    <div className="container">
      <h3>
        {props.Title} ({props.Year})
      </h3>
      <img src={props.Poster} alt="" className="moviePoster" />
    </div>
  );
}
