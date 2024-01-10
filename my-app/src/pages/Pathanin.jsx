import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";

//import { compile } from "mathjs";

//const Parser = require('expr-eval').Parser;

function Pathanin() {
  const print = () => {
    console.log(data)
    
    setValueX(data.map((x) => x.x));
    setValueResult(data.map((x) => x.result));
    // setValueResult2(data.map((x) => x.result2));
   
    return (
      <>
        <Table className="setj" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th width="30%">X</th>
              <th width="30%">F(X)</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.x}</td>
                  <td>{element.result}</td>
                  
                            
                </tr>)
            })}
            
          </tbody>
        </Table>
        <Line
          className="setop"
          data={state}
          options={{
            title: {
              display: true,
              text: 'Bisection Method',
              fontSize: 20
            },
            legend: {
              display: true,
              // position: 'right'
            }
          }}
        />
      </>

    );
  }

  const data = [];
  
  const [valueX, setValueX] = useState([]);
  const [valueResult, setValueResult] = useState([]);
  // const [valueResult2, setValueResult2] = useState([]);
  const state = {
    labels: valueX,valueResult,
    datasets: [
      
      {
        label: 'Result',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 2,
        data: valueResult
      }
    ]
  }

  const [X, setX] = useState();// 1.5 | object
  const [EQ, setEQ] = useState();
  
  //const [fx, seteq] = useState("");

  const [One_result, setXResult] = useState();
  const [Two_result, setEqResult] = useState();
  const [Three_result, setResult] = useState();
  
  //const [result, setResult] = useState();//usestate
  const [html, setHtml] = useState();



  const onNumberChange = (e) => {
    setX(e.target.value);
  };
  const onNumberChange2 = (e) => { // e=0xadfasd=2
    setEQ(e.target.value);
  };
  

  // const Cal = () => {

  //   do{

  //   }while()

  // }




  const onCalculate = () => {
    var x = Number(X);
    var eq = String(EQ);
    

    var result = 0, scope,i;
    var result2=0;
    var cal = 0
    


    // scope = {
    //   x: x,
    // }
    //result = evaluate(EQ, scope)


    for(i=0;i<x;i++){
      scope = {
        x: i,
      }
      cal = evaluate(EQ, scope)
      // cal2 = evaluate(EQ2, scope)
      data[i]=({x:i , result:cal}) 

    }

    // for(i=0;i<x;i++){
    //   scope = {
    //     x: i,
    //   }
    //   cal = evaluate(EQ2, scope)
    //   data[i]=({x:i , result2:cal}) 

    // }



    data.push(x)
    data.push(result)
    data.push(result2)

    // first = x
    // two = eq
    setXResult(x);
    setEqResult(eq);
    // setEq2Result(eq2)
    //setEqResult(eq2);
    setResult(cal);



    setHtml(print());

    //console.log(data)
    // console.log("eq = " + eq)
  }

  return (
    <div>
      <h1><center>Pathanin</center></h1>
      <hr></hr>
      <br></br>
      <center>
        <input
          type="number"
          placeholder="X"
          name="x"
          value={X}
          onChange={onNumberChange}
        />
      </center>
      <br></br>
      <center>
        <input
          type="string"
          placeholder="X2"
          name="x2"
          value={EQ}
          onChange={onNumberChange2}
        />
      </center>
      <br></br>

      {/* <input
        type="text"
        placeholder="Input Cal"
        name="fx"
        value={fx}
        onChange={oneq} /> */}

      <center>
        <Button variant="outline-primary" onClick={onCalculate}>
          Calculate
        </Button>
      </center>
      <br></br>
      <center>
        Result 1 is {One_result}
      </center>
      <p></p>
      <center>
        Result 2 is {Two_result}
      </center>
      <p></p>
      <center>
        Result 3 is {Three_result}
      </center>
      <p></p>

      <Container>
        {html}
      </Container>

    </div>

  )
}


export default Pathanin