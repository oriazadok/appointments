import HairStyle from './HairStyle'

const HaircutMenu = ({ selected }) => {

  const select_style = (s) => { selected(s); }

  const hairStyles = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  let price = 10;

  let index = 0;

  return (
    <div>
        {hairStyles.map((style) => <HairStyle key={index++} hairStyle={style} price={price+=10} select={select_style} />) }
        {/* <HairStyle hairStyle={"A"} price={10} select={select_style} />
        <HairStyle hairStyle={"B"} price={20} select={select_style} />
        <HairStyle hairStyle={"C"} price={30} select={select_style} />
        <HairStyle hairStyle={"D"} price={40} select={select_style} />
        <HairStyle hairStyle={"E"} price={50} select={select_style} />
        <HairStyle hairStyle={"F"} price={60} select={select_style} />
        <HairStyle hairStyle={"G"} price={70} select={select_style} />
        <HairStyle hairStyle={"H"} price={80} select={select_style} />
        <HairStyle hairStyle={"I"} price={90} select={select_style} /> */}
    </div>
  )
}

export default HaircutMenu
