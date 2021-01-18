import React, { Children } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let books = [
  {
    title: "I Love you to the moon and back",
    author: "Amerlia Hepworth",
    img:
      "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    title: "1984 (Signet Classics)",
    author: "George Orwell",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg"
  }
];
function Booklist() {
  return (
    <section className="booklist">
      {books.map((e) => {
        // console.log(e);
        return (
          <Book img={e.img} author={e.author} title={e.title}>
            <p>This is a child element </p>
          </Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);

  return (
    <article className="book">
      <img src={props.img} alt=""></img>
      {props.children}
      <p> {props.title}</p>
      <p>{props.author.toUpperCase()}</p>
      <p>{} </p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
