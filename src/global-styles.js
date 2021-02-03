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
    padding: 20px;
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
.MuiPaper-elevation1 {
    box-shadow: 0px 1px 11px 5px rgba(0,0,0,0.2), 1px 1px 6px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12) !important;
}
.MuiList-padding {
      padding-left: 8px!important;
      padding-right: 8px!important;
      .share-btn{
        margin-left:4px;
        margin-right:4px;
      }
  }
  .contenitoreMenu{
  padding-left:0px!important;
}
  .MuiButton-root {
    width: 100%;
}
.MuiCardActions-root {
    justify-content: center;
    margin-top: -15px;
}

.MuiIconButton-root {
  border: 2px solid ${colors.titolo} !important;
}
.cuorePieno{
fill:${colors.titolo}!important;
}
.contenitoreBtnFalso{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  margin-top: -12px;
    padding-bottom: 18px;
}
.noPreferiti {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    font-size: 18px;
    color: ${colors.titolo};
    font-weight: bold;
}
.preferitiFalso {
    border: 2px solid #d4d4d4;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom:10px;
}
.cuoreFinto{
fill:#d4d4d4!important;
}
.frase {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #ababab;
    position: absolute;
    margin-top: 63px;

}
.slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
}
.slick-prev, .slick-next {
  display:none!important;
}
.slick-slide img {
    display: block;
    width: 100%;
}
`;

export default GlobalStyles;