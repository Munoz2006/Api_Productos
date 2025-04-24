export const Card = (character) => {
    const {title, price, description, category, image} = character;

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
            <p>${price}</p>
        </div>
    )
}