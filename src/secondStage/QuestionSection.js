import React from 'react'
import styled from 'styled-components';

function QuestionSection({image, question, answerOptions, correctAnswer, openSecondStageQuestion, id}) {
    return (
        <StyledQuestionSection>
            <img onClick={() => {
                openSecondStageQuestion(question, answerOptions, correctAnswer, id);
            }} src={image} alt="object" />
        </StyledQuestionSection>
    )
}
const StyledQuestionSection = styled.div`
    >img{
        width: 50px;
        height: 50px;
    }
`;

export default QuestionSection