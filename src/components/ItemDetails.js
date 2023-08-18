import '../styles/itemdetails.css'

const ItemDetails = ({ title, pargraph, price }) => {
  return (
    <article className='item-detail'>
      <div className="item-img"></div>
      <div className="item-description">
        <h6 className="item-title">{title}</h6>
        <span className="item-specification">{pargraph}</span>
        <span className="item-price">{price}</span>
      </div>
    </article>
  )
}

export default ItemDetails
