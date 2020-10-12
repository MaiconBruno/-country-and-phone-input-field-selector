import React, { useState } from 'react';
import {
  SelectBox,
  PhoneBox,
  PhoneNumber,
  Select,
  SeachState,
  Ul,
  Li,
  StateButton,
  Label,
  ListBox,
  Ico,
  SendButton,
  SeachBox,
  Mglass,
  Arrow,
  StateCod,
  BoxPopUp,
  PopUp,
} from './styles';

import flag_usa from '../PhoneComponent/flags/flag_usa.png';
import flag_eau from '../PhoneComponent/flags/flag_uea.png';
import flag_uk from '../PhoneComponent/flags/flag_uk.png';
import mGlass from '../PhoneComponent/icon/mglas.png';
import upArrow from '../PhoneComponent/icon/arrowBottom.png';
import downArrow from '../PhoneComponent/icon/arrowTop.png';
import { IcoCheck, IcoErr } from './icon/index';

interface Json {
  id: number;
  flag: string;
  phone_cod: string;
  name: string;
}



export const PhoneComponent: React.FC = () => {

  //Data
  const [stateSelect, setStateSelect] = useState([
    {
      id: 1,
      flag: flag_eau,
      phone_cod: '+971',
      name: 'United Arab Emirates',
    },
    {
      id: 2,
      flag: flag_uk,
      phone_cod: '+44',
      name: 'United Kingdom',
    },
    {
      id: 3,
      flag: flag_usa,
      phone_cod: '+1',
      name: 'United States',
    },

  ]
  );


  const [textFilter, setTextFilter] = useState('');
  const [RenderstateSelect, setRenderStateSelect] = useState<Json[]>([]);

  const [state, setState] = useState({
    id: 2,
    flag: flag_uk,
    cod: '+44',
  });

  const [phoneNumber, setPhoneNumber] = useState('');

  //Handlers fields
  const handleSelectChange = (idState: number, codeState: string, flagState: string) => {
    setState({
      id: idState,
      flag: flagState,
      cod: codeState,
    })
  };

  function phoneMask(value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '($1) $2')
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  const [toogle, setToogle] = useState(true);

  const handlerSelectToogle = () => {
    setRenderStateSelect(stateSelect);
    switch (toogle) {
      case true:
        setToogle(false);
        break;
      case false:
        setToogle(true);
        break;
    }
  };

  const handlerNumberChangeDDD = () => {
    switch (phoneNumber) {
      case "":
        setPhoneNumber('');
        setToogle(true);
        break;
    }
  };

  const [info, setInfo] = useState(
    {
      message: 'You number must contain',
      ddd: false,
      numberState: false,
      color: '#89C3DE',
      InputBgColor: '#89C3DE',
    }
  )
  const [popUp, setPopUp] = useState(false);
  const HandlerInfoOver = () => {
    switch (popUp) {
      case false:
        setPopUp(true);
    }
    switch (popUp) {
      case true:
        setPopUp(false);
    }

  }

  const handlerNumberChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhoneNumber(phoneMask(e.target.value));
    if (phoneNumber.length <= 2) {
      setInfo(
        {
          message: 'You number must contain',
          ddd: false,
          numberState: false,
          color: '#89C3DE',
          InputBgColor: '#89C3DE',
        })
      setCheckField(false);
    } else if (phoneNumber.length <= 12) {
      setInfo({
        message: 'You number must contain',
        ddd: true,
        numberState: false,
        color: '#FFC44D',
        InputBgColor: '#89C3DE',
      })
      setCheckField(false);
    } else if (phoneNumber.length >= 12) {
      setInfo({
        message: 'You number must contain',
        ddd: true,
        color: '#4DDBC4',
        numberState: true,
        InputBgColor: '#4DDBC4',
      })
      setCheckField(true);
    }
  };

  const [checkField, setCheckField] = useState(false);
  const [activeButton, setActiveButton] = useState(true);

  const HandleActiveButtonChange = () => {
    switch (activeButton) {
      case true:
        setActiveButton(false);
        setToogle(true);
        break;
      case false:
        setActiveButton(true);
        break;
    }
  }

  const Submit = () => {
    switch (checkField) {
      case false:
        if (phoneNumber.length <= 2) {
          setInfo({
            message: 'You number must contain',
            ddd: false,
            numberState: false,
            color: '#EE4D4D',
            InputBgColor: '#EE4D4D',
          })
        } else if (phoneNumber.length < 14) {
          setInfo({
            message: 'You number must contain',
            ddd: true,
            numberState: false,
            color: '#EE4D4D',
            InputBgColor: '#EE4D4D',
          })
        }
    }
  }

  const handleStateFilterChange: React.ChangeEventHandler<HTMLInputElement> = (data) => {
    const { target: { value } } = data;
    setTextFilter(value);
    const filter = stateSelect.filter(index => index.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    setRenderStateSelect(filter);
    console.log(filter);
  };


  return (
    <>
      <SelectBox style={{opacity:activeButton ? '1' : '0.5', pointerEvents:activeButton ? 'all' : 'none' }}  >
        {/* style={{ display: popUp ? 'block' : 'none' }}  */}
        <BoxPopUp >
          <PopUp theme={popUp ? 'visible' : 'hidden'} color={info.color}>
            <ul style={{ listStyleType: 'none', paddingLeft: '20px', paddingTop: '0', paddingBottom: '0', paddingRight: '0' }}>
              <li style={{ color: 'black', fontWeight: 'bold' }}>{info.message}</li>
              <li style={{ color: 'black', fontWeight: 'bold' }}>{info.ddd ? <IcoCheck /> : <IcoErr />} DDD.</li>
              <li style={{ color: 'black', fontWeight: 'bold' }}>{info.numberState ? <IcoCheck /> : <IcoErr />} Only numbers.</li>
            </ul>
          </PopUp>
        </BoxPopUp>
        <Label color={info.InputBgColor}>
          Phone Number
          <svg onMouseOver={HandlerInfoOver} onMouseOut={HandlerInfoOver} xmlns="http://www.w3.org/2000/svg" width="16" height="15.998" viewBox="0 0 16 15.998" >
            <g transform="translate(0 0)">
              <g transform="translate(0 0)">
                <path fill={info.color} d="M.316,15.118a5.486,5.486,0,0,0,2.041-2.2A7.369,7.369,0,0,1,0,7.562,7.806,7.806,0,0,1,8,.032a7.806,7.806,0,0,1,8,7.53,7.806,7.806,0,0,1-8,7.53,9.8,9.8,0,0,1-2.1-.239A10.24,10.24,0,0,1,.761,16.027c-.349,0-.6.059-.733-.3A.476.476,0,0,1,.316,15.118Zm6.748-3.776a.937.937,0,1,0,1.875,0V7.562a.937.937,0,1,0-1.875,0ZM8,5.187a.937.937,0,1,0-.937-.937A.937.937,0,0,0,8,5.187Z" transform="translate(0 -0.032)" />
              </g>
            </g>
          </svg>
        </Label>
        <PhoneBox color={info.InputBgColor}>
          <Select color={info.InputBgColor} onClick={handlerSelectToogle} key={state.id}>
            <StateCod><Ico src={state.flag} />{state.cod}</StateCod> <Arrow src={toogle ? upArrow : downArrow} />
          </Select>
          <PhoneNumber placeholder="123..." onClick={handlerNumberChangeDDD} value={phoneNumber} onChange={handlerNumberChange} />
        </PhoneBox>
        <ListBox color={info.InputBgColor} style={{ display: toogle ? 'none' : 'block' }}>
          <SeachBox color={info.InputBgColor}>
            <Mglass src={mGlass} />
            <SeachState onChange={handleStateFilterChange} placeholder="Seach" className="inputseach" type="text" />
          </SeachBox>
          <Ul className="scrollCustom">
            {RenderstateSelect.map(data => (
              <Li key={data.id}>
                <StateButton onClick={() => handleSelectChange(data.id, data.phone_cod, data.flag)}><Ico src={data.flag} />{data.name}</StateButton>
              </Li>
            ))}
          </Ul>
        </ListBox>
      </SelectBox>

      <SendButton style={{opacity:activeButton ? '1' : '0.5', pointerEvents:activeButton ? 'all' : 'none' }} color={checkField ? '#4DDBC4' : '#515151'} onClick={Submit}>RECORD</SendButton>
      <SendButton color={activeButton ? '#EE4D4D' : '#4DDBC4'} onClick={HandleActiveButtonChange}>{activeButton ? 'DISABLE' : 'ENABLE'}</SendButton>
    </>
  );
}






