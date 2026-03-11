document.getElementById("formDenuncia").addEventListener("submit", function(event){
                    event.preventDefault();
                    document.getElementById("mensagemDenuncia").style.display = "block";
                    });

document.getElementById("formColeta").addEventListener("submit", function(event) {
                    event.preventDefault(); 
                    document.getElementById("mensagem").style.display = "block";
                    });


var mapa = L.map('mapa').setView([-26.3044, -48.8487], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(mapa);


L.marker([-26.3416, -48.8587]).addTo(mapa)
.bindPopup("<b>Ecoponto Parque São Francisco</b><br>Adhemar Garcia");

L.marker([-26.3220, -48.8444]).addTo(mapa)
.bindPopup("<b>Ecoponto Praça Tiradentes</b><br>Bairro Floresta");

L.marker([-26.3065, -48.9421]).addTo(mapa)
.bindPopup("<b>Unidade Regional de Obras Oeste</b><br>Vila Nova");

L.marker([-26.2790, -48.8400]).addTo(mapa)
.bindPopup("<b>Unidade Regional de Obras Nordeste</b><br>Aventureiro");

L.marker([-26.3521, -48.8398]).addTo(mapa)
.bindPopup("<b>Unidade Regional de Obras Sudeste</b><br>Paranaguamirim");

L.marker([-26.2914, -48.8873]).addTo(mapa)
.bindPopup("<b>Unidade Regional de Obras Centro-Norte</b><br>Costa e Silva");

L.marker([-26.3050, -48.8463]).addTo(mapa)
.bindPopup("<b>Centreventos Cau Hansen</b><br>Centro");

L.marker([-26.2782, -48.8461]).addTo(mapa)
.bindPopup("<b>CEU Aventureiro</b><br>Ponto de descarte");