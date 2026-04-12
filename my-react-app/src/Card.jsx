import Button from "./Button/Button.jsx"
import PropTypes from "prop-types"

function Card({ pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtz5qt28xVyyuZgsuG_lbo-bVXL48Akrfbw&s",
    title = "Legendary Pirate",
    text = "Currently searching for the One Piece..." }) {

    const styles = {
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: "0",
        color: "brown"
    }

    // const pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgdw6JLtqwjAxS198uriRf_CVrufRXSkO4Q&s";


    return (


        <div className="card">
            <img className="card-image" alt="Profile" src={pic} />
            <h2 style={styles}> {title}</h2>
            <p className="card-text">{text}</p>
            <Button />
        </div>

    );

}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    pic: PropTypes.string
}


//yo garda not showung in dom but shown as we pass in formal parameter as defauukt value

// Card.defaultProps = {
//     title: "Legendary Pirate",
//     text: "Currently searching for the One Piece...",
//     pic: "data:image/png;base64,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"
// }

export default Card   