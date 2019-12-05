import React, {Component} from "react";
import {CarouselSlide} from './CarouselSlide'
class Carousel extends Component{

    state = {
        images:['https://cdn.pixabay.com/photo/2017/08/10/05/11/shirts-2618461_960_720.jpg',
                'https://cdn.pixabay.com/photo/2018/10/29/10/31/berry-3780827_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/08/29/02/07/coins-912717_960_720.jpg'],
        texts:['Planuj zakupy', 'Dziel się obowiązkami', 'Oszczędzaj pieniądze'],
        currentIndex:0
    };

    componentDidMount() {
        this.intervalID = setInterval(()=>{
            this.setState((state)=> {
                if (this.state.currentIndex>=this.state.images.length-1) {
                   return  {currentIndex: 0}
                } else {
                    return {currentIndex: this.state.currentIndex+1}
                }
            });
        }, 15000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <section className='carousel'>
            <CarouselSlide image={this.state.images[this.state.currentIndex]} text={this.state.texts[this.state.currentIndex]}/>
            </section>
        )
    }

}

export {Carousel};