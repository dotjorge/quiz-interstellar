import styled from 'styled-components';
import Widget from '../Widget'
import BarraLoading from '../BarraLoading'

export default function loadWidget(){
    return(
    <>
        <Widget className={'inverter'}>
            <Widget.Header>
                <h1>
                    Carregando...
                </h1>
            </Widget.Header>
            <Widget.Content>
                <BarraLoading />
            </Widget.Content>
        </Widget>
    </>
    );
};