import ReactDOM from 'react-dom/client';

const Welcome = (props) => {
    return<h1>Hello, {props.name}</h1>
}


const Name = () => {
    return(
        <div>
            <Welcome name="Bam"/>
            <Welcome name="Khash"/>
            <Welcome name="Ped"/>
        </div>
    )
}

// function formatDate(date) {
//     return date.toLocaleDateString();
//   }
  
//   function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//                src={props.author.avatarUrl}
//                alt={props.author.name} />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );      
//   }
  
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'http://placekitten.com/g/64/64'
//     }
//   };
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <Comment
//       date={comment.date}
//       text={comment.text}
//       author={comment.author} />
//   );
  

export default Name;
// export default Comment;