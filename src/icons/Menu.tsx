
const Menu = ({ className, onClick }: any) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
    >
      <rect width="16" height="2" fill="white" />
      <rect y="8" width="24" height="2" fill="white" />
      <rect x="8" y="16" width="16" height="2" fill="white" />
    </svg>
  );
};

export default Menu;
