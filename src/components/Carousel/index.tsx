// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

// Import Swiper styles
import { Box, Text, Flex } from '@chakra-ui/react'

import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CarouselItem } from './CarouselItem'

export function Carousel() {
  return (
    <Box mt="12" mb="8">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <CarouselItem
            image="/continenteeuropeu.png"
            title="Europa"
            description="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            image="/america-norte.jpg"
            title="América do Norte"
            description="O continente mais moderno."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            image="/america-sul.jpg"
            title="América do Sul"
            description="O continente mais tropical."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
