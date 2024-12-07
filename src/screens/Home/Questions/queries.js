import { gql } from "@apollo/client";

export const Get_QUESTIONS_SUBSCRIPTIONS = gql 
`subscription{
  questions(order_by: {created_at: desc}) {
    id
    text
    user_id
  }
}
`;

export const ADD_NEW_QUESTION_MUTATION = gql
`mutation AddNewQuestionMutation($title: String!, $options: [options_insert_input!]!
  $user_id: String!
) {
  insert_questions_one(object: {text: $title, user_id : $user_id, options: {data: $options}}) {
    id
    text
  }
}
`

export const DELETE_QUESTION_MUTATION = gql
`
mutation DeleteQuestion($id: Int!) {
  delete_questions_by_pk(id: $id) {
    id
  }
}
`
