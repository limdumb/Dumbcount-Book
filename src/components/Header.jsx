import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

  return(
    <header className="App__Header">
      <MenuIcon fontSize='large' className='Menu__Icon'></MenuIcon>
      <div>
        <h1>Dumbcount Book</h1>
      </div>
    </header>
  )
}