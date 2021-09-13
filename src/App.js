import './App.css';
import Counter from './Counter';

// 2. You need to declare the props argument
// which will become the object with all of the
// values
function Header(props) {
  // 3. Inside of the function, you can use the
  // props by accessing them inside of the object...

  // 3.1 ...for instance, with
  // props object: {mode: 'light', name: 'Karl Horky'}
  console.log('props object: ', props);
  // mode: light
  console.log('mode: ', props.mode);
  // name: Karl Horky
  console.log('name: ', props.name);

  return (
    <header>
      {/*
        3.2 ...or, show them in the page:
        To show this in the JSX, use the curly brackets
      */}
      mode: {props.mode}
      <br />
      name: {props.name}
      <br />
      <br />
      <br />
    </header>
  );
}

// Write longer JavaScript here

export default function App() {
  // Or write longer JavaScript here
  const settingsMode = 'light';
  const lastName = 'Horky';

  return (
    <div>
      <Header
        // 1. All of these props (space-separated, with name={value})
        // will become a part of the `props` object up above
        //
        // If this helps, you can think of props like arguments in a function:
        // Header({mode: settingsMode, name: `Karl ${lastName}`})
        mode={settingsMode}
        name={`Karl ${lastName}`}
      />

      <Counter />
    </div>
  );
}
