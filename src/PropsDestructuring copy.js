// Destructure the properties of the `props` object
export default function PropsDestructuring({ baggageTypes, seatClasses }) {
  return (
    <>
      <h1>Props Destructuring</h1>
      <div>{baggageTypes.join(',')}</div>
      <div>{seatClasses.join(',')}</div>
    </>
  );
}
