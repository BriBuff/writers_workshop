import React from "react";
;

function Middle (){
    return(
        <section className="main">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                        
                       <div>image or middle sec</div>
                      
                </div>


                
                <div className="col-md-9">
                       
                              <div className="panel panel-default">
                                    <div className="panel-heading">
                                      <h3 className="panel-title">Latest Work</h3>
                                    </div>
                                    <div className="panel-body">
                                      <table className="table table-striped table-hover">
                                      <tbody>
                                      <tr>
                                              <th>Project Name</th>
                                              <th>Chapters</th>
                                              <th>Last Updated</th>
                                              <th>Plans</th>
                                          </tr>
                                          <tr>
                                              <td>Jill Smith</td>
                                              <td>js@yahoo.com</td>
                                              <td>Dec 30, 2018</td>
                                              <td>5</td>
                                          </tr>
                                          <tr>
                                                <td>Justin Harring</td>
                                                <td>jharring@gmail.com</td>
                                                <td>March 14, 2019</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                    <td>Stanley Lakes</td>
                                                    <td>lakes@google.com</td>
                                                    <td>Nov 2, 2017</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>Stanley Lakes</td>
                                                    <td>lakes@google.com</td>
                                                    <td>Nov 2, 2017</td>
                                                    <td>7</td>
                                                </tr>
                                                
                                      </tbody>
                                         
                                      </table>
                                    </div>
                                  </div>
                </div>
            </div>
        </div>
    </section>
    );
}


export default Middle;