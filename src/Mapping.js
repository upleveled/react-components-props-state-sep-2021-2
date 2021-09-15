export default function Mapping(props) {
  return (
    <>
      <h1>Mapping</h1>
      <div>
        Baggage Types:
        <ol>
          {props.baggageTypes.map((baggageType) => (
            <li key={`baggage-type-${baggageType.id}`}>{baggageType.label}</li>
          ))}
        </ol>
      </div>

      <div>
        Seat Classes:
        <ol>
          {props.seatClasses.map((seatClass) => (
            <li key={`seat-class-${seatClass.id}`}>{seatClass.label}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
