const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li
        className={active ? "bg-slate-600 border-2 border-slate-600 mx-1  p-1 rounded-full" : "border-2 border-slate-600 p-1 mx-1 rounded-full"}
        onClick={() => onClick()}
      >    
      </li>
    );
  };
  export default CustomDot;