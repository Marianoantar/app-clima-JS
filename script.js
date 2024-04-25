let url_base = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = 'b6b5cffff1b78f4bf56aa7f4e87cd3d4';
let city_name = 'Rosario';
let difKelvin = 273.15;

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
// .then(response => response.json())
// .then(response => console.log(response))

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fechDatosClima(ciudad);
    }
})

function fechDatosClima(ciudad){
    fetch(`${url_base}?q=${ciudad}&appid=${api_key}`)
   .then(data => data.json())
   .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    // Datos a Mostrar
    const pais = data.sys.country
    const ciudadNombre = data.name + ` - ${pais}`;
    const temperatura = data.main.temp;
    const tempMax = data.main.temp_max;
    const tempMin = data.main.temp_min;
    const humedad = data.main.humidity;
    const presion = data.main.pressure;
    
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;
    
    // Crear Elementos
    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = ciudadNombre; 

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `Temperatura: ${Math.floor(temperatura - difKelvin)}°C`;
    
    const maxMin = document.createElement('p');
    maxMin.textContent = ` max: ${Math.floor(tempMax - difKelvin)}°C - min: ${Math.floor(tempMin - difKelvin)}°C`

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `Humedad: ${humedad}%`;
    
    const presionInfo = document.createElement('p');
    presionInfo.textContent = `Presion: ${presion}hp`;
    
    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}.png`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `Descripción: ${descripcion}`;
    
    // Agregar Elementos al DOM
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(maxMin);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(presionInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);

}