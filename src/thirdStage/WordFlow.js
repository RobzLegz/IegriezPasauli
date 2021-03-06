import React from 'react'
import styled from 'styled-components';

function WordFlow({tsCorrectWords,clickIncorrectWord, thirdStageFoundWords, clickWord, tsIncorrectWords, finishCountDown}) {
    return (
        <StyledWordFlowStage>
            <div className="time__counter">
                <h4>0.{finishCountDown < 10 ? "0" + finishCountDown : finishCountDown}</h4>
            </div>
            <div className="correct__container">
                {tsCorrectWords.map((correct, i) => (
                    <h3 
                      key={`correct-${i}`}
                      onClick={() => clickWord(correct)} 
                      style={{
                          bottom: `${correct.bottom}%`, 
                          right: `${correct.right}%`,
                          color: `${correct.color}`,
                          fontSize: `${correct.fontSize}`
                      }}
                    >{correct.text}</h3>
                ))}
            </div>            
            <div className="incorrect__container">
                {tsIncorrectWords.map((incorrect, i) => (
                  <h3 
                    onClick={() => clickIncorrectWord(i)}
                    key={`incorrect-${i}`}
                    id={`incorrect__${i}`}
                    style={{
                      top: `${incorrect.top}%`, 
                      left: `${incorrect.left}%`,
                      color: `${incorrect.color}`,
                      fontSize: `${incorrect.fontSize}`
                    }}
                  >{incorrect.text}</h3>
                ))}
            </div>            
            <div className="answered__container">
                {thirdStageFoundWords.map((found, i) => (
                    <h3 
                        key={`found-${i}`}
                        style={{bottom: `${found[1]}%`, right: `${found[2]}%`}}
                    >{found[0]}</h3>
                ))}
            </div>
        </StyledWordFlowStage>
    )
}
const StyledWordFlowStage = styled.div`
  background: linear-gradient(120deg, #efeae4, #ebe1d1);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  > .correct__container {
    > h3 {
      cursor: pointer;
      position: absolute;
      animation: floatWords 15s ease-in infinite;
    }

    @keyframes floatWords {
      from {
        transform: scale(0.5);
      }
      to {
        transform: scale(1.7);
      }
    }
  }

  > .incorrect__container {
    > h3 {
      cursor: pointer;
      position: absolute;
      animation: floatWords 15s ease-in infinite;
    }

    @keyframes floatWords {
      from {
        transform: scale(0.5)
      }
      to {
        transform: scale(1.7)
      }
    }
  }

  > .answered__container {
    h3 {
      position: absolute;
      font-size: 2rem;
      animation: animateFoundWord 1s ease infinite;
      pointer-events: none;
    }

    @keyframes animateFoundWord {
      0% {
        color: #36D63A;
      }
      50% {
        color: #41583c;
      }
      100% {
        color: #36D63A;
      }
    }
  }

  > .time__counter {
    background-color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border-radius: 5px;
    height: fit-content;
    width: fit-content;
    padding:5px 10px 5px 10px;
    position: absolute;
    text-align: center;
    top: 90px;
    right: -30px;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    
    > h4 {
      animation: animateCountDown 15s infinite;
    }
    @keyframes animateCountDown {
      0% {
        color: #2f2f2f;
      }
      50% {
        color: #ffa52f;
      }
      100% {
        color: red;
      }
    }
  }
  @media(max-width: 600px){
    .time__counter{
      font-size: 2rem;
      top: 80px;
      right: -40px;
    }
  }
  @media(max-width: 320px){
    .time__counter{
      font-size: 1.5rem;
      top: 80px;
      right: -30px;
    }
  }

`;

export default WordFlow;