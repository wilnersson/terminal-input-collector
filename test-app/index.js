/**
 * The main starting point for the test-application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import { collector } from '../src/index.js'

// const usersAge = await collector.getIntegerInput('How old are you?', 1, 200)

// console.log('Your age is: ' + usersAge)

// const todaysMood = await collector.getStringInput('How are you today?', 100)

// console.log(`Your mood today is: ${todaysMood}`)

// const usersName = await collector.getStringInput('What is your name?', 3)

// console.log(`Nice to meet you ${usersName}`)

// const password = await collector.getPasswordInput('Password:', 8, 1000)

// console.log(`Your password is: ${password}`)

const singleChoiceAnswer = await collector.getSingleChoiceInput('Where are you from?', ['Kalmar', 'Växjö', 'Göteborg', 'Malmö'])

console.log('Your answer was: ' + singleChoiceAnswer.choiceNumber + ' - ' + singleChoiceAnswer.choiceText)

const multipleChoiceAnswer = await collector.getMultipleChoiceInput('Where are you from?', ['Kalmar', 'Växjö', 'Göteborg', 'Malmö'])

console.log(multipleChoiceAnswer)
