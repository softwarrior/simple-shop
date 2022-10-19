import styles from "./Some.module.css";

const Item = ({ id = "", label = "" }) => (
  <li>
    {id} – {label}
  </li>
);

{
  /* https://ru.reactjs.org/docs/lists-and-keys.html */
}
const Some = ({ list = [], title = "" }) => (
  <div className={styles.some}>
    <div className={styles.title}>{title}</div>
    <ul className={styles.list}>
      {list.map((item) => (
        <Item id={item.id} key={item.id} label={item.label} />
      ))}
    </ul>
  </div>
);

// ----------------------------------------
// usage
export const App = () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push({
      id: i,
      label: "label" + i,
    });
  }
  return <Some list={arr} title="Заголовок" />;
};
