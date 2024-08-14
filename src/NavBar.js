function NavBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container d-flex justify-content-left">
                <a className="navbar-brand fs-4 text-center text-primary" href="/">
                        <img src="https://th.bing.com/th/id/OIP._zmLEZ7g75-TyBjyC6REIgAAAA?w=203&h=196&c=7&r=0&o=5&pid=1.7"
                            alt="Logo"
                            width="60"
                            height="60"
                        className="d-inline-block align-text-middle" />
                    Pokemon
                </a>
                <div className="navbar-nav">
                    <a className="nav-link active text-primary" aria-current="page" href="https://www.amazon.com/s?k=pokemon+cards&adgrpid=1331509147349889&hvadid=83219471030607&hvbmt=be&hvdev=c&hvlocphy=101511&hvnetw=o&hvqmt=e&hvtargid=kwd-83219671745733%3Aloc-190&hydadcr=24662_13493378&msclkid=7fabec37d69719d2fcce8a8b619e82d8&tag=mh0b-20&ref=pd_sl_8dik2fpp2m_e">Buy Pokemon Cards</a>
                </div>
            </div>
    </nav>
    )
    
}


export default NavBar;