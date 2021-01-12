import { createGlobalStyle } from 'styled-components';

export const colors = {
  titolo : '#678bd0',
  sottoTitolo : '#a2a2a2',
};

export const breakpoints = {
  screenMobXSmall: '320px',
  screenMobSmall: '375px',
  screenMobMid: '411px',
  screenMobMedium: '600px',
  screenMobBig: '768px',
  screenDeskSmall: '960px',
  screenDeskMid: '1300px',
};

const GlobalStyles = createGlobalStyle`
  .fotoUtente{
    border-radius: 50%!important;
    width: 35px!important;
    vertical-align: middle!important;
    margin-left: 10px!important;
    margin-right: 10px!important;
  }
  .menuLaterale{
    background-color:red!important;
  }
  
  .MuiDrawer-paper {
    width: 60%;
    background-color: #22578e!important;
    color:white!important;
    max-width:300px!important;
  }
  .logo {
    width: 65%!important;
    margin-left: 20px!important;
    max-width:300px!important;
  }
  .btnOfferte{
    background-color: #2024408a!important;
    width: 70%!important;
    border: 1px solid white!important;
    border-left: 0px!important;
    border-radius: 0px 20px 20px 0px!important;
  }
  .MuiButton-label {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    background: #5779d8;
    color: white;
    padding: 8px;
    border-radius: 6px;
}

.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: #737373!important;
}
.MuiSwitch-colorSecondary.Mui-checked {
    color: #080706!important;
}
.contenitoreSwitch{
  font-size: 11px;
    text-align: center;
}
.avvisoAllievo {
    font-size: 0.8em;
    text-align: justify;
    padding: 17px;
    background: #24395f;
}
.MuiButton-contained {
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none!important;
    background-color: #ffffff;
    width: 30%;
    margin-left: 35%;
}
.MuiCardHeader-root{
  padding: 13px!important;
}
.MuiBottomNavigation-root {
    height: 50px!important;
    background-color: black!important;
}
.MuiBottomNavigationAction-root {
    flex: 1;
    color: rgb(255 255 255)!important;
    position:absolute;
left:0;
bottom:0;
right:0;
}
.MuiBottomNavigationAction-root.Mui-selected {
    color: #6c7ee2!important;
}
.MuiTypography-colorTextSecondary {
    color: rgba(0, 0, 0, 0.54)!important;
    font-size: 16px!important;
}
header{
  margin-bottom: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:10;
}

footer{
  margin-top: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
`;

export default GlobalStyles;