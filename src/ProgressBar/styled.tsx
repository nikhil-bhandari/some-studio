import styled from 'styled-components';

export const ProgressBar = styled.div <{ percentage: number }>`
  margin-top: 10px;
  width: 100%;
  background-color: #DDD;
  border-radius: 10px;
  overflow: hidden;
  > div {
    width: ${props => (props.percentage > 0 ? props.percentage : 0) + `%`};
    background-color: ${(props) => {
    let color;
    if (props.percentage > 66) {
      color = 'red';
    } else if (props.percentage > 33) {
      color = 'orange';
    } else {
      color = 'green';
    }
    return color;
  }};
    max-width: 100%;
    transition: width 1s linear, background-color  1s linear;
    height: 10px;
    border-radius: 10px;
  }
  &.collapsed > div{
    transition-delay: 0.3s;
    width: 0%;
  }
`;