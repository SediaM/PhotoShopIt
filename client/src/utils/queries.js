
import { gql } from '@apollo/client';

export const GET_ME = gql`
query me($username: String!) {
  me($username: $username) {
    _id
    username
    email
    password
    photos {
      _id
      title
      photoId
      photoOwner
      description
      imageLink
      deleteHash
      date
      }
    }
  }
}
`;

export const GET_PHOTO = gql`
query getPhotos {
  photos {
      _id
      title
      photoId
      photoOwner
      description
      imageLink
      deleteHash
      date
      }
    }
`;

export const SINGLE_PHOTO = gql`
  query getSinglePhoto ($photoId: ID!) {
    photo(photoId: $photoId) {
      _id
      title
      photoId
      photoOwner
      description
      imageLink
      deleteHash
      date
      comments {
        _id
        editPhoto
        username
        createdAt
        commentBody
        likes 
        dislikes
      }
    }
  }

`


export const GET_COMMENT = gql`
query getCmment {
  comments {
      _id
      editPhoto
      username
      createdAt
      commentBody
      likes 
      dislikes
      }
    }
`;