import React, {Component} from "react";

class ListItem extends Component {
    state = {
        lists:this.props.lists,
    };

    handleBoughtClick =(e)=>{
        e.target.className='bought';
        console.log(e.target)
    };


    render() {
        console.log(this.state.lists);
        console.log('id', this.props.id);
        if (this.state.lists.length > 0) {
            const elem = this.state.lists.filter((val => {
                    if (val.date === this.props.id) {
                        return val;
                    }
                })
            );
            return (
                <table>
                    <thead>
                    <tr>
                        <th>Nr</th>
                        <th>Nazwa</th>
                        <th>Cena</th>
                        <th>Kupiony</th>
                    </tr>
                    </thead>
                    <tbody>
                    {elem[0].products.map((e, i) => {
                        return (
                            <tr key={e.id} className={this.state.isBought?'bought':''}>
                                <td>{i + 1}</td>
                                <td>{e.title}</td>
                                <td><input type="text"/></td>
                                <td><button onClick={this.handleBoughtClick}>Kupiony</button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            )
        } else {
            return (
                <h1>Ładuję dane</h1>
            )
        }
    }
}

export {ListItem};