// slider logics stolen from
// https://www.w3schools.com/howto/howto_js_slideshow.asp

window.addEventListener ( 'load', load );

function load () {

  let slide_index = 1;
  show_slide ( slide_index );



  document.getElementsByClassName( 'slider__images__button--left' )[ 0 ]
    .addEventListener ( 'click', () => iter_slide ( -1 ) );

  document.getElementsByClassName( 'slider__images__button--right' )[ 0 ]
    .addEventListener ( 'click', () => iter_slide ( +1 ) );

  [ ...document.getElementsByClassName( 'slider__images__circles__circle' ) ]
    .forEach ( (e,i) => e.addEventListener ( 'click', () => set_curr_slide ( i + 1 ) ) );




  // Next/previous controls
  function iter_slide ( n ) {

    show_slide (slide_index += n);

  }



  // Thumbnail image controls
  function set_curr_slide ( n ) {

    show_slide ( slide_index = n );

  }


  function show_slide ( n ) {

    const slides = document.getElementsByClassName ( 'slider__images__img' );

    const dots = document.getElementsByClassName ( 'slider__images__circles__circle' );

    if ( n > slides.length ) slide_index = 1;

    if ( n < 1 ) slide_index = slides.length;

    for (let i = 0; i < slides.length; ++i ) {

      slides[ i ].style.display = 'none';

    }

    for ( let i = 0; i < dots.length; ++i ) {

      dots[ i ].classList.remove ( 'slider__images__circles__circle--active' );

    }

    slides[ slide_index - 1 ].style.display = 'block';
    dots[ slide_index - 1 ].classList.add ( 'slider__images__circles__circle--active' );

  }


}
