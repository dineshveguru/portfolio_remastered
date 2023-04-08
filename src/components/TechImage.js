function TechImage(props) {
  return (
    <div>
      <img src={`${props.image}`} className="tech--image" />
    </div>
  );
}

export default TechImage;
