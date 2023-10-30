

const ActualCart = (item) => {
    return (
        <>
            <h1>{item.title}</h1>
            <img src={item.img} alt="image"/>
        </>
    )
}

export default ActualCart;