// Initializes the page with a default plot
function init() {

    // d3.json("Resources/causes_by_year.json").then(function(data) {
    //     console.log(data);
    //   });
      
      // Promise Pending
      d3.json("Resources/causes_by_year.json", function(error, data) {
        console.log(data); // this is your data
    });
      
    // d3.json("Resources/causes_by_year.json").then(sampleData => {

        //data, names, dropdown menu
    //   var data = sampleData;
    // this mapping could be an issue too
      var type = data.cause_name;
      var year = data.year_id;
      var amount_spent = data.mean_all;
      
    //   var dropdownMenu = d3.select('#selDataset');
    
      // Grab values from the response json object to build the plots
    
      
    //   var startDate = data.map(x => x.year_id[0]);
    //   var endDate = data.map(x=> x.year_id[168]);
      var cardiovascular = data.map(x => x.cause_name=="Cardiovascular");
      var respiratory = data.map(x => x.cause_name=="Chronic respiratory diseases");
      var diabetes = data.map(x => x.cause_name=="Diabetes, urogenital, blood, and endocrine diseases");
      var injuries = data.map(x => x.cause_name=="Injuries");
      var musculoskeletal = data.map(x => x.cause_name=="Musculoskeletal disorders");
      var neoplasms = data.map(x => x.cause_name=="Neoplasms");
      var wellcare = data.map(x => x.cause_name=="Well care");
    //   var public = public_data
    //   var private = private_data

       // Initialize x and y arrays
      var x = [];
      var y = [];

    var cardio_trace = {
        type: "scatter",
        mode: "lines",
        name: type,
        x: cardiovascular.map(x=> x.year_id),
        y: cardiovascular.map(x=> x.amount_spent),
        line: {
        color: "#17BECF"
        }
    };

    var respiratory_trace = {
        type: "scatter",
        mode: "lines",
        name: type,
        x: respiratory.map(x=> x.year_id),
        y: respiratory.map(x=> x.amount_spent),
        line: {
        color: "#137B16"
        }
    };

    var diabetes_trace = {
        type: "scatter",
        mode: "lines",
        name: type,
        x: diabetes.map(x=> x.year_id),
        y: diabetes.map(x=> x.amount_spent),
        line: {
        color: "#FF3358"
        }
    };

    var injuries_trace = {
        type: "scatter",
        mode: "lines",
        name: type,
        x: injuries.map(x=> x.year_id),
        y: injuries.map(x=> x.amount_spent),
        line: {
        color: "#E133FF"
        }
    };
    
    var musculoskeletal_trace = {
        type: "scatter",
        mode: "lines",
        name: type,
        x: musculoskeletal.map(x=> x.year_id),
        y: musculoskeletal.map(x=> x.amount_spent),
        line: {
        color: "#339EFF"
        }
    };

    var neoplasms_trace = {
        type: "scatter",
        mode: "lines",
        name: type,
        x: neoplasms.map(x=> x.year_id),
        y: neoplasms.map(x=> x.amount_spent),
        line: {
        color: "#33FFBD"
        }
    };

    var wellcare_trace = {
        type: "scatter",
        mode: "lines",
        name: type,
        x: wellcare.map(x=> x.year_id),
        y: wellcare.map(x=> x.amount_spent),
        line: {
        color: "#FF5733"
        }
    };


    var data3 = [cardio_trace];

    var layout = {
        title: `Healthcare Costs 1996-2016`,
        xaxis: {
        range: [1996, 2016],
        type: "date"
        },
        yaxis: {
        autorange: true,
        type: "linear"
        }
    };
  
    var CHART = d3.selectAll("#plot").node();
  
    Plotly.newPlot(CHART, data3, layout);

    // })
    // const dataPromise = d3.json("Resources/causes_by_year.json");
    //   console.log("Data Promise: ", dataPromise);
// })
};

  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("body").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.node().value;
  
    var CHART = d3.selectAll("#plot").node();
  
    d3.json("Resources/causes_by_year.json", function(error, data) {
        console.log(data); // this is your data
    });
  
    // d3.json("Resources/causes_by_year.json").then(sampleData => {

        //data, names, dropdown menu
    //   var data = sampleData;
      var type = data.cause_name;
      var year = data.year_id;
      var amount_spent = data.mean_all;
      var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.node().value;

    var CHART = d3.selectAll("#row").node();

      
    //   var dropdownMenu = d3.select('#selDataset');
    
      // Grab values from the response json object to build the plots
    
      
    //   var startDate = data.year_id.map(x => x[0]);
    //   var endDate = data.year_id.map(x=> x[168]);
      var cardiovascular = data.cause_name.map(x => x=="Cardiovascular");
      var respiratory = data.cause_name.map(x => x=="Chronic respiratory diseases");
      var diabetes = data.cause_name.map(x => x=="Diabetes, urogenital, blood, and endocrine diseases");
      var injuries = data.cause_name.map(x => x=="Injuries");
      var musculoskeletal = data.cause_name.map(x => x=="Musculoskeletal disorders");
      var neoplasms = data.cause_name.map(x => x=="Neoplasms");
      var wellcare = data.cause_name.map(x => x=="Well care");
    //   var public = public_data
    //   var private = private_data

       // Initialize x and y arrays
      var x = [];
      var y = [];

       switch(dataset) {
           case "Cardiovascular":

            var cardio_trace = {
                type: "scatter",
                mode: "lines",
                name: type,
                x: cardiovascular.map(x=> x.year_id),
                y: cardiovascular.map(x=> x.amount_spent),
                line: {
                color: "#17BECF"
                }
            };
        
            var data4 = [cardio_trace];
        
            var layout = {
                title: `Cardiovascular Care Costs 1996-2016`,
                xaxis: {
                range: [1996, 2016],
                type: "date"
                },
                yaxis: {
                autorange: true,
                type: "linear"
                }
            };
            break; 

          case "Chronic respiratory diseases":

            var respiratory_trace = {
                type: "scatter",
                mode: "lines",
                name: type,
                x: respiratory.map(x=> x.year_id),
                y: respiratory.map(x=> x.amount_spent),
                line: {
                color: "#137B16"
                }
            };
        
            var data4 = [respiratory_trace];
        
            var layout = {
                title: `Chronic Respiratory Care Costs 1996-2016`,
                xaxis: {
                range: [1996, 2016],
                type: "date"
                },
                yaxis: {
                autorange: true,
                type: "linear"
                }
            };
            break;

        case "Diabetes, urogenital, blood, and endocrine diseases":

            var diabetes_trace = {
                type: "scatter",
                mode: "lines",
                name: type,
                x: diabetes.map(x=> x.year_id),
                y: diabetes.map(x=> x.amount_spent),
                line: {
                color: "#FF3358"
                }
            };
        
            var data4 = [diabetes_trace];
        
            var layout = {
                title: `Diabetes, Urogenital, Blood, and Endocrine Care Costs 1996-2016`,
                xaxis: {
                range: [1996, 2016],
                type: "date"
                },
                yaxis: {
                autorange: true,
                type: "linear"
                }
            };
            break;

        case "Injuries":

            var injuries_trace = {
                type: "scatter",
                mode: "lines",
                name: type,
                x: injuries.map(x=> x.year_id),
                y: injuries.map(x=> x.amount_spent),
                line: {
                color: "#E133FF"
                }
            };
        
            var data4 = [injuries_trace];
        
            var layout = {
                title: `Injuries Care Costs 1996-2016`,
                xaxis: {
                range: [1996, 2016],
                type: "date"
                },
                yaxis: {
                autorange: true,
                type: "linear"
                }
            };
            break;

        case "Musculoskeletal disorders":

            var musculoskeletal_trace = {
                type: "scatter",
                mode: "lines",
                name: type,
                x: musculoskeletal.map(x=> x.year_id),
                y: musculoskeletal.map(x=> x.amount_spent),
                line: {
                color: "#339EFF"
                }
            };
        
            var data4 = [musculoskeletal_trace];
        
            var layout = {
                title: `Musculoskeletal Care Costs 1996-2016`,
                xaxis: {
                range: [1996, 2016],
                type: "date"
                },
                yaxis: {
                autorange: true,
                type: "linear"
                }
            };
            break;
        
        case "Neoplasms":

            var neoplasms_trace = {
                type: "scatter",
                mode: "lines",
                name: type,
                x: neoplasms.map(x=> x.year_id),
                y: neoplasms.map(x=> x.amount_spent),
                line: {
                color: "#33FFBD"
                }
            };
        
            var data4 = [neoplasms_trace];
        
            var layout = {
                title: `Neoplasm Care Costs 1996-2016`,
                xaxis: {
                range: [1996, 2016],
                type: "date"
                },
                yaxis: {
                autorange: true,
                type: "linear"
                }
            };
            break;

        case "Well care":

            var wellcare_trace = {
                type: "scatter",
                mode: "lines",
                name: type,
                x: wellcare.map(x=> x.year_id),
                y: wellcare.map(x=> x.amount_spent),
                line: {
                color: "#FF5733"
                }
            };
        
            var data4 = [neoplasms_trace];
        
            var layout = {
                title: `Well Care Costs 1996-2016`,
                xaxis: {
                range: [1996, 2016],
                type: "date"
                },
                yaxis: {
                autorange: true,
                type: "linear"
                }
            };
            break;



       }
  
      
  
      Plotly.newPlot(CHART, data4, layout);
  
    // });
  };
  
  // Add event listener for submit button
//   d3.select("#submit").on("click", handleSubmit);

init();