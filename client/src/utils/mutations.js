import { gpl } from "@apollo/client";

export const LOGIN_USER = gpl`
mutation login($email: String!, $password: String!) {
    login(email: $email , password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gpl`
mutation adduser($username: String! , $email: String! , $password: String!) {
    addUser(username: $username , email: $email , password: $password){
        token
        user{
            _id
            username
        }
    }
}
`;

