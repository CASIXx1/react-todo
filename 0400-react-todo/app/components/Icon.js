export default function Icon({ className, onClick, children }) {
  return (
    <i className={className} onClick={onClick}>
      {children}
    </i>
  );
}