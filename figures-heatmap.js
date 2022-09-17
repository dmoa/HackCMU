var trace1 = {
    x: [1, 2, 3, 4],
    y: [1, 2, 3, 4],
    mode: 'markers',
    marker: {
    color: [0.0, 0.2, 0.3, 1.0],
      opacity: [1, 0.8, 0.6, 0.4],
      size: [40, 60, 80, 100],
    colorscale: "Bluered"
    }
  };

  var trace2 = {
    x: [0,1, 2, 3, 4,8,10],
    y: [0,2, 4, 1, 3,8,10],
    mode: 'markers',
    marker: {
      color: [0.0,0.2,0.3,0.6,0.3,0.2,1.0],
      opacity: [1, 0.8, 0.6, 0.4, 1,1, 1],
      size: [40, 60, 80, 100, 20, 40,20],
      colorscale: "Bluered"
    }
  };

var data = [trace1, trace2];
  
var layout = {
    xaxis: {range: [0, 10], showticklabels: false, autorange: false},
    yaxis: {range: [0, 10], showticklabels: false, autorange: false},
    title: "Campus Sentiment Heatmap",
    margin: {
      r: 30,
      t: 70,
      b: 30,
      l: 30
    },
    font : {
      size: 15,
      color: "black"
    },
    showlegend: false,
    images: [
        {
          "source": "https://i.ibb.co/j51rYrF/campus-map-october-2021-3.png",
          "xref": "x",
          "yref": "y",
          "x": 0,
          "y": 0,
          "sizex": 12,
          "sizey": 12,
          "xanchor": "left",
          "yanchor": "bottom",
          "layer" : "below"
        }
      ]
  };



Plotly.newPlot('myDiv2', data, layout)
