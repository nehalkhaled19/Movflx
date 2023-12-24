
import React from 'react'
import './Home.css'
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {

  // ---------------------Get DATA---------------------//

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODJjNjg1ZmYyZTcwYWY4Yjc4MmVjNzliODFkMzNhNiIsInN1YiI6IjY0ZmNiZjhiZmZjOWRlMGVkZjVmMDhhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djg5chA3Ca-uZ56OqOW4SIyeoQ6cRH3rJAdBk4x1lYQ'
    }
  };
// fetch data
  function getMovies() {
    return fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
  }
// Use React Query
  let { isLoading, data } = useQuery('Movies', getMovies)
  let movies = data?.results.slice(15, 20)


  // ---------------------slider settings---------------------//
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };
  // ---------------------AOS animation---------------------//
  useEffect(() => {
    AOS.init();
  }, [])



  return <section className='Home mt-5 vh-100 d-flex '>


    <div className="container d-flex align-items-center">
      <div className="row  w-100 align-items-center ">
        {/* ---------------------HeadLine--------------------- */}
        <div className="col-md-6">
          <h6 className='main-color' data-aos="fade-up"
            data-aos-duration="500">Movflx</h6>
          <h2 className='text-white my-3' data-aos="fade-up"
            data-aos-duration="500" data-aos-delay="500">  Unlimited <span className='main-color'>Movie</span>, TV Shows, & More</h2>
          <button className='btn rounded-5 ' data-aos="fade-up"
            data-aos-duration="500" data-aos-delay="1000">
            <i className='fa-solid fa-play me-2 '></i> WATCH NOW
          </button>
        </div>
        {/* ---------------------Slider--------------------- */}
        <div className="col-md-6  p-0">
          <Slider  {...settings}   >
            {movies?.map((e) => (
              <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="1200" key={e.title} >
                <div
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="1000"
                  data-aos-duration="500" className="layer-carrier rounded-3">
                  <img
                    src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                    className='w-100 rounded-3 image'
                    alt={e.title}
                  />
                  <div className='movie-layer rounded-3'></div>
                </div>
              </div>
            ))}

          </Slider>


        </div>
      </div>
    </div>
  </section>

}
