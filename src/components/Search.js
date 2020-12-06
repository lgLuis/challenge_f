import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            serie: '',
            image: '#'
        }
    }






        myAppi = async ()=>{
        let res = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.serie}/`)
//        let res = await fetch("http://api.tvmaze.com/search/shows?q=alf")
        let data = await res.json()
        console.log(data[0].show.name)
        this.setState({
            image: data[0].show.image.medium
        })
    }

    handleName = event =>{
        this.setState({
            serie: event.target.value
        })
    }

    handleSubmit = event =>{
        var nose = this.nose.serie
        console.log(nose)
        this.myAppi()
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        BUSCADOR DE SERIES
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <label>INGRESE EL NOMBRE DE LA SERIE: </label>
                            <br />
                            <input
                                type="text"
                                placeholder="por ejemplo ALF"
                                value={this.state.serie}
                                onChange ={this.handleName}
                            />
                            <br/> <br/>
                            <button type="submit" className="btn btn-primary">BUSCAR</button>
                            <br />
                            <img src={this.state.image}/>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        luis 2020
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Search;