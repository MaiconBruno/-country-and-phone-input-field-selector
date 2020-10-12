import * as React from 'react';
import styled, {css} from 'styled-components';


export const SelectBox = styled.div`

`;

interface EnableButton {
  event:string,
  opacity:number,
}

export const BoxPopUp = styled.div`
 position:relative;
  font-size:12px;
  animation: fadeIn;
  transition: all 0.4s;
  display: inline-block;
`;
export const PopUp = styled.div`
    background-color:${props => props.color};
    position:absolute;
    padding:0px;
    border-radius:10px;
    line-height:1.7;
    width:200px;
    visibility: ${props => props.theme};
    cursor:pointer;
    bottom:120%;
    left:60px;
    :after{ /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid ${props => props.color};
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-top: 10px solid ${props => props.color};
    border-bottom: 10px solid transparent;
    top:71px; /*localização. Experimente alterar para 'bottom'*/
    left: 88%;
}

`;
export const Label = styled.label`
  font-size:12px;
  color: ${props => props.color};
  padding:5px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition: all 0.4s;
`;

export const SeachBox = styled.div`
  width:95%;
  margin-left:5px;
  margin-right:5px;
  border-bottom:solid 2px  ${props => props.color};
  border-left:0;
  border-right:0;
  border-top:0;
  display:flex;
  align-items:center;
`;

export const PhoneBox = styled.div`
transition: all 0.4s;
width:250px;
display:flex;
border:solid 2px ${props => props.color};
border-radius:10px;
padding:10px;
  &:hover{
    -webkit-box-shadow: 0px 0px 12px 1px  ${props => props.color};
    -moz-box-shadow: 0px 0px 12px 1px  ${props => props.color};
    box-shadow: 0px 0px 12px 1px ${props => props.color};;
  }
`;

export const PhoneNumber = styled.input`
  width:100%;
  background-color:black;
  color:white;
  border:none;
  margin-left:10px;
  &:focus{
    border:none;
  }
  &:active{
    border:none;
  }
`;

export const Select = styled.div`
  min-width:105px;
  display:flex;
  border-right:solid 2px ${props => props.color};
  border-bottom:none;
  border-top:none;
  border-left:none;
  align-items:center;
  justify-content:space-between;
  font-size:16px;
  color:white;
  transition: all 0.4s;
`;

export const ListBox = styled.div`
  min-width:267px;
  display:flex;
  max-height:300px;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  position:absolute;
  border:solid 2px ${props => props.color};
  border-radius:10px;
  padding:5px 2px;
  transition: all 0.4s;
  &:hover{
    -webkit-box-shadow: 0px 0px 12px 1px ${props => props.color};
    -moz-box-shadow: 0px 0px 12px 1px ${props => props.color};
    box-shadow: 0px 0px 12px 1px ${props => props.color};
    background: rgba(00, 174, 255, .1);
  }&:focus{
    background: rgba(00, 174, 255, .1);
  }&:active{
    background: rgba(00, 174, 255, .1);
  }
`;

export const SeachState = styled.input`
  padding:5px;
  background: rgba(0, 0, 0, .0);
  width:90%;
  margin:5px;
  color:white;
  border:none;
`;

export const Ul = styled.ul`
  background: rgba(0, 0, 0, .0);
  width:100%;
  overflow-y: scroll;
  padding:0;
  opacity: 1;
  max-height: 100px;
  display:flex;
  align-items:initial;
  justify-content:initial;
  flex-direction:column;
`;

export const Li = styled.li`
  color:white;
  list-style:none;
`;

export const Ico = styled.img`
  width:30px;
  height:15px;
  padding:5px;
`;

export const Arrow = styled.img`
  width:15px;
  height:15px;
  padding:5px;
  transition: all 0.4s;
`;
export const StateCod = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
export const Mglass = styled.img`
  width:15px;
  height:15px;
  padding:10px;
  opacity: 0.5;
  `;

export const StateButton = styled.button`
  transition: all 0.4s;
  padding:5px 10px;
  display:flex;
  width:100%;
  align-items:center;
  min-width:220px;
  font-size:16px;
  font-weight:400px;
  border:none;
  background: rgba(0, 0, 0, .0);
  color:white;
  &:hover{
    border:0;
    background:#89C3DE;
  }
  &:focus{
    background:#0E7291;
  }
`;

export const SendButton = styled.button`
margin-top:50px;
margin-left:10px;
margin-right:10px;
background-color:${props => props.color};
padding:10px 15px;
font-size:16px;
font-weight:bold;
border-radius:8px;
border:none;
color:white;
transition: all 0.4s;
&:hover{
  background-color:#313131;
  transition: all 0.4s;
}
`;
