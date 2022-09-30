function TechImage(props) {
  return (
    <div>
      <img src={require(`../asset/${props.image}`)} className="tech--image" />
    </div>
  );
}

export default TechImage;
