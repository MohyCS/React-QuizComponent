import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    
    constructor (props) {
        super(props)
        this.state = { incorrectAnswer: false }
    }

    handleClick (buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({ incorrectAnswer: false })
            this.props.showNextQuestionHandler()
        }

        this.setState({ incorrectAnswer: true })
    }

    render () {
        return (
            <main>
                <header>
                    <nav>
                        <img src="data:image/png;base64,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"/>
                    </nav>
                    <a className="azure203">AZURE 203</a>
                    <div className="entireQuestionArea">
                        <div className="questionNumber">
                            <p>Question {this.props.quiz_position}</p>
                        </div>
                        <div className="questionDiv">
                            <section className="instruction">
                                <p>{this.props.quiz_question.instruction_text}</p>
                            </section>
                        </div>
                        <section className="buttons">
                            <ul>
                                {this.props.quiz_question.answer_options.map((answer_option, index) => {
                                    return <QuizQuestionButton key = {index} button_text = {answer_option} clickHandler={this.handleClick.bind(this)}/>
                                })}
                                
                            </ul>
                        </section>
                        {this.state.incorrectAnswer ? <p className='error'> Sorry, that's not right</p> : null}
                    </div>
                </header>
                <div className="copyright">
                    <footer>
                        <nav>
                            <img src="data:image/png;base64,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"/>
                            <a>By Mohaymen Ahmed</a>
                        </nav>
                    </footer>
                </div> 
            </main>
        )
    }

}

export default QuizQuestion