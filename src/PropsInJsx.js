export default function PropsInJsx(props) {
  return (
    <>
      <h1>Props Destructuring</h1>
      <div>show all props: {JSON.stringify(props)}</div>
      <div>
        show all props with formatting:
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </>
  );
}
