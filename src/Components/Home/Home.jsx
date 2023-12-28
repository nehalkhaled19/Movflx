
import React, { useState, useEffect, useRef } from 'react'
import './Home.css'
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useHistory } from 'react-router-dom';
useH
export default function Home() {
 
  // ---------------------First Section---------------------//
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
  let x = useQuery('Movies', getMovies)
  let movies = x.data?.results.slice(5, 10)

  // AOS Animation//
  useEffect(() => {
    AOS.init();
  }, [])

  // First slider settings//
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
  // ---------------------Get Trending Movies---------------------//
  // fetch data
  function getTrendingMovies() {
    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
  }
  // Use React Query
  let { data } = useQuery('TrendingMovies', getTrendingMovies)
  let trendingMovies = data?.results

  // Sec slider settings//
  const slider = React.useRef(null);
  const settings2 = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
  }
  // ---------------------Get Trending Tv---------------------//
  // fetch data
  function getTrendingTV() {
    return fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
      .then(response => response.json())
  }
  // Use React Query
  let tv = useQuery('TV', getTrendingTV)
  let trendingTV = tv.data?.results
  const slider2 = React.useRef(null);
  const settings3 = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const history = useHistory();
  const handleClick = () => {
    scrollToSection('movies');
    history.push('/path-to-target');
  };
  return <main >
    {/* first Section */}ِ
    <header className='Home mt-5 vh-100 d-flex '>
      <div className="container d-flex align-items-center">
        <div className="row  w-100 align-items-center ">
          {/* ---------------------HeadLine--------------------- */}
          <div className="col-md-6">
            <h6 className='main-color main-font-weight' data-aos="fade-up"
              data-aos-duration="700">Movflx</h6>
            <h2 className='text-white my-3 main-font-weight' data-aos="fade-up"
              data-aos-duration="900" data-aos-delay="250">  Unlimited <span className='main-color'>Movie</span>, TV Shows, & More</h2>
           
            <button  onClick={handleClick} className='btn rounded-5 main-font-weight ' data-aos="fade-up"
              data-aos-duration="1100" data-aos-delay="500">
              <i className='fa-solid fa-play me-2 '></i> WATCH NOW
            </button>
          </div>
          {/* ---------------------Slider--------------------- */}
          <div className="col-md-6  p-0">
            <Slider  {...settings}   >
              {movies?.map((e) => (
                <div data-aos="fade-left" style={{ height: '300px' }} data-aos-duration="1100" data-aos-delay="500" key={e.title} >
                  <div
                    className="rounded-3">
                    <img
                      src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                      className='w-100 h-100 rounded-3 main-img'
                      alt={e.title}
                    />

                  </div>
                </div>
              ))}

            </Slider>


          </div>
        </div>
      </div>
    </header>

    {/* Trending Movies Section */}
    <section id='movies' className='trending-movies py-5'>
      <div className="container">
        <div className="d-flex ">
          <h2 className='position-relative main-font-weight main-h2'>Trending Movies</h2>
          {/* Custom arrow container */}
          <div className="custom-arrows-container ms-auto">
            <div className='slider-btn rounded-4 '>
              <button className='btn px-3 position-relative prev' onClick={() => slider?.current?.slickPrev()}>
                <i class="fas fa-angle-left left"></i>
              </button>
              <button className='btn px-3 ' onClick={() => slider?.current?.slickNext()}>
                <i class="fas fa-angle-right arrow"></i>
              </button>
            </div>
          </div>

        </div>
        <main className='row flex-wrap gy-4'>
          {/* movies */}
          <Slider ref={slider} {...settings2} className='px-2'  >
            {trendingMovies?.map((e) => (
              <div className='col-md-2 ' key={e.id}>
                <div className='py-3 px-0  '>
                  <div className='position-relative mx-3 '>
                    <div className='layer-carrier rounded-3 '>
                      {/* poster */}
                    
                      <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} className='w-100  poster' style={{ height: '350px' }} alt={e.title} />

                        {/* see more */}
                      <div className='movie-layer rounded-3 d-flex align-items-center justify-content-center'>
                        <button className='btn rounded-5 see-more'>See more
                          <i class="fa-solid fa-arrow-right-long mx-2"></i></button>
                      </div>
                    </div>
                    </div>
                    {/* rate */}
                    <h6 className='my-3'>{e.title}</h6>
                    <div role="progressbar" className='vote' aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" rate={e.vote_average} style={{ "--value": `${e.vote_average}` }}></div>
                  </div>
                
              </div>
            ))}
          </Slider>
        </main>
      </div>
    </section>
    {/* Trending TV Section */}
    <section className='trending-TV py-5'>
      <div className="container">
        <div className="d-flex ">
          <h2 className='position-relative main-font-weight main-h2'>Trending TV shows</h2>
          {/* Custom arrow container */}
          <div className="custom-arrows-container ms-auto">
            <div className='slider-btn rounded-4 '>
              <button className='btn px-3 position-relative prev' onClick={() => slider2?.current?.slickPrev()}>
                <i class="fas fa-angle-left left"></i>
              </button>
              <button className='btn px-3 ' onClick={() => slider2?.current?.slickNext()}>
                <i class="fas fa-angle-right arrow"></i>
              </button>
            </div>
          </div>

        </div>
        <main className='row flex-wrap gy-4'>
          {/* tv shows */}
          <Slider ref={slider2} {...settings3} className='px-2'  >
            {trendingTV?.map((e) => (
              <div className='col-md-2 ' key={e.id}>
                <div className='py-3 px-0 '>
                  <div className='position-relative  mx-3'>
                    <div className='layer-carrier rounded-3'>
                      {/* poster */}
                      <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} className='w-100  poster' style={{ height: '350px' }} alt={e.title} />
                     {/* see more */}
                      <div className='movie-layer rounded-3 d-flex align-items-center justify-content-center'>
                        <button className='btn rounded-5 see-more'>See more
                          <i class="fa-solid fa-arrow-right-long mx-2"></i></button>
                      </div>
                    </div>
                    {/* rate */}
                    <h6 className='my-3'>{e.name}</h6>
                    <div role="progressbar" className='vote' aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" rate={e.vote_average} style={{ "--value": `${e.vote_average}` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </main>
      </div>
    </section>
    
  </main>
}
