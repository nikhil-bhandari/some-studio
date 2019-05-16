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

export const ProgressBar = styled(Collapsable) <{ percentage: Number }>`
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

export const Spinner = styled.span`
  & {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Button = styled.button`
    cursor: pointer;
    font-size: 15px;
    margin-left: 20px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    height: 50px;
    line-height: 30px;
    background-color: red;
    color: #FFF;
    display: inline-block;
    padding: 10px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    > ${Spinner} {
      margin-left: 10px;
    }
`;

export const FxBarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 11px 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: darkblue;
  color: #FFF;
  border-radius: 5px;
  overflow: hidden;
`;