interface HorizontalLineProps {
  color?: string;
}

const HorizontalLineComponent = ({ color = "#e5e7eb" }: HorizontalLineProps) => {
  return (
    <hr 
      style={{ 
        border: "none",
        color: color,
        backgroundColor: color,
        height: "1px",
        margin: 0,
        width: "90%",
      }}
    />
  );
}

export default HorizontalLineComponent;