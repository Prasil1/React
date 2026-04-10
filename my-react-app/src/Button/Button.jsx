import styles from "./button.module.css"
function Button(){
    return(
        // we use module css to prevent naming conflict
        <>
        <button className={styles.button}>Click me for Suprise</button>

        </>
    );
}


export default Button