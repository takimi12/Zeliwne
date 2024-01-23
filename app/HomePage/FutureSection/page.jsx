'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './FutureSection.module.scss';

const FutureSection = ({ data }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">  </span>';
    },
  };

  const breakpoints = {
    400: {
      slidesPerView: 1,
    },
  800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  };

  return (
    <section className={styles.futureSection}>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={3}
        slidesOffsetBefore={40}
        breakpoints={breakpoints} // Dodaj breakpoints do Swipera
      >
        {data.map((feature, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.feature}>
              <div className={styles.featureWrapper}>
                <div className="FeatureIcon">
                  <Image
                    src={feature.icon.url}
                    alt={feature.icon.alt}
                    width={50}
                    height={50}
                  />
                </div>
                <p className={`${styles.featureTitle} p15six`}>{feature.title}</p>
                <p className={`${styles.featureDescription} p15`}>{feature.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FutureSection;
