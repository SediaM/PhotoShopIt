import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Chat from '../components/Chat';
import AddChat from '../components/AddChat';

import { SINGLE_PHOTO } from '../utils/queries';

const OnePost = () => {
    // Use `useParams()` to retrieve value of the route parameter 
    const { photoId } = useParams();

    const { loading, data } = useQuery(SINGLE_PHOTO, {
        // pass URL parameter
        variables: { photoId: photoId },
    });

    const photo = data?.photo || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="my-3">
            <h3 className="card-header bg-dark text-light p-2 m-0">
                {photo.photoOwner} <br />
                <span style={{ fontSize: '1rem' }}>
                    posted this on {photo.date}
                </span>
            </h3>
            <div className="bg-light py-4">
                <blockquote
                    className="p-4"
                    style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        border: '2px dotted #1a1a1a',
                        lineHeight: '1.5',
                    }}
                >
                    {photo.description}
                </blockquote>
            </div>

            <div className="my-5">
                <Chat comments={photo.comments} />
            </div>
            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <AddChat photoId={photo._id} />
            </div>
        </div>
    );
};

export default OnePost;
