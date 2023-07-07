import React from "react";
import { BtnLogin } from "../../components/BtnLogin";
import { IconButton } from "../../components/IconButton";
import { VVelisOriginal } from "../../components/VVelisOriginal";
import { VisibilityWrapper } from "../../components/VisibilityWrapper";
import { Google } from "../../icons/Google";
import { IconsCheckSmall1 } from "../../icons/IconsCheckSmall1";
import { Line1 } from "../../icons/Line1";
import { Microsoft } from "../../icons/Microsoft";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-2">
        <div className="overlap">
          <h1 className="plataforma-de-for-a">
            <span className="text-wrapper">
              Plataforma de <br />
            </span>
            <span className="span">Força de Vendas completa</span>
            <span className="text-wrapper">
              {" "}
              para <br />
              você e seu negócio <br />
            </span>
          </h1>
          <VVelisOriginal className="v-velis-original-instance" />
        </div>
        <div className="login">
          <div className="overlap-group">
            <div className="frame">
              <div className="div-3">
                <div className="text-wrapper-2">google</div>
                <Google className="google-instance" />
              </div>
              <div className="div-3">
                <div className="text-wrapper-3">microsoft</div>
                <Microsoft className="microsoft-instance" />
              </div>
            </div>
            <div className="frame-2">
              <Line1 className="line" />
              <div className="ou-acesse-com">ou&nbsp;&nbsp;acesse com</div>
              <Line1 className="line" />
            </div>
            <BtnLogin className="btn-login-instance" property1="default" />
            <div className="frame-3">
              <div className="box-lembrarmim">
                <div className="checkboxes">
                  <div className="state-layer-2">
                    <div className="container-2" />
                    <IconsCheckSmall1 className="icons-check-small" color="white" />
                  </div>
                </div>
                <div className="text-wrapper-4">Lembrar de mim</div>
              </div>
              <div className="esqueceu-senha">
                <div className="text-wrapper-5">Esqueceu a senha?</div>
              </div>
            </div>
            <div className="text-field">
              <div className="state-layer-wrapper">
                <div className="content-wrapper">
                  <div className="content">
                    <div className="input-text">
                      <div className="input-text-2" />
                    </div>
                    <div className="label-text">
                      <div className="label-text-2">Usuário</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-field-2">
              <div className="state-layer-wrapper">
                <div className="state-layer-3">
                  <div className="content">
                    <div className="input-text">
                      <div className="input-text-2" />
                    </div>
                    <div className="label-text">
                      <div className="label-text-2">Senha</div>
                    </div>
                  </div>
                  <IconButton
                    icon={<VisibilityWrapper className="visibility-instance" />}
                    stateProp="enabled"
                    style="standard"
                  />
                </div>
              </div>
            </div>
            <div className="v-velis-original-2">
              <div className="rectangle-2" />
              <div className="rectangle-3" />
            </div>
          </div>
          <img
            className="logo-horizontal-cor"
            alt="Logo horizontal cor"
            src="https://anima-uploads.s3.amazonaws.com/projects/64a85d09af9289dafee9787c/releases/64a85d4b8d14c688e464f5a7/img/logo-horizontal-cor-tag@2x.png"
          />
        </div>
        <img
          className="image"
          alt="Image"
          src="https://anima-uploads.s3.amazonaws.com/projects/64a85d09af9289dafee9787c/releases/64a85d4b8d14c688e464f5a7/img/image-3@2x.png"
        />
      </div>
    </div>
  );
};
