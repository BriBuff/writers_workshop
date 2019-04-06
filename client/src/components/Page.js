import React, { Component } from "react";
import Nav from "./Nav";
import Write from "./Write";
import CanvasDraw from "./Plan/src/";
import classNames from "./Plan/src/index.css";



class Page extends Component {

    state = {
      
      color: "#ffc600",
      width: 600,
      height: 700,
      brushRadius: 10,
      lazyRadius: 12,
     
    };

    

    componentDidMount() {
     
      window.setInterval(() => {
        this.setState({
          color: "#000000"
        });
      });
      
      

    };
     

render() {
    return(
        <section className="main">
        <Nav/>
            {/* <Header/> */}
            <div className="row">
            <div className="col-md-2">
            
                </div>
               
            <div className="col-md-5">
                <Write title={this.props.title} body={this.props.body} projectId={this.props.projectId}/>
            
            <div style={{height: "400px"}}></div>
            </div>

            <div className="container">
            <div className="row">
            <div className="col-md-4">
        <h2>Plan</h2>
        <div className={classNames.tools}>
        <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            New
          </button>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
              console.log("info", this.saveableCanvas.getSaveData())
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </button>
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={e =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={e =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
        </div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
       
      </div>
      </div>
      </div>
      </div>




        </section>
    );
}
}

export default Page;