const CookiesPolicy = () => {
  const style = {
    'text-align': 'justify'
  }
  return (
    <div className="container" style={style}>
      <h2>Política de cookies</h2>
      <span>Una cookie es un archivo de información que el servidor de este sitio web envía al dispositivo (ordenador, smartphone, tablet, etc.) de quien accede a la página para almacenar y recuperar información sobre la navegación que se efectúa desde dicho equipo.</span>

      <p>DOMINIO_WEB utiliza diversos tipos de cookies (técnicas, analíticas y sociales) únicamente con la finalidad de mejorar la navegación del usuario en el sitio web, sin ningún tipo de objeto publicitario o similar, para el análisis y elaboración de estadísticas de la navegación que el USUARIO realiza en el sitio web, así como para compartir los contenidos en redes sociales (Google+, Twitter, Linkedin, Disqus)</p>

      <span className="w-100">DOMINIIO_WEB utiliza en este sitio web las cookies que se detallan a continuación:</span>

      <ol>
        <li>
          <span>COOKIES TÉCNICAS</span>
          <p>Son aquéllas que permiten al USUARIO la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales.</p>
        </li>

        <li>
          <span>COOKIES DE GOOGLE ANALYTICS</span>
          <p>Son cookies de terceros (Google Inc.) de análisis que permiten el seguimiento y análisis del comportamiento de los USUARIOS de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los USUARIOS de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los USUARIOS del servicio.</p>
          <p>Google Analytics, almacena las cookies en servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según Google no guarda la dirección IP del USUARIO.</p>
          <p>Más información sobre Google Analytics en los siguientes enlaces:</p>
          <ul>
            <li>https://support.google.com/analytics/</li>
            <li>http://www.google.com/intl/es/policies/privacy/</li>
            <span>Si deseas información sobre el uso que Google da a las cookies adjuntamos este otro enlace:</span>
            <li>https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1</li>
          </ul>
        </li><br></br>

        <li>
          <span>COOKIES SOCIALES</span>
          <p>Google+, Facebook, YouTube, Twitter, etc, son cookies de terceros, es decir, redes sociales externas y de terceros, cuya temporalidad y finalidad depende de cada red social.</p>
        </li>
      </ol>

      <span className="w-100">El usuario podrá <strong>en cualquier momento</strong> elegir qué cookies quiere que funcionen en este sitio web mediante:</span>

      <ol>
        <li>
          <p>la configuración del navegador; por ejemplo:</p>
          <ul>

            <li>Chrome, desde: http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</li>

            <li>Explorer, desde: http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9</li>

            <li>Firefox, desde: http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</li>

            <li>Safari, desde: http://support.apple.com/kb/ph5042</li>

            <li>Opera, desde: http://help.opera.com/Windows/11.50/es-ES/cookies.html</li>
          </ul>
        </li><br></br>

        <li><p>Existen herramientas de terceros, disponibles online, que permiten a los usuarios detectar las cookies en cada sitio web que visita y gestionar su desactivación.</p></li>
      </ol>

      <span>Ni esta web, ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</span>
      <span>Los navegadores web son las herramientas encargadas de almacenar las cookies y desde esos navegadores debes efectuar tu derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.</span>
      <span className="w-100">En algunos casos es necesario instalar cookies para que el navegador no olvide tu decisión de no aceptación de las mismas.</span>
      <span>La aceptación de la presente política de cookies implica que el usuario ha sido informado de una forma clara y completa sobre el uso de dispositivos de almacenamiento y recuperación de datos (cookies) así como que DOMINIO_WEB dispone del consentimiento del usuario para el uso de las mismas tal y como establece el artículo 22 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).</span>
    </div>
  )
}

export default CookiesPolicy
