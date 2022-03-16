import { ServicesCard } from "./ServicesCard";
import services from "./services.json";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {

  return (
    <ul className={styles.servicesGrid}>
     {services.map((service) => ( 
     <ServicesCard key={service.id} service={service}/>
     ))}
    </ul>
  );
}
