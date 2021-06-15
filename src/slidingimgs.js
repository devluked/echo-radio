import img1 from './assets/sliding/0fca95a6d49f471fcb07e5eb9a98d04a.jpg'
import img2 from './assets/sliding/b10698b8ede993b17ed43c0f3f37af61.jpg'
import img3 from './assets/sliding/GettyImages-543214275.jpg'
import img4 from './assets/sliding/IMG_5441.JPG'
import img5 from './assets/sliding/IMG_6326.JPG'
import img6 from './assets/sliding/IMG_6348.JPG'
import img7 from './assets/sliding/vsco5d613a46dc83b.jpg'

function Images() {
    return (
        <div className="slideshow">
            <div className="container">
                <section><img src={img1}></img></section>
                <section><img src={img2}></img></section>
                <section><img src={img3}></img></section>
                <section><img src={img4}></img></section>
                <section><img src={img5}></img></section>
                <section><img src={img6}></img></section>
                <section><img src={img7}></img></section>
            </div>
        </div>

    )
}

export default Images