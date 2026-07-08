import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: "Montserrat" !important;
  }

  .main-backgroud_linear {
    background: linear-gradient(3.83deg, #6BA425 -155.82%, #B3E17A 500.29%);
  }

  .ant-input {
    padding: 14px;
    border: none;
    border-radius: 10px;
  }

  .ant-input:focus {
    border: none;
    box-shadow: 0 0 0 2px rgba(129, 184, 47, 0.2);
  }

  .ant-input:not(:focus) {
    border: none;
    box-shadow: none;
  }

  .ant-input-group-addon {
    border: none;
    border-radius: 10px;
  }

  .ant-form-item-explain-error {
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #FF4A4A;
  }

  .ant-form-item-label>label {
    height: 49px;
    font-size: 15px;
  }
  @media screen and (min-width: 1024px) and (width < 1280px) {
    .ant-form-item-label>label {
      height: 25px;
    }
  }
  @media screen and (max-width: 640px) {
    .ant-form-item-label>label {
      height: 25px;
    }
  }

  .ReactFlagsSelect-module_flagsSelect__2pfa2 {
    padding: 0 !important; 
  }

  .ReactFlagsSelect-module_selectBtn__19wW7 {
    padding: 0 !important; 
    border: none !important;
  }

  .ReactFlagsSelect-module_fullWidthOptions__1XeR6 {
    width: 420px !important;
    border: none !important;
    border-radius: 10px !important;
    margin-top: 15px !important;
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px !important;
  }

  .ReactFlagsSelect-module_label__27pw9 {
    color: rgba(0,0,0,.85) !important;
  }

  .ReactFlagsSelect-module_secondaryLabel__37t1D {
    color: rgba(0,0,0,.7) !important;
  }
  
  .Toastify__toast-body > div:last-child {
    font-family: "Montserrat" !important;
  }

  .Toastify__toast-theme--colored.Toastify__toast--error {
    background: linear-gradient(3.83deg, #E50E0E -155.82%, #FF4A4A 500.29%);
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: linear-gradient(3.83deg, #6BA425 -155.82%, #B3E17A 500.29%);
  }
`;

export default GlobalStyle;
