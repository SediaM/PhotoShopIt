


const HeaderTopSpace = () => {
    return(
        <header>
            <div className="ontainer flex-row justify-center align-center">
                <div>
                    <h1>Search for a Photo!</h1>
                </div>
                <p>The place of editing and discussion</p>
            </div>
        </header>
    )


}

export default HeaderTopSpace;

// const Footer = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     return (
//         <footer className="w-100 mt-auto text-dark p-4">
//             <div className="container text-center mb-5">
//                 {location.pathname !== '/' && (
//                     <button
//                         className="btn btn-dark mb-3"
//                         onClick={() => navigate(-1)}
//                     >
//                         &larr; Go Back
//                     </button>
//                 )}
//                 <h4>&copy; {new Date().getFullYear()} - Photo Flip</h4>
//             </div>
//         </footer>
//     );
// };

// export default Footer;