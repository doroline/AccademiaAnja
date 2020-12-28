import { createGlobalStyle } from 'styled-components';

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
    width: 50%!important;
    margin-left: 20px!important;
    max-width:300px!important;
  }
  .btnOfferte{
    background-color: #202440!important;
    width: 80%!important;
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
`;

export default GlobalStyles;