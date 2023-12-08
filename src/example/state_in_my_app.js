function MyButton({onClick, count}){
    return(
        <button onClick={onClick}>Clicked {count} Times</button>
    );
}

export default MyButton;
