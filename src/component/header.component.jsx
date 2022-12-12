import './header.component.css';

export const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}
