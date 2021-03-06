import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements'
import CountDown from 'react-native-countdown-component';

import { globalStyles } from '../../styles/globalStyles'

import { connect } from 'react-redux'
import * as actionQuestion from "./../../redux/actions/question"

import { color } from '../../config/config'

import Loading from '../components/Loading'

import TextAnswerSheet from './components/TextAnswerSheet'
import MultipleChoiceAnswerSheet from './components/MultipleChoiceAnswerSheet'
import MultipleSelectAnswerSheet from './components/MultipleSelectAnswerSheet'
import VideoAnswerSheet from './components/VideoAnswerSheet'

class Question extends Component {

  constructor() {
    super()
    this.state = {
      loadData: false,
      number: 1,
      isLoading: false,
      question_id: null,
      user_id: null,
      answer: "",
      attachment: ""
    }
  }

  componentDidMount = async () => {
    this.loadData(this.state.number)
  }

  changeState = (state, value) => {
    switch (state) {
      case 'answer':
        this.setState({
          answer: value
        })
        break;

      case 'attachment':
        this.setState({
          attachment: value
        })
        break;
    }
  }

  showAnswerSheet = () => {
    switch (this.props.questions.type) {
      case 'text':
        return (
          <TextAnswerSheet changeState={this.changeState} />
        )
      case "multiple choice":
        return (
          <MultipleChoiceAnswerSheet changeState={this.changeState} choice={this.props.questions.data.options} type={"multiple choice"} />
        )
      case "multiple select":
        return (
          <MultipleSelectAnswerSheet changeState={this.changeState} choice={this.props.questions.data.options} type={"multiple select"} />
        )
      case "video record":
        return (
          <VideoAnswerSheet changeState={this.changeState} />
        )
      default:
        return (
          <View />
        )
    }
  }

  nextQuestion = async () => {
    this.props.submitAnswer({
      question_id: this.props.questions.data.id,
      user_id: this.props.user.id,
      answer: this.state.answer,
      attachment: this.state.attachment
    })
    await this.setState({
      answer: "",
      attachment: "",
      isLoading: true,
      number: this.state.number + 1
    })
    this.loadData(this.state.number)
  }

  SubmitQuestion = () => {
    this.props.submitAnswer({
      question_id: this.props.questions.data.id,
      user_id: this.props.user_id,
      answer: this.state.answer,
      attachment: this.state.attachment
    })
    Alert.alert('thank you for participating', 'the results will be announced next week',
      [
        { text: "logout", onPress: () => this.props.navigation.navigate('Initial') }
      ])
  }

  handleTimeOut = () => {
    (this.props.questions.data.number == this.props.questions.question_count) ?
      this.SubmitQuestion()
      :
      this.nextQuestion()

  }

  loadData = async (number) => {
    await this.props.getQuestion(number)
    this.setState({
      isLoading: false
    })
  }



  render() {
    return (
      <View style={[globalStyles.containerTransparent, { justifyContent: 'space-between' }]}>
        {
          (this.state.isLoading) ? <Loading /> : null
        }
        <View style={{ borderWidth: 1, width: "100%", padding: 10, borderColor: "#aaa" }}>
          <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
            <Text style={{ fontSize:18 }}>question number {this.props.questions.data.number} of {this.props.questions.question_count}</Text>
            
            <CountDown until={this.props.questions.data.timer * 60}
              onFinish={ this.handleTimeOut }
              size={14}
              digitStyle={{ backgroundColor: 'transparent',marginTop:-5}}
              digitTxtStyle={{ color: 'black' }}
              timeToShow={['M', 'S']}
              timeLabels={{m: null, s: null}} />
          </View>

          {
            (this.props.questions.data.description) ?
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>{this.props.questions.data.description}</Text> : null
          }
        </View>
        {
          this.showAnswerSheet()
        }
        {
          (this.props.questions.data.number == this.props.questions.question_count) ?
            <Button title={"Submit"} type={"outline"}
              containerStyle={{ width: '100%', height: 60 }}
              buttonStyle={{ borderColor: color.light, height: 60, backgroundColor: color.primary }}
              titleStyle={{ color: color.light }}
              onPress={() => {
                this.SubmitQuestion()

              }} />
            :
            <Button title={"Next"} type={"outline"}
              containerStyle={{ width: '100%', height: 60 }}
              buttonStyle={{ borderColor: color.light, height: 60, backgroundColor: color.primary }}
              titleStyle={{ color: color.light }}
              disabled={
                (this.state.answer === '') ?
                true
                :
                false
              }
              onPress={() => {
                this.nextQuestion()
              }} />
        }
      </View>
    );
  }
}




const mapStateToProps = state => {
  return {
    questions: state.questions,
    user: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    defaultValue: () => dispatch(actionQuestion.defaultValue()),
    getQuestion: (number) => dispatch(actionQuestion.getQuestion(number)),
    addAnswer: (data) => dispatch(actionQuestion.addAnswer(data)),
    submitAnswer: (data) => dispatch(actionQuestion.submitAnswer(data)),
  }
}

const QuestionScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default QuestionScreen
