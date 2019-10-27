import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";
import isEmpty from 'lodash/isEmpty';

import NavigationBar from '../Navbar';
import styles from './SurveyPageView.module.css';
import '../../App.css';

const SurveyPageView = ({ ...props }) => {
    const { questionNumber, onAnswer, surveyList, reDoSurvey, surveyComplete,
                submitResults, isLoading, answer } = props;
    
    const surveyCompleted = () => (
        <>
        <NavigationBar/>
        <div key={questionNumber} className={styles.containerPadding}>
            <Container>
                {
                    surveyComplete ? (<>
                        <Button
                            variant="outline-light"
                            onClick={reDoSurvey}
                            className={styles.buttonspacing}
                            size="lg"
                        >
                            Start Over
                        </Button>
                        <Button
                            href="/zaps"
                            variant="outline-light"
                            size="lg"
                        >
                            Explore all Zaps
                        </Button>
                    </>) : (
                    <Button
                        variant="outline-light"
                        onClick={submitResults}
                        className={styles.buttonspacing}
                        size="lg"
                    >
                        Get Results
                    </Button>
                    )
                }
                {
                    isLoading ? (
                        <>
                            <Spinner animation="grow" variant="light" />
                            <Spinner animation="grow" variant="light" />
                            <Spinner animation="grow" variant="light" />
                            <Spinner animation="grow" variant="light" />
                            <Spinner animation="grow" variant="light" />
                        </>
                    ) : (generateResult())
                }
            </Container>
        </div>
    </>
    );

    const questions = () => {
        const questions = surveyList.map(item => {
            return (
                  <>
                  <NavigationBar />
                  <div key={questionNumber} className={styles.containerPadding}>
                      <Container key={questionNumber}>
                          {questionNumber === 1 ? (
                              <>
                                <h4 style={{ color: "red" }}>Answer a few multiple choice questions to see which Zap might fit your needs.</h4>
                                <h5 style={{ color: "red" }}>DISCLOSURE: THIS IS NOT INVESTMENT ADVICE. DO NOT MAKE INVESTMENT DECISIONS SOLELY BASED ON</h5>
                                <h5 style={{ color: "red" }}>RESULTS GENERATED BY THIS TOOL. THIS PROJECT IS IN BETA. USE AT YOUR OWN DISCRETION.</h5>
                              <br />
                              </>
                          ): null}
                              <h4 style={{ color: "white" }}>
                                  {questionNumber} . {item.question}
                              </h4>
                              <br />
                              <ol type="A"  style={{ color: "white" }}>
                                  {item.options.map(option => {
                                      return (
                                          <li className={styles.buttonspacing}>
                                              <Button variant="outline-light" size="lg" onClick={() => onAnswer(option.key)}>
                                                  {option.value}
                                              </Button>
                                          </li>
                                      );
                                  })}
                              </ol>
                      </Container>        
                  </div>
                  </>
            );
        });
        return questions[questionNumber - 1];
    };

    const generateResult = () => {
        return(
            isEmpty(answer) ? null : (
                <>
                    <br /> < br/>
                    <h4 style={{ color: "white" }}>
                        Based on your investment profile, <br />
                        you might find this Zap useful: <br />
                        <Link
                            styles={{ color: 'white'}}
                            to={`/zaps/${answer}`}
                        >
                            {answer}
                        </Link>
                    </h4>
                </>
            )
        );
    }

    const questionaire = (questionNumber) => {
        return (
                <div
                    className="hero-image"
                    style={{
                    height: "1000px",
                    marginBottom: "100px"
                    }}
                >
                    <div className={styles.containerPadding} style={{ paddingTop: "150px" }}>
                    {
                        surveyList.length >= questionNumber ? questions() : surveyCompleted()
                    }
                    </div>
                </div>
        );
    };

    return questionaire(questionNumber);
};

export default SurveyPageView;
