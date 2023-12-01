import './NavBar.css'
import Logo from '/logo-b.png'



// Create a componente that recived a input and find in dataframe for the response
export default function NavBar() {
    return (
        <div className='container'>
        <a href="#" target="_blank">
          <img src={Logo} className="logo" alt="TecNM | Tecnológico Nacional de México" />
        </a>
      </div>

    )
}