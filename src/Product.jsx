

function Product({ title, price }) {
    let features = ["Hassan", "Ali", "Awais"]
    // let isDiscount = price>30000 ? "Discound of 5%" : "";
    let isDiscount = price > 30000;

    let styles = { backgroundColor: isDiscount ? "yellow" : null };

    return (
        <div className="product"  >
            <h2 >{title}</h2>
            <h4>Price: {price}</h4>
            {features.map((feature) =>
                <li>{feature}</li>
            )}

            {isDiscount && <p style={styles} >Discount of 5%</p>}





        </div>);
}

export default Product;