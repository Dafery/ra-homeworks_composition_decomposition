import React from 'react';

//Создание одного элемента с дополнительной информацией

export const AdditionalInformationItem = ({ title, children }) => {
  return (
    <div className="info-block__item">
      <h4>{title}</h4>
      {children}
    </div>
  );
};
