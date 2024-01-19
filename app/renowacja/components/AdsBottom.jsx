import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import styles from  './AdsBottom.module.scss'

const RenovationAdsBottom = ({ benefits }) => {
  const breakpoints = {
    600: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">  </span>';
    },
  };


  return (
<section className={styles.renovationPageInfoAdvantages}>
<h3 className={styles.heading}>{benefits.benefits_heading}</h3>
<div className={styles.renovationPageInfoParentWrapper}>
        <Swiper
       spaceBetween={20}
       slidesPerView={4}
       slidesOffsetBefore={40}
       wrapperClass={styles.wrapperClass}
       pagination={pagination}
       modules={[Pagination]}
       className={styles.swiper}
       breakpoints={breakpoints}
        >
          {benefits.benefits_repeater.map((benefit, index) => (
            <SwiperSlide key={index}>
             <div className={styles.renovationPageInfoParent}>
          <div className={styles.slides}>
                  <Image src={benefit.benefit_icons.url} alt={benefit.under_icon} width={65} height={64} />
                  <p className={`p15six ${styles.middleText}`}>{benefit.under_icon}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RenovationAdsBottom;
