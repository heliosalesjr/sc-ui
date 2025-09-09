

const SimpleButton = ( {buttonText, onClick}) => {
    return ( 
        <button onClick={onClick} className="bg-emerald-500 text-white p-2 m-2 rounded-xl transition hover:!bg-emerald-700">
            {buttonText}
        </button>
     );
}
 
export default SimpleButton;