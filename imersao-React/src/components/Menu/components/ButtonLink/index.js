import React from 'react';

function ButtonLink(props){
//props => {className:"o que quer passar", href:"Pra onde quer que vá"}
    return(
        <a className={props.className} href={props.href}>
{props.children}
        </a>
    )
}
export default ButtonLink;