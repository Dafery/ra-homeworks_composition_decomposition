import React from 'react';
import { AdditionalInformationItem } from './AdditionalInformationItem';

//Создание блока с дополнительной информацией

export const AdditionalInformation = () => {
  return (
    <div className="info-block">
      <AdditionalInformationItem title="Погода">
        <p>Утром +17, днём +20</p>
      </AdditionalInformationItem>
      <AdditionalInformationItem title="Посещаемое">
        <p>Недвижимость - о сталинках</p>
        <p>Маркет - люстры и светильники</p>
        <p>Авто.ру - привод 4х4 до 500 000</p>
      </AdditionalInformationItem>
    </div>
  );
};
