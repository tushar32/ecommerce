import styled from 'styled-components';
import { cardVariables } from './Global.style';


export const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const CardItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

export const CardHeader = styled.div`
    background-color: ${cardVariables['bs-card-cap-bg']};
    border-bottom: ${cardVariables['bs-card-border-width']} solid ${cardVariables['bs-card-border-radius']};
    color: var(--bs-card-cap-color);
    margin-bottom: 0;
    padding: ${cardVariables['bs-card-border-width']} solid ${cardVariables['bs-card-border-radius']};
`

export const CardTitle = styled.p`
    color: ${cardVariables['bs-card-title-color']};
    font-weight: bold;
    align-item: center;
    margin-bottom: ${cardVariables['bs-card-title-spacer-y']};
`

export const CardText = styled.p`
    margin-top:0;
    margin-bottom: 1rem
`