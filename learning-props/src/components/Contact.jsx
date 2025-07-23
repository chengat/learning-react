export default function Contact(props) {
  return (
    <article className="contact-card">
      <img src={props.img} alt="Photo of Mr. Whiskerson" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./src/assets/phone-icon.png" alt="phone icon" />
        <p>{props.number}</p>
      </div>
      <div className="info-group">
        <img src="./src/assets/mail-icon.png" alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}

//-----------------Destructuring Props------------------
// export default function Contact({ img, name, number, email }) {
//   return (
//     <article className="contact-card">
//       <img src={img} alt="Photo of Mr. Whiskerson" />
//       <h3>{name}</h3>
//       <div className="info-group">
//         <img src="./src/assets/phone-icon.png" alt="phone icon" />
//         <p>{number}</p>
//       </div>
//       <div className="info-group">
//         <img src="./src/assets/mail-icon.png" alt="mail icon" />
//         <p>{email}</p>
//       </div>
//     </article>
//   );
// }
