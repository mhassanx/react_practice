import Price from "./Price";

export default function Card({ title, idx }) {
    let oldPrices = ["100", "200", "300", "400"];
    let newPrices = ["90", "150", "250", "300"];
    let description = ['huhahaa', 'yainyainyainain', 'meowww', 'gop gop gop'];
    return (
        <div className="product">

            <h2>{title}</h2>
            <p>{description[idx]}</p>

            <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />




        </div>
    )
}