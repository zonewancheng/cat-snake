
const Cat = () => {
  return (
    <div className="cat-container">
      <div className="cat">
        <div className="ears">
          <div className="ear left"></div>
          <div className="ear right"></div>
        </div>
        <div className="face">
          <div className="eyes">
            <div className="eye left">
              <div className="shine"></div>
            </div>
            <div className="eye right">
              <div className="shine"></div>
            </div>
          </div>
          <div className="nose"></div>
          <div className="cheeks">
            <div className="cheek left"></div>
            <div className="cheek right"></div>
          </div>
          <div className="mouth">
            <div className="mouth-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;