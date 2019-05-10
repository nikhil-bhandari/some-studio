import styled from 'styled-components';

export const TopItem = styled.div`
  flex: 1;
  font-size: 25px;
  line-height: 50px;
`;

export const Currency = styled(TopItem)`
  text-align: left;
`;

export const TimeRemaining = styled(TopItem)`
  text-align: right;
`;

export const ExpiryHandling = styled(TopItem)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Collapsable = styled.div`
  max-height: 1000px;
  transition: max-height 0.1s linear, margin 0.3s linear;
  height: auto;
  &.collapsed {
    margin: 0;
    max-height: 0;
  }
`;

export const ProgressBar = styled(Collapsable)`
  margin-top: 10px;
  width: 100%;
  background-color: #DDD;
  border-radius: 10px;
  overflow: hidden;

`;

export const Progress = styled.div<{ percentage: Number }>`
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
`;

export const Button = styled.button`
  font-size: 15px;
  margin-left: 20px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  background-color: red;
  color: #FFF;
  display: inline-block;
`;

export const FxBarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  box-shadow: 0 0 11px 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: darkblue;
  color: #FFF;
  border-radius: 5px;
  overflow: hidden;
`;