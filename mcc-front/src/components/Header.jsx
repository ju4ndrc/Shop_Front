export default function Header(){

    return(
        <header className="header">
        <div className="container container-sm container-md container-lg header-container">

            <div className="logo">
                <img className="img-logo" src="./images/claaran-logo.png" alt="logo-claaran"/>
            </div>
              
               <nav className="menu">
                <input type="checkbox" id="menu-toggle" className="menu-toggle visually-hidden"/>
                <label  className="menu-icon">&#9776;</label>
                <ul className="menu-list">
                  <li className="menu-item"><a href="#home">Inicio</a></li>
                  <li className="menu-item"><a href="#about">Acerca de Nosotros</a></li>
                  <li className="menu-item" ><a id="explore" href="#servicios">Explorar Tienda</a></li>
                 
                 
                </ul>
              </nav>
        </div>
</header>

    )
}