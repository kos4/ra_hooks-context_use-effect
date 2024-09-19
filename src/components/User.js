export default function User({item, click}) {
  const className = `users__item ${item.active}`;
  return (
    <div className={className} onClick={click} id={item.id}>{item.name}</div>
  );
}