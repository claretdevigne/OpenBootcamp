function initMap() {
    const tmv = { 
        lat: 10.182351,
        lng: -68.00629
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: tmv
    })

    // Solo un marcador porque no se me ocurren otros lugares para marcar
    const marker1 = new google.maps.Marker({
        position: tmv,
        map,
        title: "Uluru"
    })
}