import HairStyle from './HairStyle'
import "../styles/HCMenu.css"

const HaircutMenu = ({ dataMenu, selected }) => {

  const select_style = (s) => { selected(s); }

  const hairStyles = dataMenu;

  return (
    <div className="haircut-menu">
        {hairStyles.map((style, index) => <HairStyle key={index} hairStyle={style.hair_style} price={style.price} select={select_style} />) }
    </div>
  )
}

export default HaircutMenu


