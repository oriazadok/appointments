import HairStyle from './HairStyle'
import "../styles/HCMenu.css"

const HaircutMenu = ({ dataMenu, selected }) => {

  const select_style = (s) => { selected(s); }

  return (
    <div className="haircut-menu">
      {Object.keys(dataMenu).map((key) => (
        <HairStyle key={key} hairStyle={dataMenu[key].hair_style} price={dataMenu[key].price} select={select_style} /> 
      ))}
    </div>
  )
}

export default HaircutMenu


