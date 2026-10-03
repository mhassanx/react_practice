
// import './App.css'
import Card from './Card';
import MsgBox from './MsgBox';
import './Product.css'
// import Product from './Product';
import ProductTab from './ProductTab';





function App() {

  return (
    <>

      <Card title="Aap ki izzat novel" description="man is a social animal" idx={0} />

      <Card title="Dar e Nijat" description="people hate what they don't understand" idx={1} />
      <Card title="Namal" description="dil mn mery hai dard e disco" idx={2} />
      <Card title="Dard e Dil" description="i'm vengeance" idx={3} />


      {/* <MsgBox userName="Hassan Tariq" textColor="olive" />
      <MsgBox userName="Umer Khan" textColor="pink" />

      <ProductTab /> */}




    </>
  );

}

export default App
