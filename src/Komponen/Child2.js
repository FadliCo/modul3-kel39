import React, {Component} from "react";
class Child2 extends Component {
    state = {
        gambarTampil: false
    }
       
    render() {
        return (
            <div>
                {this.state.gambarTampil ? 
                <img src="https://i.ibb.co/KxrSKv7/1606043456405.jpg" width="400px"></img> : ''}
                <p>Nurhadiyatussholihah</p>
                <p>21120117120018</p>
                <button onClick={this.tampilkanGambar}>{this.state.gambarTampil ? 
                'Hilangkan Gambar' : 'Tampilkan Gambar'}</button>
                <br/>
            </div>
            );
        }
    tampilkanGambar = () => {
        this.setState((state) => {return {gambarTampil : !this.state.gambarTampil}})
        }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Apakah anda yakin?');
        }
    componentWillUnmount() {
        alert('Menampilkan Praktikan 1')
        }                 
}
export default Child2;