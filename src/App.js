import React, { Component } from 'react';
import './App.css';

// import  {Header}  from './components/Header';
// import  MovieList  from './components/MovieList';

import JSON from '../src/db.json';

 class App extends Component {

  state = {
    movies: JSON
  }



  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
        
        <div className="main home-3">
        <div  className='preloader'>
            <div  className='preloader-lod'></div>
            <div  className='preloader-lod'></div>
            <div  className='preloader-lod'></div>
            <div  className='preloader-loding'>Movie Star…</div>
            <div  className='large-square'></div>
        </div>
        <div className="header-section header-2">
            <div  className="navbar navbar-default bootsnav navbar-sticky">
                <div  className="container">
               
                    <div  className="top-search">
                        <div  className="input-group">
                            <span  className="input-group-addon"><i  className="fa fa-search"></i></span>
                            <input type="text"  className="form-control" placeholder="Search"/>
                            <span  className="input-group-addon close-search"><i  className="fa fa-times"></i></span>
                        </div>
                    </div>
                
                    <div  className="attr-nav">
                        <ul>
                            <li  className="search"><a href="">Search</a></li>
                        </ul>
                    </div>
                   
                    <div  className="navbar-header">
                        <button type="button"  className="navbar-toggle" data-toggle="collapse" data-target="navbar-menu">
                            <i  className="fa fa-align-justify"></i>
                        </button>
                        <a  className="navbar-brand" href="index-2.html"><img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/></a>
                    </div>
               
                    <div  className="collapse navbar-collapse" id="navbar-menu">
                        <ul  className="nav navbar-nav navbar-left" data-in="" data-out="">
                            <li  className="dropdown">
                                <a href=""  className="dropdown-toggle" data-toggle="dropdown">Home</a>
                                <ul  className="dropdown-menu">
                                    <li><a href="index.html">home page 1</a></li>
                                    <li><a href="index_2.html">home page 2</a></li>
                                    <li><a href="index_3.html">home page 3</a></li>
                                    <li><a href="index_4.html">home page 4</a></li>
                                    <li><a href="index_5.html">home page 5</a></li>
                                    <li><a href="index_6.html">home page 6</a></li>
                                </ul>
                            </li>
                            <li><a href="event.html">event</a></li>
                            <li  className="dropdown">
                                <a href=""  className="dropdown-toggle" data-toggle="dropdown">Celebritie</a>
                                <ul  className="dropdown-menu">
                                    <li><a href="celebrities.html">Celebritie</a></li>
                                    <li><a href="celebrities-left.html">Celebritie Left</a></li>
                                    <li><a href="celebrities-right.html">Celebritie Right</a></li>
                                    <li><a href="celebritie-single.html">Celebritie Single</a></li>
                                </ul>
                            </li>
                            <li  className="dropdown megamenu-fw">
                                <a href=""  className="dropdown-toggle" data-toggle="dropdown">Shortcode</a>
                                <ul  className="dropdown-menu megamenu-content" role="menu">
                                    <li>
                                        <div  className="row">
                                            <div  className="col-menu col-md-3">
                                                <h6  className="title">Page List</h6>
                                                <div  className="content">
                                                    <ul  className="menu-col">
                                                        <li><a href="grid-page.html">Grid Page</a></li>
                                                        <li><a href="grid-left.html">grid Left</a></li>
                                                        <li><a href="grid-right.html">grid right</a></li>
                                                        <li><a href="list-page.html">List Page</a></li>
                                                        <li><a href="list-left.html">List left</a></li>
                                                        <li><a href="list-right.html">List right</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="col-menu col-md-3">
                                                <h6  className="title">Page list</h6>
                                                <div  className="content">
                                                    <ul  className="menu-col">
                                                        <li><a href="details.html">Details Page</a></li>
                                                        <li><a href="faq.html">faq page</a></li>
                                                        <li><a href="call-to-action.html">call-to-action</a></li>
                                                        <li><a href="shortcode-alerts.html">shortcode alert</a></li>
                                                        <li><a href="tag.html">tag</a></li>
                                                        <li><a href="toggle.html">toggle</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="col-menu col-md-3">
                                                <h6  className="title">page list</h6>
                                                <div  className="content">
                                                    <ul  className="menu-col">
                                                        <li><a href="">Acodiam</a></li>
                                                        <li><a href="">blockquote</a></li>
                                                        <li><a href="">breadcrumb</a></li>
                                                        <li><a href="">pagination</a></li>
                                                        <li><a href="">tab</a></li>
                                                        <li><a href="">social icon</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="col-menu col-md-3">
                                                <h6  className="title">Moview List</h6>
                                                <div  className="content">
                                                    <ul  className="menu-col">
                                                        <li><a href="">English</a></li>
                                                        <li><a href="">Hindi</a></li>
                                                        <li><a href="">india</a></li>
                                                        <li><a href="">tamil</a></li>
                                                        <li><a href="">animation</a></li>
                                                        <li><a href="">3d Movie</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li  className="dropdown">
                                <a href=""  className="dropdown-toggle" data-toggle="dropdown">page</a>
                                <ul  className="dropdown-menu">
                                    <li><a href="gallery.html">gallery</a></li>
                                    <li  className="dropdown">
                                        <a href=""  className="dropdown-toggle" data-toggle="dropdown">404 page</a>
                                        <ul  className="dropdown-menu">
                                            <li><a href="404.html">404 page 1</a></li>
                                            <li><a href="404_2.html">404 page 2</a></li>
                                        </ul>
                                    </li>
                                    <li  className="dropdown">
                                        <a href=""  className="dropdown-toggle" data-toggle="dropdown">LogIn page</a>
                                        <ul  className="dropdown-menu">
                                            <li><a href="login.html">login 1</a></li>
                                            <li><a href="login-2.html">login 2</a></li>
                                            <li><a href="login-3.html">login 3</a></li>
                                            <li><a href="login-4.html">login 4</a></li>
                                        </ul>
                                    </li>
                                    <li  className="dropdown">
                                        <a href=""  className="dropdown-toggle" data-toggle="dropdown">Comming soon</a>
                                        <ul  className="dropdown-menu">
                                            <li><a href="coming_soon.html">Comming soon</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li  className="dropdown">
                                <a href=""  className="dropdown-toggle" data-toggle="dropdown">Blog</a>
                                <ul  className="dropdown-menu">
                                    <li><a href="blog.html">Blog 1</a></li>
                                    <li><a href="blog-2.html">Blog 2</a></li>
                                    <li><a href="blog-3.html">Blog 3</a></li>
                                    <li><a href="single-blog.html">single blog 1</a></li>
                                    <li><a href="single-blog-2.html">single Blog 2</a></li>
                                    <li><a href="single-blog-3.html">single Blog 3</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div  className="slider-section slider-2 carousel bs-slider fade control-round indicators-line" id="bootstrap-touch-slider" data-ride="carousel" data-pause="hover" data-interval="5000">
            <div  className="slider-items carousel-inner" role="listbox">
                <div  className="item active">
                    <div  className="slider-img">
                        <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200' />
                    </div>
                    <div  className="slider-contents">
                        <div  className="container">
                            <div  className="row">
                                <div  className="col-lg-offset-3 col-md-offset-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div  className="slider-content">
                                        <h3  className="delay-03" data-animation="animated fadeInLeft">Welcome to Our movie site</h3>
                                        <h2  className="delay-04" data-animation="animated fadeInRight ">Our special <span  className="pink">Movies</span></h2>
                                        <p  className="delay-06" data-animation="animated fadeInLeft">Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                        <a href=""  className="btn btn-button pink-bg button-1 animation delay-04" data-animation="animated fadeInRight">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="item">
                    <div  className="slider-img">
                        <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                    </div>
                    <div  className="slider-contents">
                        <div  className="container">
                            <div  className="row">
                                <div  className="col-lg-offset-3 col-md-offset-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div  className="slider-content">
                                        <h3  className="delay-03" data-animation="animated fadeInLeft">Welcome to Our movie site</h3>
                                        <h2  className="delay-04" data-animation="animated fadeInRight ">Our special <span  className="pink">Movies</span></h2>
                                        <p  className="delay-06" data-animation="animated fadeInLeft">Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                        <a href=""  className="btn btn-button pink-bg button-1 animation delay-04" data-animation="animated fadeInRight">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a  className="left carousel-control" href="bootstrap-touch-slider" role="button" data-slide="prev">
                <span  className="flaticon-send" aria-hidden="true"></span>
                <span  className="sr-only">Previous</span>
            </a>
            <a  className="right carousel-control" href="bootstrap-touch-slider" role="button" data-slide="next">
                <span  className="flaticon-send" aria-hidden="true"></span>
                <span  className="sr-only">Next</span>
            </a>
        </div>
        <div className="top-rating">
            <div className="slide-movie-items">
                <div id="catslide">
                    <div  className="item">
                        <div  className="movie-item-contents gradient3">
                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                            <div  className="movie-item-content">
                                <div  className="movie-item-content-top">
                                    <div  className="pull-left">
                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                    </div>
                                    <div  className="pull-right">
                                        <div  className="movie-ratting">
                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                        </div>
                                    </div>
                                </div>
                                <div  className="movie-item-content-center">
                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                </div>
                                <div  className="movie-item-content-buttom">
                                    <div  className="movie-item-title">
                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                    </div>
                                    <div  className="item-cat">
                                        <ul>
                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                        </ul>
                                        <div  className="item-cat-hover">
                                            <ul>
                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div  className="movie-item-beta">
                                        <div  className="movie-details">
                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                        </div>
                                        <div  className="view-movie hover-right">
                                            <a  className="black-bg" href="">15k view</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div  className="movie-item-contents gradient3">
                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                            <div  className="movie-item-content">
                                <div  className="movie-item-content-top">
                                    <div  className="pull-left">
                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                    </div>
                                    <div  className="pull-right">
                                        <div  className="movie-ratting">
                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                        </div>
                                    </div>
                                </div>
                                <div  className="movie-item-content-center">
                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                </div>
                                <div  className="movie-item-content-buttom">
                                    <div  className="movie-item-title">
                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                    </div>
                                    <div  className="item-cat">
                                        <ul>
                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                        </ul>
                                        <div  className="item-cat-hover">
                                            <ul>
                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div  className="movie-item-beta">
                                        <div  className="movie-details">
                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                        </div>
                                        <div  className="view-movie hover-right">
                                            <a  className="black-bg" href="">15k view</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="item">
                        <div  className="movie-item-contents gradient3">
                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                            <div  className="movie-item-content">
                                <div  className="movie-item-content-top">
                                    <div  className="pull-left">
                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                    </div>
                                    <div  className="pull-right">
                                        <div  className="movie-ratting">
                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                        </div>
                                    </div>
                                </div>
                                <div  className="movie-item-content-center">
                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                </div>
                                <div  className="movie-item-content-buttom">
                                    <div  className="movie-item-title">
                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                    </div>
                                    <div  className="item-cat">
                                        <ul>
                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                        </ul>
                                        <div  className="item-cat-hover">
                                            <ul>
                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div  className="movie-item-beta">
                                        <div  className="movie-details">
                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                        </div>
                                        <div  className="view-movie hover-right">
                                            <a  className="black-bg" href="">15k view</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="item">
                        <div  className="movie-item-contents gradient3">
                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                            <div  className="movie-item-content">
                                <div  className="movie-item-content-top">
                                    <div  className="pull-left">
                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                    </div>
                                    <div  className="pull-right">
                                        <div  className="movie-ratting">
                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                        </div>
                                    </div>
                                </div>
                                <div  className="movie-item-content-center">
                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                </div>
                                <div  className="movie-item-content-buttom">
                                    <div  className="movie-item-title">
                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                    </div>
                                    <div  className="item-cat">
                                        <ul>
                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                        </ul>
                                        <div  className="item-cat-hover">
                                            <ul>
                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div  className="movie-item-beta">
                                        <div  className="movie-details">
                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                        </div>
                                        <div  className="view-movie hover-right">
                                            <a  className="black-bg" href="">15k view</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="item">
                        <div  className="movie-item-contents gradient3">
                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                            <div  className="movie-item-content">
                                <div  className="movie-item-content-top">
                                    <div  className="pull-left">
                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                    </div>
                                    <div  className="pull-right">
                                        <div  className="movie-ratting">
                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                        </div>
                                    </div>
                                </div>
                                <div  className="movie-item-content-center">
                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                </div>
                                <div  className="movie-item-content-buttom">
                                    <div  className="movie-item-title">
                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                    </div>
                                    <div  className="item-cat">
                                        <ul>
                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                        </ul>
                                        <div  className="item-cat-hover">
                                            <ul>
                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div  className="movie-item-beta">
                                        <div  className="movie-details">
                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                        </div>
                                        <div  className="view-movie hover-right">
                                            <a  className="black-bg" href="">15k view</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div  className="new-movie pt-75">
            <div  className="haddings">
                <div  className="container">
                    <div  className="hadding-area">
                        <h2>Movies Category</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </div>
                </div>
            </div>
            <div  className="new-movie-inner pt-50">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div  className="movie-big" id="movie-slide">
                                <div  className="item">
                                    <div  className="movie-item-contents gradient3">
                                        <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                        <div  className="movie-item-content">
                                            <div  className="movie-item-content-top">
                                                <div  className="pull-left">
                                                    <span  className="movie-count-time hover-left">02.50.20</span>
                                                </div>
                                                <div  className="pull-right">
                                                    <div  className="movie-ratting">
                                                        <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="movie-item-content-center">
                                                <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                            </div>
                                            <div  className="movie-item-content-buttom">
                                                <div  className="movie-item-title">
                                                    <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                                    <div  className="movi-item-author">
                                                        <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                                        <div  className="movie-autho-name">
                                                            <a href="">Tony Boraddas</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-beta border-top">
                                                    <div  className="movie-details">
                                                        <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                    </div>
                                                    <div  className="movie-date">
                                                        <span>october.07.2018</span>
                                                    </div>
                                                    <div  className="view-movie hover-right">
                                                        <a  className="black-bg" href="">15k view</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className="item">
                                    <div  className="movie-item-contents gradient3">
                                        <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                        <div  className="movie-item-content">
                                            <div  className="movie-item-content-top">
                                                <div  className="pull-left">
                                                    <span  className="movie-count-time hover-left">02.50.20</span>
                                                </div>
                                                <div  className="pull-right">
                                                    <div  className="movie-ratting">
                                                        <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="movie-item-content-center">
                                                <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                            </div>
                                            <div  className="movie-item-content-buttom">
                                                <div  className="movie-item-title">
                                                    <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                                    <div  className="movi-item-author">
                                                        <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                                        <div  className="movie-autho-name">
                                                            <a href="">Tony Boraddas</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-beta">
                                                    <div  className="movie-details">
                                                        <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                    </div>
                                                    <div  className="movie-date">
                                                        <span>october.07.2018</span>
                                                    </div>
                                                    <div  className="view-movie hover-right">
                                                        <a  className="black-bg" href="">15k view</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div  className="movie-item-playlist">
                                <div  className="movi-plylist-top">
                                    <div  className="pull-left">
                                        <h2>new movie</h2>
                                        <p>plying 2/24</p>
                                    </div>
                                    <div  className="pull-right">
                                        <div  className="plylist-wich">
                                            <span  className="icofont icofont-toggle-on"></span>
                                        </div>
                                    </div>
                                </div>
                                <div  className="movie-item-playlist-items scroll-up ">
                                    <div  className="item">
                                        <div  className="plylist-single">
                                            <div  className="plylist-img">
                                                <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            </div>
                                            <div  className="plylist-single-content">
                                                <a href="">Horror Movie perfming Main Payal Hai Chhankai</a>
                                                <div  className="view-movi">
                                                    <a href="">15k view</a>
                                                </div>
                                                <ul>
                                                    <li  className="novie-upload-time"><a href="">1 Month Ago</a></li>
                                                    <li  className="movie-time"><a href="">1:20:30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div  className="plylist-single">
                                            <div  className="plylist-img">
                                                <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            </div>
                                            <div  className="plylist-single-content">
                                                <a href="">Horror Movie perfming Main Payal Hai Chhankai</a>
                                                <div  className="view-movi">
                                                    <a href="">15k view</a>
                                                </div>
                                                <ul>
                                                    <li  className="novie-upload-time"><a href="">1 Month Ago</a></li>
                                                    <li  className="movie-time"><a href="">1:20:30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div  className="plylist-single">
                                            <div  className="plylist-img">
                                                <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            </div>
                                            <div  className="plylist-single-content">
                                                <a href="">Horror Movie perfming Main Payal Hai Chhankai</a>
                                                <div  className="view-movi">
                                                    <a href="">15k view</a>
                                                </div>
                                                <ul>
                                                    <li  className="novie-upload-time"><a href="">1 Month Ago</a></li>
                                                    <li  className="movie-time"><a href="">1:20:30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div  className="plylist-single">
                                            <div  className="plylist-img">
                                                <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            </div>
                                            <div  className="plylist-single-content">
                                                <a href="">Horror Movie perfming Main Payal Hai Chhankai</a>
                                                <div  className="view-movi">
                                                    <a href="">15k view</a>
                                                </div>
                                                <ul>
                                                    <li  className="novie-upload-time"><a href="">1 Month Ago</a></li>
                                                    <li  className="movie-time"><a href="">1:20:30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div  className="plylist-single">
                                            <div  className="plylist-img">
                                                <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            </div>
                                            <div  className="plylist-single-content">
                                                <a href="">Horror Movie perfming Main Payal Hai Chhankai</a>
                                                <div  className="view-movi">
                                                    <a href="">15k view</a>
                                                </div>
                                                <ul>
                                                    <li  className="novie-upload-time"><a href="">1 Month Ago</a></li>
                                                    <li  className="movie-time"><a href="">1:20:30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div  className="plylist-single">
                                            <div  className="plylist-img">
                                                <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            </div>
                                            <div  className="plylist-single-content">
                                                <a href="">Horror Movie perfming Main Payal Hai Chhankai</a>
                                                <div  className="view-movi">
                                                    <a href="">15k view</a>
                                                </div>
                                                <ul>
                                                    <li  className="novie-upload-time"><a href="">1 Month Ago</a></li>
                                                    <li  className="movie-time"><a href="">1:20:30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        <div  className="category-movie pt-75">
            <div  className="haddings">
                <div  className="container">
                    <div  className="hadding-area">
                        <h2>This Month Movies</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </div>
                </div>
            </div>
            <div  className="category-movie-items">
                <div  className="container">
                    <div  className="cat-menu">
                        <ul  className="nav nav-tabs tab-menu">
                            <li  className="active"><a data-toggle="tab" href="latestmovie"><span>Letest Movies</span></a></li>
                            <li><a data-toggle="tab" href="top-ratings"><span>Top Ratting</span></a></li>
                            <li><a data-toggle="tab" href="commingsoon"><span>Comming Soon</span></a></li>
                            <li><a data-toggle="tab" href="tvseries"><span>TV Series</span></a></li>
                        </ul>
                    </div>
                    <div  className="category-items">
                        <div  className="tab-contents">
                            <div id="latestmovie"  className="tab-pane fade active in" role="tabpanel">
                                <div  className="category-slide2">
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="top-ratings"  className="tab-pane fade" role="tabpanel">
                                <div  className="category-slide2">
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="commingsoon"  className="tab-pane fade" role="tabpanel">
                                <div  className="category-slide2">
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tvseries"  className="tab-pane fade" role="tabpanel">
                                <div  className="category-slide2">
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="item">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-left">
                                                        <span  className="movie-count-time hover-left">02.50.20</span>
                                                    </div>
                                                    <div  className="pull-right">
                                                        <div  className="movie-ratting">
                                                            <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-center">
                                                    <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                                    </div>
                                                    <div  className="item-cat">
                                                        <ul>
                                                            <li><span>Category :</span><a href="">English Movies</a></li>
                                                        </ul>
                                                        <div  className="item-cat-hover">
                                                            <ul>
                                                                <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                                <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="view-movie hover-right">
                                                            <a  className="black-bg" href="">15k view</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="timer-section pt-75">
            <div  className="timer-inner time-bg">
                <div  className="timer-contents">
                    <div  className="container">
                        <div  className="row">
                            <div  className="col-lg-offset-6 col-md-offset-6 col-lg-5 col-md-5 col-sm-offset-6 col-sm-6 col-xs-12">
                                <div  className="timer-content">
                                    <h5  className="pink">Coming soon Movie</h5>
                                    <h2>Max Still</h2>
                                    <p>Jon Player <span  className="pink">&</span> Emily Rose</p>
                                    <div id="simple-timer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="top-rating pt-75">
            <div  className="haddings">
                <div  className="container">
                    <div  className="hadding-area">
                        <h2>Top Rating</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </div>
                </div>
            </div>
            <div  className="Top-rating-items pt-50">
                <div  className="container">
                    <div  className="row">
                        <div id="toprating">
                            <div  className="item">
                                <div  className="movie-item-contents gradient3">
                                    <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                    <div  className="movie-item-content">
                                        <div  className="movie-item-content-top">
                                            <div  className="pull-left">
                                                <span  className="movie-count-time hover-left">02.50.20</span>
                                            </div>
                                            <div  className="pull-right">
                                                <div  className="movie-ratting">
                                                    <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="movie-item-content-center">
                                            <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                        </div>
                                        <div  className="movie-item-content-buttom">
                                            <div  className="movie-item-title">
                                                <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                            </div>
                                            <div  className="item-cat">
                                                <ul>
                                                    <li><span>Category :</span><a href="">English Movies</a></li>
                                                </ul>
                                                <div  className="item-cat-hover">
                                                    <ul>
                                                        <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                        <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="movie-item-beta">
                                                <div  className="movie-details">
                                                    <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                </div>
                                                <div  className="view-movie hover-right">
                                                    <a  className="black-bg" href="">15k view</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="item">
                                <div  className="movie-item-contents gradient3">
                                    <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                    <div  className="movie-item-content">
                                        <div  className="movie-item-content-top">
                                            <div  className="pull-left">
                                                <span  className="movie-count-time hover-left">02.50.20</span>
                                            </div>
                                            <div  className="pull-right">
                                                <div  className="movie-ratting">
                                                    <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="movie-item-content-center">
                                            <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                        </div>
                                        <div  className="movie-item-content-buttom">
                                            <div  className="movie-item-title">
                                                <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                            </div>
                                            <div  className="item-cat">
                                                <ul>
                                                    <li><span>Category :</span><a href="">English Movies</a></li>
                                                </ul>
                                                <div  className="item-cat-hover">
                                                    <ul>
                                                        <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                        <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="movie-item-beta">
                                                <div  className="movie-details">
                                                    <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                </div>
                                                <div  className="view-movie hover-right">
                                                    <a  className="black-bg" href="">15k view</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="item">
                                <div  className="movie-item-contents gradient3">
                                    <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                    <div  className="movie-item-content">
                                        <div  className="movie-item-content-top">
                                            <div  className="pull-left">
                                                <span  className="movie-count-time hover-left">02.50.20</span>
                                            </div>
                                            <div  className="pull-right">
                                                <div  className="movie-ratting">
                                                    <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="movie-item-content-center">
                                            <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                        </div>
                                        <div  className="movie-item-content-buttom">
                                            <div  className="movie-item-title">
                                                <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                            </div>
                                            <div  className="item-cat">
                                                <ul>
                                                    <li><span>Category :</span><a href="">English Movies</a></li>
                                                </ul>
                                                <div  className="item-cat-hover">
                                                    <ul>
                                                        <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                        <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="movie-item-beta">
                                                <div  className="movie-details">
                                                    <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                </div>
                                                <div  className="view-movie hover-right">
                                                    <a  className="black-bg" href="">15k view</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="item">
                                <div  className="movie-item-contents gradient3">
                                    <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                    <div  className="movie-item-content">
                                        <div  className="movie-item-content-top">
                                            <div  className="pull-left">
                                                <span  className="movie-count-time hover-left">02.50.20</span>
                                            </div>
                                            <div  className="pull-right">
                                                <div  className="movie-ratting">
                                                    <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="movie-item-content-center">
                                            <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                        </div>
                                        <div  className="movie-item-content-buttom">
                                            <div  className="movie-item-title">
                                                <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                            </div>
                                            <div  className="item-cat">
                                                <ul>
                                                    <li><span>Category :</span><a href="">English Movies</a></li>
                                                </ul>
                                                <div  className="item-cat-hover">
                                                    <ul>
                                                        <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                        <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="movie-item-beta">
                                                <div  className="movie-details">
                                                    <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                </div>
                                                <div  className="view-movie hover-right">
                                                    <a  className="black-bg" href="">15k view</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="item">
                                <div  className="movie-item-contents gradient3">
                                    <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                    <div  className="movie-item-content">
                                        <div  className="movie-item-content-top">
                                            <div  className="pull-left">
                                                <span  className="movie-count-time hover-left">02.50.20</span>
                                            </div>
                                            <div  className="pull-right">
                                                <div  className="movie-ratting">
                                                    <a href=""><span  className="fa fa-star"></span>2/20</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="movie-item-content-center">
                                            <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                        </div>
                                        <div  className="movie-item-content-buttom">
                                            <div  className="movie-item-title">
                                                <a href="">Hurry Animate Blue Strack New Movie (2018)</a>
                                            </div>
                                            <div  className="item-cat">
                                                <ul>
                                                    <li><span>Category :</span><a href="">English Movies</a></li>
                                                </ul>
                                                <div  className="item-cat-hover">
                                                    <ul>
                                                        <li><span>Release :</span><a href="">October 26, 2017</a></li>
                                                        <li><span>Genre :</span><a href="">Action, Drama</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  className="movie-item-beta">
                                                <div  className="movie-details">
                                                    <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                </div>
                                                <div  className="view-movie hover-right">
                                                    <a  className="black-bg" href="">15k view</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="latest-news-section pt-75">
            <div  className="haddings">
                <div  className="container">
                    <div  className="hadding-area">
                        <h2>Latest News</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </div>
                </div>
            </div>
            <div  className="latest-news pt-50">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div  className="movie-item-contents gradient3">
                                <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                <div  className="movie-item-content">
                                    <div  className="movie-item-content-top">
                                        <div  className="pull-right hover-right">
                                            <span  className="movie-count-time">02.50.20</span>
                                        </div>
                                    </div>
                                    <div  className="movie-item-content-center">
                                        <a href=""  className="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"><span  className="flaticon-play-button"></span></a>
                                    </div>
                                    <div  className="movie-item-content-buttom">
                                        <div  className="movie-item-title">
                                            <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                        </div>
                                        <div  className="movie-item-beta border-top">
                                            <div  className="movie-details">
                                                <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                            </div>
                                            <div  className="blog-meta">
                                                <ul>
                                                    <li><a href="">by admin</a></li>
                                                    <li><a href="">coments</a></li>
                                                </ul>
                                                <div  className="share-link">
                                                    <div  className="share-text">
                                                        <span>Share</span>
                                                        <div  className="share-hover">
                                                            <ul>
                                                                <li><a href=""><span  className="fa fa-facebook"></span></a></li>
                                                                <li><a href=""><span  className="fa fa-twitter"></span></a></li>
                                                                <li><a href=""><span  className="fa fa-linkedin"></span></a></li>
                                                                <li><a href=""><span  className="fa fa-youtube"></span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div  className="latest-news-small">
                                <div  className="row">
                                    <div  className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-right hover-right">
                                                        <span  className="movie-count-time">02.50.20</span>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Nam lectus nibh consequat aucibus turpis.</a>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="blog-meta">
                                                            <div  className="share-link">
                                                                <div  className="share-text">
                                                                    <span>Share</span>
                                                                    <div  className="share-hover">
                                                                        <ul>
                                                                            <li><a href=""><span  className="fa fa-facebook"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-twitter"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-linkedin"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-youtube"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                                        <div  className="movie-item-contents gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-right hover-right">
                                                        <span  className="movie-count-time">02.50.20</span>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Nam lectus nibh consequat aucibus turpis.</a>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="blog-meta">
                                                            <div  className="share-link">
                                                                <div  className="share-text">
                                                                    <span>Share</span>
                                                                    <div  className="share-hover">
                                                                        <ul>
                                                                            <li><a href=""><span  className="fa fa-facebook"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-twitter"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-linkedin"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-youtube"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                                        <div  className="movie-item-contents pt-30 gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-right">
                                                        <span  className="movie-count-time hover-right">02.50.20</span>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Nam lectus nibh consequat aucibus turpis.</a>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="blog-meta">
                                                            <div  className="share-link">
                                                                <div  className="share-text">
                                                                    <span>Share</span>
                                                                    <div  className="share-hover">
                                                                        <ul>
                                                                            <li><a href=""><span  className="fa fa-facebook"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-twitter"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-linkedin"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-youtube"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                                        <div  className="movie-item-contents pt-30 gradient3">
                                            <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                            <div  className="movie-item-content">
                                                <div  className="movie-item-content-top">
                                                    <div  className="pull-right hover-right">
                                                        <span  className="movie-count-time">02.50.20</span>
                                                    </div>
                                                </div>
                                                <div  className="movie-item-content-buttom">
                                                    <div  className="movie-item-title">
                                                        <a href="">Nam lectus nibh consequat aucibus turpis.</a>
                                                    </div>
                                                    <div  className="movie-item-beta">
                                                        <div  className="movie-details">
                                                            <a href=""  className="btn btn-button button-detals black-bg">details</a>
                                                        </div>
                                                        <div  className="blog-meta">
                                                            <div  className="share-link">
                                                                <div  className="share-text">
                                                                    <span>Share</span>
                                                                    <div  className="share-hover">
                                                                        <ul>
                                                                            <li><a href=""><span  className="fa fa-facebook"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-twitter"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-linkedin"></span></a></li>
                                                                            <li><a href=""><span  className="fa fa-youtube"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="footer-section">
            <div  className="footer-bg">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div  className="ft-widget">
                                <div  className="ft-content">
                                    <img src={'http://lemondezip.fr/wp-content/uploads/2017/09/3-jours-a-singapour-garden-by-the-bay.jpg'} alt='' width='300' height='200'/>
                                    <p>Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus sed.</p>
                                    <div  className="social-link">
                                        <ul>
                                            <li><a href=""  className="ft-fb"><span  className="fa fa-facebook"></span></a></li>
                                            <li><a href=""  className="ft-twitter"><span  className="fa fa-twitter"></span></a></li>
                                            <li><a href=""  className="ft-pintarest"><span  className="fa fa-pinterest"></span></a></li>
                                            <li><a href=""  className="ft-youtube"><span  className="fa fa-youtube"></span></a></li>
                                            <li><a href=""  className="ft-linkedin"><span  className="fa fa-linkedin"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div  className="ft-widget">
                                <h2><span>Movie Category</span></h2>
                                <div  className="ft-content">
                                    <ul>
                                        <li><a href="">Movies</a> </li>
                                        <li><a href="">Videos</a></li>
                                        <li><a href="">English</a></li>
                                        <li><a href="">China</a></li>
                                        <li><a href="">Tailor Upcoming Movies</a></li>
                                        <li><a href="">Upcoming Movies</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div  className="ft-widget">
                                <h2><span>Information</span></h2>
                                <div  className="ft-content">
                                    <ul>
                                        <li><a href="">About Us</a> </li>
                                        <li><a href="">Song</a></li>
                                        <li><a href="">Forums</a></li>
                                        <li><a href="">Hot Collection</a></li>
                                        <li><a href="">Upcoming Movies</a></li>
                                        <li><a href="">Upcoming Events</a></li>
                                        <li><a href="">All Movies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                        <div  className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div  className="ft-widget">
                                <div  className="ft-content twitter-contnt">
                                    <h2><span>Twitter</span></h2>
                                    <div  className="ft-twitter-feed">
                                        <div  className="ft-twitter-icon">
                                            <span  className="fa fa-twitter"></span>
                                        </div>
                                        <div  className="twitter-dec">
                                            <a href="">black-one <span  className="pink">@24Webpro</span></a>
                                            <p>Lorem Ipsum is simply dumy text of the printing.</p>
                                            <div  className="twitter-meta">
                                                <ul>
                                                    <li><a href=""><span  className="fa fa-mail-reply"></span></a></li>
                                                    <li><a href=""><span  className="fa fa-retweet"></span>12</a></li>
                                                    <li><a href=""><span  className="fa fa-heart"></span>21</a></li>
                                                    <li><a href=""><span  className="fa fa-ellipsis-h"></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className="newsletter">
                                    <h2><span>newsletter</span></h2>
                                    <div  className="newsletter-input">
                                        <input type="text"  className="form-control" placeholder="Email Address"/>
                                        <button  className="newsletter-btn"><span  className="fa fa-paper-plane"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="copyright">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                            <div  className="footer-menu">
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Celebrities</a></li>
                                    <li><a href="">News</a></li>
                                    <li><a href="">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div  className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                            <div  className="copyright-text">
                                <p>CopyRight© 2018 <a href="">Themepul</a> . All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="to-top" id="back-top">
            <i  className="fa fa-angle-up"></i>
        </div>
    </div>
      </div>
    );
  }
}

export default App;
