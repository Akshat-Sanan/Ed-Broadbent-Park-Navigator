// Booking component for the slider

import React from 'react';
import styles from './SliderBooking.module.css';


const SliderBooking = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="../assets/bookImage.png" alt="description" />
            <div className={styles.contentContainer}>
                <button className={styles.linkButton}>
                    <a href="https://www.oshawa.ca/en/parks-recreation-and-culture/events-in-the-park.aspx">EVENTS IN THE PARK</a>
                </button>
                    <p className={styles.legend}>
                        Looking to host your event here? 
                        <br></br>
                        Learn more about: </p>

                    <button className={styles.linkButton}>
                        <a href="https://www.oshawa.ca/en/parks-recreation-and-culture/host-an-event.aspx">HOSTING AN EVENT</a>
                    </button>
                    <button className={styles.linkButton}>
                        <a href="https://www.oshawa.ca/en/parks-recreation-and-culture/facilities-and-rentals.aspx">FACILITY BOOKINGS</a>
                    </button>

                </div>
        </div>
    );
};

export default SliderBooking;