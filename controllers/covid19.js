function reqListener () {
    console.log();

    const array_datos = JSON.parse(this.responseText);
    var tarjetas = "";
  

  //  for(var i=0 ; i<array_datos.length ; i++){
       
      //
    //}
    for(var elemento in array_datos){
        tarjetas = tarjetas + tarjeta(elemento,"Casos confirmados: "+array_datos[elemento].All.confirmed, "C:/Users/Isaias/Desktop/PruebaTecnica/assets/img/covid.png", array_datos[elemento].All.location, array_datos[elemento]);
        //console.log(array_datos[elemento].All.confirmed);
    }
    document.getElementById("contenido").innerHTML = tarjetas;
}
  
 var oReq = new XMLHttpRequest();
 oReq.addEventListener("load", reqListener);
 oReq.open("GET", "https://covid-api.mmediagroup.fr/v1/cases");
 oReq.send();

 function tarjeta(titulo, descripcion, imagen, loca ,array)
{
    var tarjeta = "<div class='col-md-4 p2'>"+
    "<div class='card text-center p2'>"+
    "<div class='card-header d-flex bg-dark text-white justify-content-between align-items-center p2'>"+
    titulo+  
    "</div>"+
    "<img src='"+imagen+"'>"+
    "<div class='card-body p2'><p><b>Pais:</b> "+titulo+" </p> <br> <p>"+loca+"</p><p> "+
    descripcion+"</p><a class='btn btn-info btn-block' onclick='setDatosGrafica("+array.All.deaths+" , "+array.All.confirmed+", "+array.All.recovered+")' data-toggle='modal' data-target='.bd-example-modal-lg'>Ver</a></div> </div></div>";
    return tarjeta;
}

function indexa(imagen){
    document.getElementById("modalImg").src = imagen;
    console.log(" ES : " + imagen );
  }



  //gRAFICA 
  function setDatosGrafica(muertes,confirmados,recuperados){
    var xValues = ["Muertes", "Confirmados",  "Recuperados"];
    var yValues = [muertes, confirmados, recuperados];
    var barColors = ["red", "green", "blue", "orange", "brown"];

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "COVID-19"
            }
        }
    });
  }