import React from 'react';

class Slider1 extends React.Component {

    constructor(props) {
        // debugger;
        super();

        this.state = {
            images: props.images,
            currentImageIndex: props.index,
            isCycleMode: false
        }

        this.nextSlideHandler = this.nextSlideHandler.bind(this);
    }

    nextSlideHandler(e) {
        let newIndex = this.state.currentImageIndex;

        if (e.target.dataset.diraction === 'next') {
            if (newIndex < this.state.images.length - 1) {
                newIndex = newIndex + 1;
            }

        } else {
            if (newIndex > 0) {
                newIndex = newIndex - 1;
            }
        }
        this.setState({ currentImageIndex: newIndex });
    }

    render() {
        return (
            <>
                {/*{this.props.images}*/}
                <div className="slider">
                    <button
                        disabled={this.state.currentImageIndex === 0}
                        onClick={this.nextSlideHandler}
                        data-diraction="prev"
                        className="prev">Назад
                    </button>
                    <img
                        src={this.state.images[this.state.currentImageIndex]}
                        alt=""
                    />
                    <button
                        disabled={this.state.currentImageIndex === (this.state.images.length - 1)}
                        onClick={this.nextSlideHandler}
                        data-diraction="next"
                        className="next">Вперед
                    </button>
                </div>
            </>
        );
    }
}

export default Slider1;
