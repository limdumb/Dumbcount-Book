export const DemoButton = ({ name, backgroundColor, color }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor || 'white',
        color: color || 'black',
        border: 'none',
      }}
    >
      {name}
    </button>
  )
}
