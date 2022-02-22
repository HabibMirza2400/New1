export const CourcesReducer = (state = initialState, action) => {
  if (action.type === "ADD_COURCES") {
    return {
      ...state,
      Cources: [action.data, ...state.Cources],
    };
  } else return state;
  // return state;
};
const initialState = {
  Cources: [
    {
      title: "HTML",
      desc: "HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet. ... HTML markup tags specify document elements such as headings, paragraphs, and tables. They mark up a document for display by a computer program known as a Web browser.      ",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    },
    {
      title: "CSS",
      desc: "CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or in other media · CSS saves a lot of work.      ",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    },
    {
      title: "JavaScript",
      desc: "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. ... JavaScript can function as both a procedural and an object oriented language.",
      img: "https://us.123rf.com/450wm/wikagraphic/wikagraphic2010/wikagraphic201032493/157994480-js-letter-logo-in-a-circle-gold-and-silver-colored-vector-design-template-elements-for-your-business.jpg?ver=6",
    },
  ],
};
