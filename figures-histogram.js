function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
    return num
  }

var x1 = [];
var y1 = [];
for (var i = 1; i < 500; i++) 
{
  k = 2*(randn_bm()-0.5);
  x1.push(k);
  y1.push(1);
}
var trace1 = {
  x: x1,
  y: y1,
  autobinx: false, 
  histnorm: "count", 
  marker: {
    color: "rgba(136,192,208, 0.7)", 
     line: {
      color:  "rgba(136,192,208, 1)", 
      width: 1
    }
  },  
  opacity: 0.95, 
  type: "histogram", 
  xbins: {
    end: 1.0, 
    size: 0.1, 
    start: -1.0
  }
};
var data = [trace1];
var layout = {
  bargap: 0.1, 
  bargroupgap: 0.1, 
  barmode: "overlay", 
  title: "Sentiment Distribution", 
  xaxis: {title: "Sentiment"}, 
  yaxis: {title: "Count"},
  width: 1920*0.5, 
  height: 1200*0.5,
  margin: {
    r: 30,
    t: 70,
    b: 40,
    l: 80
  },
  font : {
    size: 15,
    color: "black"
  }
};


Plotly.newPlot('myDiv', data, layout);