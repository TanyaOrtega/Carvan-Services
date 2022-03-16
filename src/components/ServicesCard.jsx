import styles from "./ServiceCard.module.css";

export function ServicesCard ({ service }) {
    console.log (styles);
    const imageUrl = "https://github.com/TanyaOrtega/carvan-cleaning-services/blob/main/" + service.poster_path;
    return ( <li className={styles.serviceCard}>
        <img  className={ styles.serviceImage} src={imageUrl} alt = {service.title} />
        <div>{service.title}</div></li>
        );
}