import React from 'react';

function RenderParallax({caption, className}) {
    return (
        <div className={`parallax ${className}`}>
            <div className="caption">
                <span className="border">{caption}</span>
            </div>
        </div>
    );
}

function Home(props) {
    return (
        <React.Fragment>
            <RenderParallax caption="Ремеслянная Выпечка Хлеба" className="bgimg-1"/>

{/*             <div id="carouselContainer" className="container-fluid">
                <div id="carouselExample" className="carousel slide" data-ride="carousel" data-interval="9000">
                    <div className="carousel-inner row w-10 mxauto" role="listbox">
                        <div className="carousel-item col-md-4 active align-self-center">
                            <img className="img-fluid mx-auto d-bloc" src="/assets/images/baguettes-1.jpg" alt="slide 1" />
                        </div>
                        <div className="carousel-item col-md-4 align-self-center">
                            <img className="img-fluid mx-auto d-block" src="/assets/images/wheat-coldrise-coldproofing-1.jpg" alt="slide 2" />
                        </div>
                        <div className="carousel-item col-md-4 align-self-center">
                            <img className="img-fluid mx-auto d-block" src="/assets/images/goldenstandard.jpg" alt="slide 3" />
                        </div>
                        <div className="carousel-item col-md-4 align-self-center">
                            <img className="img-fluid mx-auto d-block" src="/assets/images/pizza-1.jpg" alt="slide 4" />
                        </div>
                        <div className="carousel-item col-md-4 align-self-center">
                            <img className="img-fluid mx-auto d-block" src="/assets/images/goldenstandard-sliced-1.jpg" alt="slide 5" />
                        </div>
                        <div className="carousel-item col-md-4 align-self-center">
                            <img className="img-fluid mx-auto d-block" src="/assets/images/pizza-4.jpg" alt="slide 6" />
                        </div>
                        <div className="carousel-item col-md-4 align-self-center">
                            <img className="img-fluid mx-auto d-block" src="/assets/images/rye-1.jpg" alt="slide 7" />
                        </div>
                        <div className="carousel-item col-md-4 align-self-center">
                            <img className="img-fluid mx-auto d-block" src="/assets/images/wheat-coldrise-coldproofing-2.jpg" alt="slide 8" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                        <i className="fa fa-chevron-left fa-lg text-muted"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                        <i className="fa fa-chevron-right fa-lg text-muted"></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div> */}

            <RenderParallax caption="Закваски" className="bgimg-2"/>
            <RenderParallax caption="Галерея" className="bgimg-3"/>
        </React.Fragment>
    );
}

export default Home; 
