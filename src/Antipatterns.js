export default function Antipatterns() {
  // DON'T DO THIS EVER!!!!
  const root = document.querySelector('#root');
  console.log(root);
  return <h1 className="title">my Tittle</h1>;
}
