import img1 from './assets/sliding/GettyImages-543214275.jpg'
import img2 from './assets/sliding/b10698b8ede993b17ed43c0f3f37af61.jpg'
import img3 from './assets/sliding/IMG_6326.JPG'
import img4 from './assets/sliding/vsco5d613a46dc83b.jpg'

function Images() {
    return (
        <div className="slideshow">
            <div className="container">
                <section><img src={img1}></img></section>
                <section><img src={img2}></img></section>
                <section><img src={img3}></img></section>
                <section><img src={img4}></img></section>


            </div>
        </div>

    )
}

export default Images