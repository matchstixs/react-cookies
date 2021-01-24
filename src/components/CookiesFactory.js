import React, {Component} from 'react';
import Cookies from 'cookies-js';
import { Container, Col, Row } from 'reactstrap'

class CookiesFactory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itmOne: null,
            itmTwo: null,
            itmThree: null,
            itmFour: null,
            itmFive: null,
            itmSix: null,
            itmSeven: null,
            itmEight: null
        };
    };

    // 1. get cookie
    // 2. render cookie
    // 3. click button

// get cookie 
    getCookie(trendingItems) {
        return Cookies.get(trendingItems) || 0;
    };

    // Trending #1 cookie
    itmOneCookie() {
        const itmOneCookie = this.getCookie('jacket');
        const newCount = parseInt(itmOneCookie, 10) + 1;
        Cookies.set('jacket', newCount);
        this.setState({jacket: newCount});
    }

    // Trending 2 cookie
    itmTwoCookie() {
        const itmTwoCookie = this.getCookie('shirt');
        const newCount = parseInt(itmTwoCookie, 10) + 1;
        Cookies.set('shirt', newCount);
        this.setState({shirt: newCount});
    }

    // Trending 3 cookie
    itmThreeCookie() {
        const itmThreeCookie = this.getCookie('pants');
        const newCount = parseInt(itmThreeCookie, 10) + 1;
        Cookies.set('pants', newCount);
        this.setState({pants: newCount});
    };

    // Trending 4 cookie
    itmFourCookie() {
        const itmFourCookie = this.getCookie('shoes');
        const newCount = parseInt(itmFourCookie, 10) + 1;
        Cookies.set('shoes', newCount);
        this.setState({shoes: newCount});
    };




    // render
        render() {
            return(
                <Container class='products'>
<Row>

<Col id='col1'>
                    <button id="jacket" onClick={ (trendingItems) => this.itmOneCookie()}>
                    <img src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Jacket"></img>
                    </button>
</Col>

<Col id='col2'>
                    <button id="shirt" onClick={ (trendingItems) => this.itmTwoCookie()}>
                    <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Shirt"></img>
                    </button>
</Col>

<Col id='col3'>                  
                    <button id="pants" onClick={ (trendingItems) => this.itmThreeCookie()}>
                    <img src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Pants"></img>
                    </button>
</Col>                   

<Col id='col4'>
                    <button id="shoes" onClick={ (trendingItems) => this.itmFourCookie()}>
                    <img src="https://images.unsplash.com/photo-1578116922645-3976907a7671?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Shoes"></img>
                    </button>
</Col>

</Row>

{/* PRINT COOKIES */}
{this.state.jacket}
{this.state.shirt}
{this.state.pants}
{this.state.shoes}
</Container>
);
    };


};

export default CookiesFactory;