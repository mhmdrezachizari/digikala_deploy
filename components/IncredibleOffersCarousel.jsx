import React from 'react'
import Carusel from './Carusel'
import Image from 'next/image'
import styles from './IncredibleOffersCarousel.module.css'

const IncredibleOffersCarousel = ({ products }) => {
    return (
        <div className={`${styles.outerContainer}`}>
            <div className={`${styles.imageContainer}`}>
                <Image src="/images/box.png" width={80} height={80} />
                <Image src="/images/amazingTypo.png" width={80} height={80} />
            </div>
            <div className={`${styles.carouselContainer}`}>
                <Carusel cardsCount={5} slideToShow={1} data={products} />
            </div>
        </div>



    )
}

export default IncredibleOffersCarousel
