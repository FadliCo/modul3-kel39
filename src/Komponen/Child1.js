import React, {Component} from "react";
class Child1 extends Component {
    state = {
        gambarTampil: false
    }
       
    render() {
        return (
            <div>
                {this.state.gambarTampil ? 
                <img src="https://i.ibb.co/VMVC1XZ/IMG-20201110-062147.jpg" width="400px"></img> : ''}
                <p>Muhammad Ulul Fadli</p>
                <p>21120117130074</p>
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
        alert('Menampilkan Praktikan 2')
        }                 
}
export default Child1;