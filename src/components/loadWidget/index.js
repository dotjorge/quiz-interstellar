import styled from 'styled-components';
import Widget from '../Widget'
import BarraLoading from '../BarraLoading'


export default function loadWidget({classes,tema,style}){
    return(
    <>
        <Widget data-widgetbg={tema} style={style} className={classes}>
            <Widget.Header data-h1bg={tema}>
                <h1 data-h1={tema}>
                <Widget.Loading />
                    Carregando...
                </h1>
            </Widget.Header>
            <Widget.Content>
                <BarraLoading dataTema={tema} />
            </Widget.Content>
        </Widget>
    </>
    );
};