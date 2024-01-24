import "./styles.css";

function ItemList({title, description, link}) {
  return (
    <div className="item-list">
        <a href={link} rel="noreferrer" target="_blank">{title}</a>
        <p>{description}</p>
        <hr/>
    </div>
  )
}

export default ItemList;