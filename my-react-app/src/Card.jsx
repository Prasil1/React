import Button from "./Button/Button.jsx"

function Card() {
    const styles = {
        fontfamily: "Arial, Helvetica, sansserif",
        margin: "0",
        color: "brown"
    }

    const pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgdw6JLtqwjAxS198uriRf_CVrufRXSkO4Q&s";

    
    return (


        <div className="card">
            <img className="card-image" alt="image_1" src={pic}></img>
            <h2 style ={styles}>Yo hohoho </h2> {/* inline css styling*/}
            <p className="card-text">hey i am practicing react</p>
            <Button />
        </div>

    );

}

export default Card