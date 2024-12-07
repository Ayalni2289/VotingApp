import { gql } from "@apollo/client";

export const GET_QUESTION_DETAILS = gql
`
query QuestionDetail($id: Int!, $user_id: String!) {
  questions_by_pk(id: $id) {
    id
    text
    answers(limit: 1, where: {user_id: {_eq:$user_id}}) {
      id
      user_id
      }
      options {
        id
        text
      }
    }
  }
`;

export const NEW_ANSWER_MUTATION= gql`
mutation SubmitOption($option_id: Int!, $user_id: String!, $question_id: Int!) {
  insert_answers_one(object: {option_id:$option_id , user_id: $user_id, question_id: $question_id}) {
  id
  }
}
`
export const RESULTS_SUBSCRIPTION = gql`
subscription MySubscription($id: Int!) {
  questions_by_pk(id:$id ) {
    options {
      id
      text
      answers_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}

`