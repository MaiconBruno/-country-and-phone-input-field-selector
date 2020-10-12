import React from 'react';
import { GlobalStyles, MainRow } from './styles/global_styles';
import {PhoneComponent} from './components/PhoneComponent';
export const App: React.FC = () => (
   <>
      <GlobalStyles />
      <MainRow>
       <PhoneComponent/>
      </MainRow>
   </>
);

