import React from 'react';
import './Layout.css';

const layout =(props) => (
    <>
 <div >Toolbar, SliderDrawer, Backdrop</div>
 <main className="Content">
    {props.children}
 </main>
    </>
);
export  default layout; 