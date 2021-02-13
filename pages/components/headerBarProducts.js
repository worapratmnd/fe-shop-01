import style from '../../styles/HeaderBarProduct.module.css';

export default function HeaderBarProducts() {
  return (
    <div className={style.header}>
      <div className={style.sortList}>
        <a>Popular products</a>
        <a>Low price</a>
        <a>High price</a>
      </div>
    </div>
  )
}