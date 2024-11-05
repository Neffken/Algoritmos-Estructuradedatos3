import "./RecursosyMateriales.css";

function RecursosyMateriales() {
  const recursos = [
    { nombre: "Recurso 1", enlace: "https://drive.google.com/drive/folders/1JId8M0ndZzfU-TL6gnX8RJp7JyZsjoW-" },
  ];

  return (
    <div className="recursos-container">
      {/* Contenedor del iframe para el video de YouTube */}
      <div className="video-background">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BY2mTMBkuFI?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0"
          title="Recurso de YouTube"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          muted

        ></iframe>
      </div>

      {/* Contenido principal */}
      <div className="content">
         <h1 className="titulo_Recursos">Recursos y Materiales</h1>
        <p className="recursos_Utiles">Aquí puedes encontrar recursos útiles:</p>
        <ul className="recursos-list">
          {recursos.map((recurso, index) => (
            <li key={index} className="recurso-item">
              <a href={recurso.enlace} target="_blank" rel="noopener noreferrer">
                {recurso.nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecursosyMateriales;
