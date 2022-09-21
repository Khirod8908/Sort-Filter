import React from 'react';
import Filter from './Filter';
import Model from './helper/model/Model';
export default function About() {
  return (
    <div>
      <Filter />
      <Model btnText={'Show Model'} x={'center'} y={'center'} width={'60%'}>
        Model Content
      </Model>
    </div>
  );
}
