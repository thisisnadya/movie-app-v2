import { Load } from "../styled/StyledComponents";

function Loading() {
  return (
    <Load>
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <div className="text">Loading...</div>
    </Load>
  );
}

export default Loading;
