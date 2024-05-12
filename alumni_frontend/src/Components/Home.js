nav{
    height: 70px;
    background: var(--palleteblue);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
}

/*.logo{
    transition: font-size 0.3s ease-in-out;
    color: white;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
}*/
  

.nav-items{
    position: relative;
    display: flex;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: flex-end;
    margin-right: 2rem;
}

.nav-item{
    display: flex;
    align-items: center;
    height: 70px;
}

.nav-item a{
    text-decoration: none;
    font-size: 1.1rem;
    margin-right: 2rem;
    padding: 6px 16px;
    border-radius: 5px;
    color: var(--secondlightest);
}

.nav-item a:hover{
        background: var(--thirdlightest);
        color: black;
}


img{
    height:70px;
    width: 100%;
    display:flex;
    transition: .3s;
}

img.sticky{
    box-shadow: 0px 5px 10px rgba(0,0,0,.6);
    position:sticky;
    top:0;
    z-index: 100;
}

#logo{
    height:70px;
    width: 100%;
    display:flex;
    transition: .3s;
    border-radius:  50px;;
}


nav.sticky{
    box-shadow: var(--palleteblue);
    position:sticky;
    top:70px;
    z-index: 100;
}


#logo{
    display:flex;
    height: 100px;
    width: 100px;
}

#logo.sticky
{
    display:flex;
    height: 80px;
    width: 80px;
    position:sticky;
}

.submenu-item{
    color: black;
}
